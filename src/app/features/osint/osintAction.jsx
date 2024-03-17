import { createAsyncThunk } from "@reduxjs/toolkit";
import * as osintService from "@/api/osintFetch.js";

// OSINT başlatma için asenkron eylem oluştur
export const startOsintAsync = createAsyncThunk(
  "osint",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await osintService.startOsint(formData);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);
