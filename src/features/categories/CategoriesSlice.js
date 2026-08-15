import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../api/supabaseClient";

export const fetchCategories = createAsyncThunk(
  "Categories/fetchCategories",
  async () => {
    const { data, error } = await supabase
      .from("products")
<<<<<<< HEAD
      .select("category")
      .order("id", { ascending: true })
      .neq("category", null);
=======
      .select("category") 
      .order("id", { ascending: true })
      .neq("category", null); 
>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
    if (error) throw new Error(error.message);
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    return uniqueCategories;
  }
);
<<<<<<< HEAD
=======

>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
