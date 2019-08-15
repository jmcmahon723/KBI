
<template>
  
  <div class="category-search">
        
    <ais-instant-search
          :search-client="searchClient"
          index-name="org_testindex_production"
          :routing="routing"
        > 





  <div class="flex flex-wrap w-full">
      <div class="flex flex-wrap w-full ">

       
        <!-- <ais-configure
          
          :disjunctive-facets-refinements.camel="{ state_titles: ['USA United States'] }"
          /> -->
              
             
            
        
          
        
        <div class="flex flex-col w-full md:w-3/4 bg-white ">

          
   
          <div class="mt-1 flex container mx-auto">
            <div class="flex md:flex-row flex-col mx-auto w-full ">
              <div class="flex flex-col w-full md:w-1/4 md:ml-8 px-2 ">
                


                
             <div class="flex flex-col mx-auto max-w-lg mt-2 w-full mb-4 ">
              
                
               <div class="flex flex-row text-base w-full mt-3 pb-2 md:text-xs text-gray-500 t0 justify-left text-xs tags ">

                  <a class="text-xs mr-1 text-gray-500" href="/hope-portal/explore">Hope Portal </a>  
                  <p class="text-xs text-gray-500"> >  Organizations </p>
                </div>
                

                



            
        
          <ais-search-box placeholder="Search organizations..." class="items-center t0 text-sm shadow w-full rounded mb-4"  style="color:black !important;">

                        <div slot="submit-icon" >

                        <SearchIcon class="outline-current w-3 h-3 text-gray-500 ml-1 mr-1" />

      
                        </div>
  
              </ais-search-box>
               <div class="w-full">
              
              <ais-clear-refinements class="flex flex-wrap ">
                <a
                  slot-scope="{ canRefine, refine, createURL }"
                  :href="createURL()"
                  @click.prevent="refine"
                  v-if="canRefine"
                  :excluded-attributes="['']"
                  class="text-xs text-left underline text-primary mr-2"
                >
                  Clear Categories
                </a>




















              </ais-clear-refinements>

            </div>
              

              </div>
    <div class="flex flex-col ">

    
   

                      <div class="text-xs text-gray-500 t2 uppercase ">


                      Search by Category</div>
                      
            <div class="flex flex-col w-full  mx-auto">
           
            <ul class="flex flex-col text-xs mt-3 w-full relative">

              <li>
                
                            <ais-hierarchical-menu
                          :attributes="
                          [
                    'hierarch.lvl0',
                    'hierarch.lvl1',
                    ]" class="t2 text-primary text-xs">


</ais-hierarchical-menu>
              
              </li>

              

                      <li><div class="text-xs text-gray-500 t2 uppercase mb-3 mt-4 ">


                      Narrow Search</div></li>
                

                <li class="flex mb-2 mt-2">


                                <ais-refinement-list
                                  attribute="state_titles" show-more :limit="0" :sort-by="['name:asc']"  operator="or"
                                  class="w-full t2"
                                >
                                 

                                <span  slot="showMoreLabel" slot-scope="{ isShowingMore }">
                  {{ !isShowingMore ? '\xa0\xa0Narrow By Location\xa0\xa0\xa0\xa0▾\xa0' : 'Close' }}
                  </span>
                                 
                                </ais-refinement-list>



                </li>
                    
                  <li class="flex mb-3">

                    <ais-refinement-list
                                  attribute="diagnoses" show-more :limit="0" :sort-by="['name:asc']"  operator="or" 
                                  class="w-full t2"
                                >
                                <span class="w-full" slot="showMoreLabel" slot-scope="{ isShowingMore }">
                      {{ !isShowingMore ? ' \xa0\xa0Narrow By Diagnosis\xa0\xa0\xa0▾\xa0' : 'Close' }}
                        </span>
                               
                                </ais-refinement-list>

                    </li>

 
                    </ul>
                  </div>
                  <!-- </div> -->
                </div>
            </div>

            

          
 

      <div class="flex flex-col px-5 mx-auto md:max-w-xl mb-3 mt-1 ">

          <div class="flex flex-col md:max-w-xl   md:w-full">
              
                
                
                <!-- <div class="flex flex-row w-full pb-3 text-black text-3xl align-middle justify-left t3  mb-1 leading-tight">Financial Assistance </div> -->

                <div class="flex flex-col w-full mb-2 mt-2 ">

        <div class="">
                <ais-current-refinements
          :included-attributes="['hierarch.lvl0']" class="border-none topcat t3 text-black text-3xl align-middle justify-left leading-tight "
          
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
      </div>

      
