const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SUPABASE_URL = "https://qnuiziqodfwrlkbuitoo.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_U699y1EmGEjPs5aRfAh16g_mKX4qFzu";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function uploadReviews() {
    console.log("1. جاري بدء العملية...");
    
    try {
        // قراءة الملف
        const data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));
        console.log(`2. تم قراءة ${data.products.length} منتج من الملف.`);

        let allReviews = [];
        let idCounter = 1;

        data.products.forEach(product => {
            if (product.reviews) {
                product.reviews.forEach(rev => {
                    allReviews.push({
                        id: idCounter++,
                        product_id: product.id,
                        rating: rev.rating,
                        comment: rev.comment,
                        reviewerName: rev.reviewerName,
                        reviewerEmail: rev.reviewerEmail,
                        date: rev.date
                    });
                });
            }
        });

        console.log(`3. تم تجهيز ${allReviews.length} مراجعة للرفع.`);

        if (allReviews.length === 0) {
            console.log("⚠️ تحذير: لم يتم العثور على مراجعات داخل ملف products.json");
            return;
        }

        // الرفع لـ Supabase
        const { data: result, error } = await supabase
            .from('reviews')
            .upsert(allReviews);

        if (error) {
            console.error("❌ خطأ من Supabase:", error.message);
        } else {
            console.log("✅ مبروك! المراجعات ارفعت بنجاح.");
        }

    } catch (err) {
        console.error("❌ خطأ داخلي:", err.message);
    }
}

uploadReviews();