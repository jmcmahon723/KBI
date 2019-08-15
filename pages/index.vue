<template>
  <section class="flex flex-row mx-auto ">
    <div class="flex flex-col max-w-xl mx-auto  mt-16 mb-16">
      
      
      


  <ul class="flex flex-col stats" >
    <div class="text-gray-500">Stats </div>
  <li v-for="item in items" v-bind:key="item.id" v-if="item.fields.keyStat">
    
    <div class="">{{ item.fields.keyStat }} {{ item.fields.name }}</div>
    

      </li>
</ul>

 <ul class="flex flex-col tags" >
    <div class="text-gray-500">Tags </div>
  <li v-for="item in items" v-bind:key="item.id" v-if="item.fields.tag">
    
    <div class="">{{ item.fields.tag.name }}</div>
    

      </li>
</ul>

 <ul class="flex flex-col collections" >
    <div class="text-gray-500">Collections </div>
  <li v-for="item in items" v-bind:key="item.id" v-if="item.sys.contentType">
    
    <div class="">{{ item.sys.contentType.sys.id}}</div>
    

      </li>
</ul>

 <ul class="flex flex-col description" >
    <div class="text-gray-500">Descriptions </div>
  <li v-for="item in items" v-bind:key="item.id" v-if="item.fields.description">
    <div class="">{{ item.fields.name}}</div>
    <div class="">{{ item.fields.description}}</div>
    

      </li>
</ul>

<ul class="flex flex-col description" >
    <div class="text-gray-500">Facilities </div>
  <li v-for="item in items" v-bind:key="item.id" v-if="item.sys.contentType.sys.id == 'facility'">
    <div  class="">{{ item.fields.name}}</div>
    

      </li>
</ul>
      
     <!-- {{item.sys.contentType.sys.id}} -->

 <!--  <ul v-if="item.fields.tag">
    <div class="text-gray-500">Tags </div>
    <li  >
      {{item.fields.tag.name}}
    
    </li>
  </ul>
      <ul v-if="item.fields.description">
            <div class="text-gray-500">Description </div>

    <li  >
      {{item.fields.description}}
    
    </li>
  </ul> -->


  <!--     <ul v-if="item.fields.stat">
    <li  >
      {{item.fields.stat.sys.id}}
    
    </li>
  </ul> -->


 <!--    
    {{item.fields.tag.sys.id}}
    {{item.fields.facility.sys.id}} -->
<!-- {{item.fields.keyStat}} -->
  




    </div>
  </section>
</template>

<script>
 import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
         
        })
      ]).then(([entries, items]) => {
        // return data that should be available
        // in the template
        return {
          
          items: items.items
        }
      }).catch(console.error)
    }
  }
</script>



<style>

</style>