</div>

            
        
        
              </div>

       



      <div class="flex flex-row justify-between t2 text-xs mb-2 mt-1">
      <div class="text-xs text-gray-600">Showing Results For
      </div>
      <div class="text-xs">
        <ais-stats class="text-xs text-gray-600">
          
          <div slot-scope="{ nbHits }" class="text-xs text-gray-600">
  
    {{ nbHits }} Childhood Cancer Organizations
  </div>
        </ais-stats>
      </div>
    </div>

      <div class="flex flex-row w-full mb-2 ">

        <div class="w-3/4">
          
         <ais-current-refinements
          :excluded-attributes="['']" class="inline t2 text-xs text-blue-900 border-gray-700 "
        />
      </div>
        

                
        <div class="w-1/4">
              
              <ais-clear-refinements class="flex flex-wrap my-auto justify-right float-right">
                <a
                  slot-scope="{ canRefine, refine, createURL }"
                  :href="createURL()"
                  @click.prevent="refine"
                  v-if="canRefine"
                  :excluded-attributes="['']"
                  class="text-sm inline text-right underline text-primary mr-2"
                >
                  Clear Categories
                </a>




















              </ais-clear-refinements>

            </div>


      </div>
    

        <ais-hits :transform-items="transformItems">

          <!-- <div v-if=></div> -->

                      

            <div slot-scope="{ items }" class="flex flex-col w-full max-w-xl mx-auto mb-3 ml-2 ">


              

              
                <div v-for="item in items" :key="item.objectID">

                      <a :href="'/orgs/' + item.objectID" target="_blank" class=" hover:no-underline no-underline">

                          <div class="rounded-lg w-full h-full max-w-xl overflow-hidden card mb-4 hover:shadow-lg mx-auto" >
                            <div class="flex-col w-full ">

                          <div class="w-full mb-3">
                              <img :src="item.default_image" class="mx-auto" style="max-height: 18rem;" >
                            
                          </div>


                      
                          
                            
                            <div class="px-4">
                              <div class="inline w-full">


                            <a :href="'/orgs/' + item.objectID" class="text-gray-800 hover:underline hover:text-primary font-bold text-base align-middle justify-left t3" target="_blank">
                              {{ item.title }}
                            </a>

                           <span class="justify-right float-right">
                              <img v-if="item.require_sw" class="justify-right float-right"
                                src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                                style="width: 25px; height: 25px; border-radius: 100%; float:right;">
                            </span>
                          </div>
                          

                      

                          
                            <div class="flex flex-row w-full my-auto items-center justify-left align-middle">

                            

                            <div class="items-center align-middle my-auto">
                              <MapPinIcon class="text-gray-500 stroke-current w-3 h-3 mr-2 t2"/>
                            </div>
                           
                              <div class=" text-gray-500 text-xs items-center align-middle my-auto ">
                              Serves {{ item.location }}
                            </div>
                          </div>

                            <div class="text-sm leading-tight mt-2 text-gray-700 w-full">
                              <p>{{ item.mission|truncate(150) }}</p>
                              
                            </div>

                            

                          
                              
                            <div v-if="item.known_for_admins" class="flex inline-flex items-center mt-3 mb-3 w-full">
                              <div>
                                <AwardIcon class="text-primary align-left -ml-1 mr-2" />
                              </div>
                            
                              
                              <div class="flex flex-col mb-1 ">
                                <div class="text-primary text-left bestknown bestknown6 uppercase opacity-70 t-2">Best Known For</div>
                                <div class="highlightstyle text-primary no-underline leading-tight text-sm t3">{{ item.known_for_admins }}
                                </div>
                                
                                </div>
                              </div>
                                
                        </div>
                      
               
                  </div>
              
              </div>
            </a>

            </div>



            </div>

             <!-- <ais-state-results>
                    <div slot-scope="{ query, hits }" v-if="!hits.length" class="rounded-lg w-full h-full max-w-lg overflow-hidden card mt-1 mb-4 hover:shadow-lg mx-auto justify-center text-center mt-4 text-sm">
                    <p class="inline mt-4">There are no exact matches for <q>{{ query }}</q></p>

                      <a href="/suggest" class="mx-auto mb-2">
                        <button class="rounded-full border border-primary px-3 py-2 ml-1 mr-1 mt-3 mb-3 text-white bg-primary">
                        Suggest This Organization
                      </button>
                      </a>
                    </div>

                  </ais-state-results> -->

                  


         


                    </ais-hits>

                    <div class="flex-row py-4">

                    <ais-pagination :show-last="false" :show-first="false" class="" :padding="2" @click.native="scrollToTop">

                    </ais-pagination>

                  </div>

                  <div class="flex-row py-4 mx-auto text-gray-600 text-sm text-center">
                    
                    Listings do not constitute endorsements

                  </div>



                      
                  
                 </div>   
        </div>

      </div>
        </div>


          
          <div class="flex flex-wrap md:w-1/4 w-full bg-gray-100 border-l border-gray-100 ">






    <div class="flex flex-wrap md:flex-row w-full mt-4">


 

           
                  
    
    



  
  

  <div class="flex flex-col w-full px-3">

                    <div class=" t2 text-gray-700 text-sm font-bold "> <!-- <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> -->Links</div>
        <div class="infocard mb-6 mr-1 w-full md:w-5/6">
          
          
          <div class="flex flex-col items-start">
          <div class="text-sm leading-none px-2 mt-2 mb-2">
            
            <div class="flex flex-row items-center mb-2 px-1 py-2">
              <div class="">
               <SearchIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
