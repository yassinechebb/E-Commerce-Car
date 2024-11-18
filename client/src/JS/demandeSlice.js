import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getdemande = createAsyncThunk("demande/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/demande/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const adddemande = createAsyncThunk("demande/add", async (newdemande) => {
  try {
    let result = await axios.post("http://localhost:5000/demande/add", newdemande);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletedemande = createAsyncThunk("demande/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/demande/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editdemande = createAsyncThunk(
  "demande/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/demande/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  demandelist: null,
  status: null,
};

export const demandeSlice = createSlice({
  name: "demande",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getdemande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getdemande.fulfilled, (state, action) => {
        state.status = "success";
        state.demandelist = action.payload.data.demandes;
      })
      .addCase(getdemande.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(adddemande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(adddemande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(adddemande.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deletedemande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletedemande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletedemande.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editdemande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editdemande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editdemande.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default demandeSlice.reducer;