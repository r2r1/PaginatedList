Vue.component('paginated-list',{
    data(){
      return {
        pageNumber: 0
      }
    },
    props:{
      listData:{
        type:Array,
        required:true
      },
      size:{
        type:Number,
        required:false,
        default: 10
      }
    },
    methods:{
        nextPage(){
           this.pageNumber++;
        },
        prevPage(){
          this.pageNumber--;
        }
    },
    computed:{
      pageCount(){
        let l = this.listData.length,
            s = this.size;
        return Math.ceil(l/s);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
              end = start + this.size;
        return this.listData
                 .slice(start, end);
      }
    },
    template: `<div>
                 <ul>
                    <li v-for="p in paginatedData">
                      {{p.first}} 
                      {{p.last}}  
                      {{p.suffix}}
                    </li>
                 </ul>
                <button 
                    :disabled="pageNumber === 0" 
                    @click="prevPage">
                    Previous
                </button>
                <button 
                    :disabled="pageNumber >= pageCount -1" 
                    @click="nextPage">
                    Next
                </button>
               </div>
    `
  });
  
  
  
  
  
  function createFakeData(){
    let data = [];
    for(let i = 0; i < 100; i++){
      data.push({first: 'John',
                 last:'Doe', 
                 suffix:'#' + i});
    }
    return data;
  }
  
  x
  
  new Vue({
    el:'#app',
    data:{
      people: createFakeData()
    }
  })