<!--                 <div class="mb-1 text-left bestknown text-xs text-gray-500">Organizations</div>
 -->                
                <div class="t2 text-primary leading-tight text-sm ">
                <a href="/organizations" >Find My Organization</a>
              </div>
              </div>
            </div>

            <div class="flex flex-row items-center mb-2 px-1 py-2">
                          <div class="">
                           <UsersIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
                           
                          </div>

                          <div class="flex flex-col">
                            <a class="t2 text-primary leading-tight text-sm " href="https://about.anddit.com/hope-portal">About Hope Portal</a>

                          </div>
                        </div>

                        <div class="flex flex-row items-center mb-2 px-1 py-2">
                          <div class="">
                           <HelpCircleIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
                           
                          </div>

                          <div class="flex flex-col">
                            <a class="t2 text-primary leading-tight text-sm " href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/">Help Center</a>

                          </div>
                        </div>

            <!-- <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <MapPinIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">

                
                <div class="t2 text-primary leading-tight text-sm ">
                <a href="/states" >Find Support Near Me</a>
              </div>
              </div>
            </div> -->

            <!-- <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
                <div class="mb-1 text-left bestknown text-xs text-gray-500">Nurses</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="https://aphon.org/" target="_blank">Assoc. of Pediatric Hem./Onc. Nurses </a>
              </div>
              </div>
            </div> -->


           <!--  <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
                <div class="mb-1 text-left bestknown text-xs text-gray-500">All</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="https://childrensoncologygroup.org/index.php/cog-family-handbook" target="_blank">COG Patient Family Handbook</a>
                <div class="t2 text-primary leading-tight text-sm mt-2 md:text-xs">
                <a href="http://www.survivorshipguidelines.org/" target="_blank">COG Survivorship Guidelines</a>
              </div>

              </div>
              </div>
            </div>
 -->

              
           



            </div>
            </div>
        </div>
        

        <div class=" t2 text-gray-700 text-sm font-bold "> <!-- <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> -->Informational Resources</div>
        <div class="infocard mb-6  mr-1 w-full md:w-5/6">
          
          
          <div class="flex flex-col items-start">
          <div class="text-sm leading-none px-2 mt-2 mb-2">
            
            <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
                <div class="mb-1 text-left bestknown text-xs text-gray-500">Organizations</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="https://cac2.org/" target="_blank">Coalition Against Childhood Cancer</a>
              </div>
              </div>
            </div>

            <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">

                <div class="mb-1 text-left bestknown text-xs text-gray-500">Social Workers</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="http://www.aposw.org/" target="_blank">Assoc. of Pediatric Onc. Social Workers</a>
              </div>
              </div>
            </div>

            <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
                <div class="mb-1 text-left bestknown text-xs text-gray-500">Nurses</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="https://aphon.org/" target="_blank">Assoc. of Pediatric Hem./Onc. Nurses </a>
              </div>
              </div>
            </div>


            <div class="flex flex-row items-center mb-2 px-1 py-3">
              <div class="">
               <LinkIcon class="stroke-current text-gray-500 w-4 h-4 mr-4"/> 
               
              </div>
            
              
              <div class="flex flex-col">
                <div class="mb-1 text-left bestknown text-xs text-gray-500">All</div>
                
                <div class="t2 text-primary leading-tight text-sm md:text-xs">
                <a href="https://childrensoncologygroup.org/index.php/cog-family-handbook" target="_blank">COG Patient Family Handbook</a>
                <div class="t2 text-primary leading-tight text-sm mt-2 md:text-xs">
                <a href="http://www.survivorshipguidelines.org/" target="_blank">COG Survivorship Guidelines</a>
              </div>

              </div>
              </div>
            </div>


              
           



            </div>
            </div>
        </div>





        </div>



        </div>
        </div>
        </div>








                    

                  </div>
                  </ais-instant-search>
                
