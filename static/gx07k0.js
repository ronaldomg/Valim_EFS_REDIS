/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:31:12.30
*/
gx.evt.autoSkip = false;
gx.define('gx07k0', false, function () {
   this.ServerClass =  "gx07k0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pCategoriaEmpresaId=gx.fn.getControlValue("vPCATEGORIAEMPRESAID") ;
      this.AV14pCategoriaId=gx.fn.getIntegerValue("vPCATEGORIAID",'.') ;
   };
   this.e131mw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141mw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx07k0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2621,53,"CATEGORIAEMPRESAID","Empresa","","CategoriaEmpresaId","char",0,"px",10,10,"left",null,[],2621,"CategoriaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2622,54,"CATEGORIAID","Código","","CategoriaId","int",0,"px",3,3,"right",null,[],2622,"CategoriaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2595,55,"CATEGORIADESCRICAO","Descrição","Selecionar","CategoriaDescricao","svchar",0,"px",50,50,"left",null,[],2595,"CategoriaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2596,56,"CATEGORIADESCABREVIADA","Descrição Abreviada","","CategoriaDescAbreviada","svchar",0,"px",20,20,"left",null,[],2596,"CategoriaDescAbreviada",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2597,57,"CATEGORIATIPOCOBRANCA","Tipo de Cobrança","CategoriaTipoCobranca","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2598,58,"CATEGORIALIMITECONVITE","Qtde Limite de Convite","","CategoriaLimiteConvite","int",0,"px",2,2,"right",null,[],2598,"CategoriaLimiteConvite",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCATEGORIAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAEMPRESAID",gxz:"ZV6cCategoriaEmpresaId",gxold:"OV6cCategoriaEmpresaId",gxvar:"AV6cCategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cCategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCATEGORIAEMPRESAID",gx.O.AV6cCategoriaEmpresaId,0)},c2v:function(){gx.O.AV6cCategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCATEGORIAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAID",gxz:"ZV7cCategoriaId",gxold:"OV7cCategoriaId",gxvar:"AV7cCategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCATEGORIAID",gx.O.AV7cCategoriaId,0)},c2v:function(){gx.O.AV7cCategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCATEGORIADESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIADESCRICAO",gxz:"ZV8cCategoriaDescricao",gxold:"OV8cCategoriaDescricao",gxvar:"AV8cCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCategoriaDescricao=Value},v2z:function(Value){gx.O.ZV8cCategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCATEGORIADESCRICAO",gx.O.AV8cCategoriaDescricao,0)},c2v:function(){gx.O.AV8cCategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCATEGORIADESCABREVIADA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIADESCABREVIADA",gxz:"ZV9cCategoriaDescAbreviada",gxold:"OV9cCategoriaDescAbreviada",gxvar:"AV9cCategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV9cCategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCCATEGORIADESCABREVIADA",gx.O.AV9cCategoriaDescAbreviada,0)},c2v:function(){gx.O.AV9cCategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCATEGORIATIPOCOBRANCA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIATIPOCOBRANCA",gxz:"ZV10cCategoriaTipoCobranca",gxold:"OV10cCategoriaTipoCobranca",gxvar:"AV10cCategoriaTipoCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cCategoriaTipoCobranca=Value},v2z:function(Value){gx.O.ZV10cCategoriaTipoCobranca=Value},v2c:function(){gx.fn.setComboBoxValue("vCCATEGORIATIPOCOBRANCA",gx.O.AV10cCategoriaTipoCobranca)},c2v:function(){gx.O.AV10cCategoriaTipoCobranca=this.val()},val:function(){return gx.fn.getControlValue("vCCATEGORIATIPOCOBRANCA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCATEGORIALIMITECONVITE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIALIMITECONVITE",gxz:"ZV11cCategoriaLimiteConvite",gxold:"OV11cCategoriaLimiteConvite",gxvar:"AV11cCategoriaLimiteConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCategoriaLimiteConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCategoriaLimiteConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCATEGORIALIMITECONVITE",gx.O.AV11cCategoriaLimiteConvite,0)},c2v:function(){gx.O.AV11cCategoriaLimiteConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCATEGORIALIMITECONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCATEGORIAPRAZOLIMCONVITE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAPRAZOLIMCONVITE",gxz:"ZV12cCategoriaPrazoLimConvite",gxold:"OV12cCategoriaPrazoLimConvite",gxvar:"AV12cCategoriaPrazoLimConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCategoriaPrazoLimConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCategoriaPrazoLimConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCATEGORIAPRAZOLIMCONVITE",gx.O.AV12cCategoriaPrazoLimConvite,0)},c2v:function(){gx.O.AV12cCategoriaPrazoLimConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCATEGORIAPRAZOLIMCONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAEMPRESAID",gxz:"Z2621CategoriaEmpresaId",gxold:"O2621CategoriaEmpresaId",gxvar:"A2621CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2621CategoriaEmpresaId=Value},v2z:function(Value){gx.O.Z2621CategoriaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2621CategoriaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2621CategoriaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAID",gxz:"Z2622CategoriaId",gxold:"O2622CategoriaId",gxvar:"A2622CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2622CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2622CategoriaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2622CategoriaId,0)},c2v:function(){gx.O.A2622CategoriaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADESCRICAO",gxz:"Z2595CategoriaDescricao",gxold:"O2595CategoriaDescricao",gxvar:"A2595CategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2595CategoriaDescricao=Value},v2z:function(Value){gx.O.Z2595CategoriaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A2595CategoriaDescricao,0)},c2v:function(){gx.O.A2595CategoriaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADESCABREVIADA",gxz:"Z2596CategoriaDescAbreviada",gxold:"O2596CategoriaDescAbreviada",gxvar:"A2596CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2596CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.Z2596CategoriaDescAbreviada=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(51),gx.O.A2596CategoriaDescAbreviada,0)},c2v:function(){gx.O.A2596CategoriaDescAbreviada=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIATIPOCOBRANCA",gxz:"Z2597CategoriaTipoCobranca",gxold:"O2597CategoriaTipoCobranca",gxvar:"A2597CategoriaTipoCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2597CategoriaTipoCobranca=Value},v2z:function(Value){gx.O.Z2597CategoriaTipoCobranca=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(51),gx.O.A2597CategoriaTipoCobranca)},c2v:function(){gx.O.A2597CategoriaTipoCobranca=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIALIMITECONVITE",gxz:"Z2598CategoriaLimiteConvite",gxold:"O2598CategoriaLimiteConvite",gxvar:"A2598CategoriaLimiteConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2598CategoriaLimiteConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2598CategoriaLimiteConvite=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIALIMITECONVITE",row || gx.fn.currentGridRowImpl(51),gx.O.A2598CategoriaLimiteConvite,0)},c2v:function(){gx.O.A2598CategoriaLimiteConvite=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIALIMITECONVITE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cCategoriaEmpresaId = "" ;
   this.ZV6cCategoriaEmpresaId = "" ;
   this.OV6cCategoriaEmpresaId = "" ;
   this.AV7cCategoriaId = 0 ;
   this.ZV7cCategoriaId = 0 ;
   this.OV7cCategoriaId = 0 ;
   this.AV8cCategoriaDescricao = "" ;
   this.ZV8cCategoriaDescricao = "" ;
   this.OV8cCategoriaDescricao = "" ;
   this.AV9cCategoriaDescAbreviada = "" ;
   this.ZV9cCategoriaDescAbreviada = "" ;
   this.OV9cCategoriaDescAbreviada = "" ;
   this.AV10cCategoriaTipoCobranca = "" ;
   this.ZV10cCategoriaTipoCobranca = "" ;
   this.OV10cCategoriaTipoCobranca = "" ;
   this.AV11cCategoriaLimiteConvite = 0 ;
   this.ZV11cCategoriaLimiteConvite = 0 ;
   this.OV11cCategoriaLimiteConvite = 0 ;
   this.AV12cCategoriaPrazoLimConvite = 0 ;
   this.ZV12cCategoriaPrazoLimConvite = 0 ;
   this.OV12cCategoriaPrazoLimConvite = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2621CategoriaEmpresaId = "" ;
   this.O2621CategoriaEmpresaId = "" ;
   this.Z2622CategoriaId = 0 ;
   this.O2622CategoriaId = 0 ;
   this.Z2595CategoriaDescricao = "" ;
   this.O2595CategoriaDescricao = "" ;
   this.Z2596CategoriaDescAbreviada = "" ;
   this.O2596CategoriaDescAbreviada = "" ;
   this.Z2597CategoriaTipoCobranca = "" ;
   this.O2597CategoriaTipoCobranca = "" ;
   this.Z2598CategoriaLimiteConvite = 0 ;
   this.O2598CategoriaLimiteConvite = 0 ;
   this.AV6cCategoriaEmpresaId = "" ;
   this.AV7cCategoriaId = 0 ;
   this.AV8cCategoriaDescricao = "" ;
   this.AV9cCategoriaDescAbreviada = "" ;
   this.AV10cCategoriaTipoCobranca = "" ;
   this.AV11cCategoriaLimiteConvite = 0 ;
   this.AV12cCategoriaPrazoLimConvite = 0 ;
   this.AV13pCategoriaEmpresaId = "" ;
   this.AV14pCategoriaId = 0 ;
   this.A2599CategoriaPrazoLimConvite = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2595CategoriaDescricao = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.A2598CategoriaLimiteConvite = 0 ;
   this.Events = {"e131mw2_client": ["ENTER", true] ,"e141mw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaEmpresaId',fld:'vCCATEGORIAEMPRESAID'},{av:'AV7cCategoriaId',fld:'vCCATEGORIAID'},{av:'AV8cCategoriaDescricao',fld:'vCCATEGORIADESCRICAO'},{av:'AV9cCategoriaDescAbreviada',fld:'vCCATEGORIADESCABREVIADA'},{av:'AV10cCategoriaTipoCobranca',fld:'vCCATEGORIATIPOCOBRANCA'},{av:'AV11cCategoriaLimiteConvite',fld:'vCCATEGORIALIMITECONVITE'},{av:'AV12cCategoriaPrazoLimConvite',fld:'vCCATEGORIAPRAZOLIMCONVITE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'}],[{av:'AV13pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID'},{av:'AV14pCategoriaId',fld:'vPCATEGORIAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaEmpresaId',fld:'vCCATEGORIAEMPRESAID'},{av:'AV7cCategoriaId',fld:'vCCATEGORIAID'},{av:'AV8cCategoriaDescricao',fld:'vCCATEGORIADESCRICAO'},{av:'AV9cCategoriaDescAbreviada',fld:'vCCATEGORIADESCABREVIADA'},{av:'AV10cCategoriaTipoCobranca',fld:'vCCATEGORIATIPOCOBRANCA'},{av:'AV11cCategoriaLimiteConvite',fld:'vCCATEGORIALIMITECONVITE'},{av:'AV12cCategoriaPrazoLimConvite',fld:'vCCATEGORIAPRAZOLIMCONVITE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaEmpresaId',fld:'vCCATEGORIAEMPRESAID'},{av:'AV7cCategoriaId',fld:'vCCATEGORIAID'},{av:'AV8cCategoriaDescricao',fld:'vCCATEGORIADESCRICAO'},{av:'AV9cCategoriaDescAbreviada',fld:'vCCATEGORIADESCABREVIADA'},{av:'AV10cCategoriaTipoCobranca',fld:'vCCATEGORIATIPOCOBRANCA'},{av:'AV11cCategoriaLimiteConvite',fld:'vCCATEGORIALIMITECONVITE'},{av:'AV12cCategoriaPrazoLimConvite',fld:'vCCATEGORIAPRAZOLIMCONVITE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaEmpresaId',fld:'vCCATEGORIAEMPRESAID'},{av:'AV7cCategoriaId',fld:'vCCATEGORIAID'},{av:'AV8cCategoriaDescricao',fld:'vCCATEGORIADESCRICAO'},{av:'AV9cCategoriaDescAbreviada',fld:'vCCATEGORIADESCABREVIADA'},{av:'AV10cCategoriaTipoCobranca',fld:'vCCATEGORIATIPOCOBRANCA'},{av:'AV11cCategoriaLimiteConvite',fld:'vCCATEGORIALIMITECONVITE'},{av:'AV12cCategoriaPrazoLimConvite',fld:'vCCATEGORIAPRAZOLIMCONVITE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaEmpresaId',fld:'vCCATEGORIAEMPRESAID'},{av:'AV7cCategoriaId',fld:'vCCATEGORIAID'},{av:'AV8cCategoriaDescricao',fld:'vCCATEGORIADESCRICAO'},{av:'AV9cCategoriaDescAbreviada',fld:'vCCATEGORIADESCABREVIADA'},{av:'AV10cCategoriaTipoCobranca',fld:'vCCATEGORIATIPOCOBRANCA'},{av:'AV11cCategoriaLimiteConvite',fld:'vCCATEGORIALIMITECONVITE'},{av:'AV12cCategoriaPrazoLimConvite',fld:'vCCATEGORIAPRAZOLIMCONVITE'}],[]];
   this.setVCMap("AV13pCategoriaEmpresaId", "vPCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV14pCategoriaId", "vPCATEGORIAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx07k0());
