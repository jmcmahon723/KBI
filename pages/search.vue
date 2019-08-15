
<template>
  <ais-instant-search-ssr :search-client="searchClient" index-name="kbi" class="">
   
  <div class="flex flex-wrap w-full ">
  <div class="flex flex-col w-full md:w-3/4 bg-white ">
  <div class="mt-1 flex container mx-auto">
            <div class="flex md:flex-row flex-col mx-auto w-full ">
              <div class="flex flex-col w-full md:w-1/4 md:ml-8 px-2 ">
                


                
             <div class="flex flex-col mx-auto max-w-lg mt-2 w-full mb-4 ml-4">
              <ais-search-box class="mt-16"/>
              <ais-stats />

              <div class=" mt-8 mb-4 t2 font-extrabold text-gray-500 text-sm font-bold uppercase "> <!-- <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> -->Filters </div>
              <ais-refinement-list
            attribute="servicecollection" class=""
          />
        </div>
      </div>



            <div class="flex flex-col px-5 mx-auto md:max-w-xl mb-3 mt-1 ">

          <div class="flex flex-col md:max-w-xl   md:w-full">

                <div class="flex flex-col w-full mb-2 mt-2 ">

        
                <ais-current-refinements
          :included-attributes="['servicecollection']" class="border-none topcat t3 text-black text-3xl align-middle justify-left leading-tight "

        >

                    <div
                slot="refinement"
                slot-scope="{ refinement, refine, createURL }"
                :href="createURL(refinement)"
                @click.prevent="refine(refinement)"
                class="border-none topcat t3 text-black text-3xl justify-left leading-tight ml-0 mr-0 p-0 mt-4 mb-6"
                
              >


                {{ refinement.label }} 

              </div>

                    </ais-current-refinements>

    <!-- <ais-refinement-list attribute="brand" /> -->
    <ais-hits class="flex flex-col px-4">
     
      
      <ul slot-scope="{ items }" class="mt-16 bg-white leading-tight" >
        <div class="t2 mb-5 font-extrabold text-gray-500 text-sm uppercase ">WHY KBI</div>
    <li v-for="item in items" :key="item.objectID" class="mb-2 py-2 " v-if="item.contentType == 'collection' && item.description ">
       {{item.description}}
    </li>
    <div class="mt-8 t2 mb-5 font-extrabold text-gray-500 text-sm uppercase ">TOP Highlights</div>
    <li v-for="item in items" :key="item.objectID" class="mb-2 py-2 " v-if="item.contentType == 'highlight' && item.name ">
      {{ item.name }}
    </li>
  <!--       <div class="text-bold text-gray-500">Key Stats</div>
    <li v-for="item in items" :key="item.objectID" class="mb-2 py-2 " v-if="item.contentType == 'stat' && item.name ">
      {{item.keyStat}} {{ item.name }}
    </li> -->
    
     <div class="t2 mt-8 mb-5 font-extrabold text-gray-500 text-sm uppercase ">Facilities</div>
    <li v-for="item in items" :key="item.objectID" class="mb-2 " v-if="item.contentType == 'facility' && item.name ">
      {{ item.name }}
    </li>
    <div class="t2 mt-8 mb-5 font-extrabold text-gray-500 text-sm uppercase ">Equipment</div>
    <li v-for="item in items" :key="item.objectID" class="mb-2 py-2 " v-if="item.contentType == 'equipment' && item.name ">
      {{ item.name }}
    </li>
  </ul>

    </ais-hits>
</div>
</div>
</div>
</div>
</div>
</div>

          <div class="flex flex-wrap md:w-1/4 w-full bg-gray-100 border-l border-gray-100 ">






    <div class="flex flex-wrap md:flex-row w-full mt-4">


 

           
                  
    
    



  
  

  <div class="flex flex-col w-full px-3">

                    <div class=" mt-16 t2 font-extrabold text-gray-500 text-sm font-bold uppercase "> <!-- <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> -->Key Stats</div>
        <div class="infocard mb-6 mr-1 w-full md:w-5/6">
          
          
          <div class="flex flex-col items-start w-full">
          <div class="text-sm leading-none px-2 mt-2 mb-2 w-full">
            

                        <ais-hits>
                  <ul slot-scope="{ items }" class="orange">
                   <li v-for="item in items" :key="item.objectID" class="mb-2 py-2 " v-if="item.contentType == 'stat' && item.name ">
                    <div class="flex flex-row w-full ">
                  <div class="w-1/4 my-auto text-2xl text-right mr-4 font-extrabold">{{item.keyStat}} </div>
                  <div class="w-3/4 text-sm">{{item.name}} </div>
                  </div>
                </li>
              </ul>

            </ais-hits>

            </div>
            </div>
        </div>

</div>
</div>
            </div>
        </div>
    <!-- <ais-pagination /> -->
  </ais-instant-search-ssr>
</template>



<script>
import {
  AisInstantSearchSsr,
  AisRefinementList,

  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  
  AisPagination,
  createInstantSearch
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'CGG4BOMP2D',
  '2aa544e9b0937b9f39f441eac1357838'
);