</div>

</template>


<script>
import algoliasearch from 'algoliasearch/lite';
// import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
// import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';

import { AwardIcon } from 'vue-feather-icons';
import { MapPinIcon } from 'vue-feather-icons';
import { CheckCircleIcon } from 'vue-feather-icons';
import { LinkIcon } from 'vue-feather-icons';
import { ArrowRightCircleIcon } from 'vue-feather-icons';
import { SearchIcon } from 'vue-feather-icons';
import { UsersIcon } from 'vue-feather-icons';
import { HelpCircleIcon } from 'vue-feather-icons';





import { history as historyRouter } from 'instantsearch.js/es/lib/routers';





export default {

  name: "category-search",

  components: {
    AwardIcon,
    MapPinIcon,
    CheckCircleIcon,
    LinkIcon,
    ArrowRightCircleIcon,
    SearchIcon,
    UsersIcon,
    HelpCircleIcon
  },

  // props: {
  //   result: {
  //     type: Object,
  //     required: true
  //   }
  // },


  data() {
    return {
      searchClient: algoliasearch(
        process.env.MIX_ALGOLIA_APP_ID,
        process.env.MIX_ALGOLIA_SEARCH
      ),


      isHidden:false,
      isMenu:false,
      message:'',

      routing: {

        router: historyRouter({
    windowTitle({q, hierarch}) {
      // return `Website / Find ${q} in ${hierarch} hierarch`;
      return `Childhood Cancer Organizations`;
    },
    createURL({ routeState, location }) {
      let baseUrl = location.href.split('/search/')[0];
      if (!routeState.q && routeState["hierarch.lvl0"] === 'all' && routeState.p === 1) return baseUrl;
      if (baseUrl[baseUrl.length - 1] !== '/') baseUrl += '/';
      let routeStateArray = [
        'q', encodeURIComponent(routeState.q),
        'hierarch.lvl0', encodeURIComponent(routeState["hierarch.lvl0"]),
        'p', routeState.p
      ];

      return `${baseUrl}search/${routeStateArray.join('/')}`;
    },
    parseURL({ location }) {
      let routeStateString = location.href.split('/search/')[1];
      if (routeStateString === undefined) return {};
      const routeStateValues = routeStateString.match(/^q\/(.*?)\/hierarch.lvl0\/(.*?)\/p\/(.*?)$/);
      return {
        q: decodeURIComponent(routeStateValues[1]),
        "hierarch.lvl0": decodeURIComponent(routeStateValues[2]),
        p: routeStateValues[3]
      }
    },
  }),
  stateMapping: {
    stateToRoute({query, hierarchicalMenu, page}) {
      return {
        q: query || '',
        "hierarch.lvl0": (hierarchicalMenu &&
          hierarchicalMenu["hierarch.lvl0"] &&
          hierarchicalMenu["hierarch.lvl0"].join('~')) ||
        'all',
        p: page || 1
      };
    },
    routeToState(routeState) {
      if (routeState["hierarch.lvl0"] === 'all') routeState["hierarch.lvl0"] = undefined;

      return {
        query: routeState.q,
        hierarchicalMenu: {
          "hierarch.lvl0": routeState["hierarch.lvl0"] && routeState["hierarch.lvl0"].split('~')},
        page: routeState.p
      };
    },
  }

      }

    };

  },


   


 filters: {
    truncate: function(value, limit) {
      if (!value) return ''
      else if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }


      return value

    }
  },
  methods: {
      transformItems(items) {
        return items.map(item => ({
          ...item,
          location: item.location.split(":")[1],          // location_facets: item.location_facets.split(":")[1],

         
        }));
      },

      transformers(items) {
        return items.map(item => ({
          ...item,
          // value: item.value.split(" ")[0],
          label: item.label.split(" ")[0],
          highlighted: item.highlighted.split(" ")[0], 
        }));
      },

      // transformers2(items) {
      //   return items.filter(item => item.label !== 'National' && item.label !== 'US' && item.label !== '+ All United States');
          
      // },

      // transformers3(items) {
      //   return items.filter(item => item.label !== 'All Childhood Cancer');
          
      // },
//         transformers4(items) {
//         return items.filter(item => item.label !== 'Care / Comfort Items' && item.label !== 'Wishes / Experiences' && item.label !== 'Peer Support' && item.label !== 'Survivorship' && item.label !== 'Emotional Support' && item.label !== 'Information' && item.label !== 'Psychosocial Support' && item.label !== 'In-Person Support'
//           && item.label !== 'Teenagers' && item.label !== 'Siblings' && item.label !== 'Camps' );
// },

      



    


     

      scrollToTop() {
                window.scrollTo(0,50);
           },


    }

  // computed: {
  //   displayableLocation() {
  //     return this.item.location.split(":")[1];
  //   }
  // }

  // methods: {


  //  hasDefaultImage(result) {
  //     return result.default_image && result.default_image.length > 0;
  //   },
  //   bgGradientFor(result) {
      

  //     if (this.hasDefaultImage(result)) {
  //       return `url(${
  //         result.default_image
  //       }); background-position: center; background-size: cover; background-repeat: no-repeat; `;
  //     } else if (this.hasBgImage(result)) {
  //       return `url(${
  //         result.banner_image_url
  //       }); background-size: cover; background-position: center; background-repeat: no-repeat;`;
  //     } else if (this.hasAvatarImage(result)) {
  //       return `url(${
  //         result.avatar_url
  //       }); background-position: center; background-size: contain; background-repeat: no-repeat;`;
  //     } else {
  //       return "linear-gradient(180deg,#f44881,#ec454f);";
  //     }
  //   }
  // }
};

</script>


<style>





.ais-SearchBox-input {
  font-size:.875rem !important;
  color:#4a5568 !important;
  /*border: 1px solid #dee2e6;*/
  border:none;
  padding-top: .4rem;
  padding-bottom: .4rem;
 
}


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

.ais-RefinementList-labelText {
  font-size:12px;
  line-height: 1;
}

.ais-RefinementList-count {
  font-size:12px !important;



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

.ais-ClearRefinements-button {
  background-color:transparent;
  color:gray;
  text-decoration: underline;
}

.ais-ClearRefinements-button:hover{

  background-color: transparent;
  color:gray;


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



</style>
