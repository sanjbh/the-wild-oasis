import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export const deleteCabin = async (cabinId) => {
  console.log(`Deleting cabin with id ${cabinId}`);
  const { error } = await supabase.from("cabins").delete().eq("id", cabinId);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
};

export const createCabin = async (cabinData) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([
      /* {
        name: cabinData.name,
        maxCapacity: cabinData.maxCapacity,
        regularPrice: cabinData.regularPrice,
        discount: cabinData.discount,
        description: cabinData.description,
      } */ cabinData,
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be added");
  }
  return data;
};