const { instantsearch, rootMixin } = createInstantSearch({
  searchClient,
  indexName: 'kbi'
});

export default {
  asyncData() {
    return instantsearch
      .findResultsState({
        // find out which parameters to use here using ais-state-results
        query: '',
        hitsPerPage: 100,
        disjunctiveFacets: ['servicecollection'],
        // disjunctiveFacetsRefinements: { brand: ['Apple'] }
      })
      .then(() => ({
        instantSearchState: instantsearch.getState()
      }));
  },
  beforeMount() {
    instantsearch.hydrate(this.instantSearchState);
  },
  mixins: [rootMixin],
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,

    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css'
        }
      ]
    };
  }
};
</script>

<style>
  
/*  .ais-SearchBox-input {
  font-size:.875rem !important;
  color:#4a5568 !important;
  border: 1px solid #dee2e6;
  border:none;
  padding-top: .4rem;
  padding-bottom: .4rem;
 
}
*/

.ais-SearchBox-input::placeholder {
  font-size:.875rem;
  /*color:#4a5568;*/
  color:#1a202c;
 
}



.ais-Menu-item--selected {
  
 
  font-weight:900;
  
  
}

.ais-Menu-label {
  font-size:12px;
  margin-top:.5rem;
  color:#1062ed;

}




.ais-Pagination-link {
  font-size:12px !important;
  

}

.ais-Pagination-item {
  
}



.bestknown6
{
  font-size:10px !important;

}

.ais-CurrentRefinements-label {
  display:none;
  background: #f7fafc
  /*margin-right: .5rem;*/

}


.ais-CurrentRefinements-item {
  
  background-color:#edf2f7;


  border: .5px solid #dee2e6;
  border-radius: 9999px;
  font-size:10px;
  /*background-color: #d8e6fc;
  color:#fff;*/
  margin:.5rem;
  /*font-size:8px !important;*/

  /*display: block;*/


}

.ais-CurrentRefinements-list {
 /* display:block;*/
  flex-wrap: wrap;

}

.ais-CurrentRefinements-delete {
  
   color:#2a4365;
  font-size:.75rem;

}



.ais-CurrentRefinements-categoryLabel {
 
  font-size:.75rem !important;
  color:#2a4365;

 /* color:#4299e1;*/
  /*margin: .25rem;*/
  /*display:block;*/

}



.bigtypes {
  font-size:.5rem !important;
}
/*
.ais-RefinementList-labelText {
  font-size:12px;
  line-height: 1;
}*/

.ais-RefinementList-count {
  font-size:12px !important;



}
.ais-RefinementList-labelText {
  font-size: 1rem !important;
  line-height: 2 !important;
  font-weight: bold;
}


.ais-RefinementList-showMore {

width:100%;
background-color: #fff;
color:#4a5568;



padding-top: .5rem;
padding-bottom: .5rem;
border: 1px solid #dee2e6;


}

.ais-RefinementList-showMore:hover {

  background-color: #e0e2e2;


    /*background-color:white;*/
}

.ais-RefinementList-showMore:focus {

  /*background-color: #e0e2e2;
*/

background-color:#fff;
/*width:50%;
/*color:#1062ed;*/
/*margin: .5rem;
padding:.5rem;*/


}

/*.ais-RefinementList-list {
  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2;
       list-style-type: none;
       margin:.5rem;
       padding:.5rem;

}*/

.ais-RefinementList {
 
       /*background-color: #fff;*/

}



.ais-Menu-count {
  color:#718096;
}

.headerhero {
  height:500px;

}

.tags {
  font-size:.75rem;
  
}

.countstyle {

  /*background-color: #d8e6fc;*/
  font-size:.65rem;
}

@media (min-width: 576px) {

  .colsfortagsall {

  -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2;
       list-style-type: none;
      
       padding-left:.5rem;
       padding-right:.5rem;

}
   
    }







.colbr {
  -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
               break-inside: avoid;
}



/*.li {
 
  display: inline-block;
  width: 100%;
  padding-bottom: 20px;
}*/

/*.ais-RefinementList-checkbox {
  background-color: #fff;
}*/

.topcat .ais-CurrentRefinements-categoryLabel {
 
  font-size:2rem !important;
  color:#2a4365;
  border:none !important;


}

.topcat .ais-CurrentRefinements-item {
  
 border:none;
 margin: 0;
 padding: 0;
 background:none;


}

.topcat .ais-CurrentRefinements-category {
  margin-left:0;
}

.ais-HierarchicalMenu-link{
  color:#1062ed;
  transition:none;
  margin-bottom:5px;
  font-size:.75rem;

}

.ais-HierarchicalMenu-label{
  
  font-size:14px;

}

.ais-HierarchicalMenu-count{
  color:#718096;
  background:#edf2f7;
}

.ais-HierarchicalMenu-link:focus {
  color:#1062ed;
}

.ais-HierarchicalMenu-link:hover {
  color:#1062ed;
}

.ais-HierarchicalMenu-list--child {
  font-family: AvenirNextLTW01-Regular, sans-serif;
  font-size:.75rem;
}

.orange {
  color: #f57e32;
}



</style>