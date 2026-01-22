const { createClient } = require('@supabase/supabase-js');
const fs = require('fs'); // مكتبة قراءة الملفات من الجهاز

// بيانات مشروعك الجديد
const SUPABASE_URL = "https://qnuiziqodfwrlkbuitoo.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_U699y1EmGEjPs5aRfAh16g_mKX4qFzu";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const uploadAllProducts = async () => {
  try {
    console.log('--- جاري قراءة الملف المحلي products.json ---');
    
    // 1. قراءة الملف من جهازك
    const rawData = fs.readFileSync('./products.json');
    const data = JSON.parse(rawData);

    console.log(`تم العثور على ${data.products.length} منتج. جاري الرفع...`);

    // 2. تنسيق البيانات لتناسب جدولك
    const formattedProducts = data.products.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      category: p.category,
      price: p.price,
      discountPercentage: p.discountPercentage,
      rating: p.rating,
      stock: p.stock,
      brand: p.brand,
      shippingInformation: p.shippingInformation,
      returnPolicy: p.returnPolicy,
      minimumOrderQuantity: p.minimumOrderQuantity,
      meta: p.meta,
      images: p.images, 
      thumbnail: p.thumbnail,
      availabilityStatus: p.availabilityStatus
    }));

    // 3. الرفع لـ Supabase
    const { error } = await supabase
      .from('products')
      .upsert(formattedProducts, { onConflict: 'id' });

    if (error) throw error;

    console.log('✅ مبروك! الـ 194 منتج ارفعوا بالكامل.');
  } catch (err) {
    console.error('❌ خطأ:', err.message);
    console.log('تأكدي أن ملف products.json موجود في نفس الفولدر بجانب seed.js');
  }
};

uploadAllProducts();