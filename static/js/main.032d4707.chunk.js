(this["webpackJsonpreact-hw-03_image-finder"]=this["webpackJsonpreact-hw-03_image-finder"]||[]).push([[0],{22:function(e,a,t){e.exports={ImageGallery:"imageGallery_ImageGallery__3Wt07"}},23:function(e,a,t){e.exports={Button:"button_Button__l6X__"}},24:function(e,a,t){e.exports=t(69)},29:function(e,a,t){},3:function(e,a,t){e.exports={Searchbar:"searchbar_Searchbar__3VK8i",SearchForm:"searchbar_SearchForm__pn92P",SearchFormButton:"searchbar_SearchFormButton__1EFLt",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__Jj-ZB",SearchFormInput:"searchbar_SearchFormInput__2L7V0"}},68:function(e,a,t){e.exports={Overlay:"modal_Overlay__2PQZK",Modal:"modal_Modal__3qVwQ"}},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),o=(t(29),t(10)),m=t(4),u=t(5),i=t(7),s=t(6),h=t(3),g=t.n(h),p=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm},r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:g.a.SearchFormButton},r.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:g.a.SearchFormInput,type:"text",value:this.state.inputValue,onChange:this.handleChange,placeholder:"Search images and photos"}))))}}]),t}(n.Component),f=t(21),_=t.n(f),b=t(8),y=t.n(b),d=t(22),S=t.n(d);var I=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:S.a.ImageGallery},a))},v=t(9),E=t.n(v);var F=function(e){var a=e.images;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement("li",{key:e.id,className:E.a.ImageGalleryItem},r.a.createElement("img",{src:e.webformatURL,alt:"",className:E.a.ImageGalleryItemImage}))})))},G=t(23),B=t.n(G);var O=function(e){var a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:B.a.Button,onClick:a},"Lord more"))};t(68);var j=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=17611748-6d67051009b1653d75232e8c8&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},k=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:0},e.fetchImages=function(){var a=e.state,t=a.searchQuery;a.page;e.setState({loading:!0}),j(t).then((function(a){return e.setState((function(e){return{images:[].concat(Object(o.a)(e.images),Object(o.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(a){e.setState({searchQuery:a,page:0,images:[]})},e}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement("span",null,"Error. Something went wrong"),r.a.createElement(I,null,a.length>0&&r.a.createElement(F,{images:a}),a.length>0&&!t&&r.a.createElement(O,{onClick:this.fetchImages})),t&&r.a.createElement(_.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}))}}]),t}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},9:function(e,a,t){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__2nKCI",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__1cGqL"}}},[[24,1,2]]]);
//# sourceMappingURL=main.032d4707.chunk.js.map