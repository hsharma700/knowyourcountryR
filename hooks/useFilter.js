const useFilter = (array, searchInput, regionFilter) => {
    return (array.filter((singleData)=>{
        if(searchInput && regionFilter){
           return( singleData.name.common.toLowerCase().includes(searchInput.toLowerCase()) && 
            singleData.region.toLowerCase().includes(regionFilter))
        }
        if(searchInput){
            return singleData.name.common.toLowerCase().includes(searchInput.toLowerCase())
        }
        if(regionFilter){
            return singleData.region.toLowerCase().includes(regionFilter)
        }
        return array
    }))
};

export default useFilter