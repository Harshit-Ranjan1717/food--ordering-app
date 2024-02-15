export function filterData(searchText,restraunts){
    const filterData= restraunts.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}