/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:31:14.72
*/
gx.evt.autoSkip = false;
gx.define('gx07l2', false, function () {
   this.ServerClass =  "gx07l2" ;
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
      this.AV10pCategoriaEmpresaId=gx.fn.getControlValue("vPCATEGORIAEMPRESAID") ;
      this.AV11pCategoriaId=gx.fn.getIntegerValue("vPCATEGORIAID",'.') ;
      this.AV12pCategoriaValorData=gx.fn.getDateValue("vPCATEGORIAVALORDATA") ;
   };
   this.e131mx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141mx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,50,53];
   this.GXLastCtrlId =53;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx07l2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2624,43,"CATEGORIAVALORDATA","Data Referência","","CategoriaValorData","date",0,"px",10,10,"right",null,[],2624,"CategoriaValorData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2618,44,"CATEGORIAVALORMENSALIDADE","Valor Mensalidade","Selecionar","CategoriaValorMensalidade","decimal",0,"px",22,22,"right",null,[],2618,"CategoriaValorMensalidade",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2619,45,"CATEGORIAVALORUSUARIOALT","Usuário Alteração","","CategoriaValorUsuarioAlt","char",0,"px",12,12,"left",null,[],2619,"CategoriaValorUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2620,46,"CATEGORIAVALORDATAHORAALT","Data/Hora Alteração","","CategoriaValorDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2620,"CategoriaValorDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9802,47,"CATEGORIAVALORDESCONTO","Desconto","","CategoriaValorDesconto","decimal",0,"px",22,22,"right",null,[],9802,"CategoriaValorDesconto",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10351,48,"CATEGORIAVALORDESCONTO2","Segundo Desconto","","CategoriaValorDesconto2","decimal",0,"px",22,22,"right",null,[],10351,"CategoriaValorDesconto2",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2621,49,"CATEGORIAEMPRESAID","Empresa","","CategoriaEmpresaId","char",0,"px",10,10,"left",null,[],2621,"CategoriaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2622,50,"CATEGORIAID","Código","","CategoriaId","int",0,"px",3,3,"right",null,[],2622,"CategoriaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCATEGORIAVALORDATA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAVALORDATA",gxz:"ZV6cCategoriaValorData",gxold:"OV6cCategoriaValorData",gxvar:"AV6cCategoriaValorData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCategoriaValorData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6cCategoriaValorData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCATEGORIAVALORDATA",gx.O.AV6cCategoriaValorData,0)},c2v:function(){gx.O.AV6cCategoriaValorData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCATEGORIAVALORDATA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCATEGORIAVALORMENSALIDADE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAVALORMENSALIDADE",gxz:"ZV7cCategoriaValorMensalidade",gxold:"OV7cCategoriaValorMensalidade",gxvar:"AV7cCategoriaValorMensalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCategoriaValorMensalidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV7cCategoriaValorMensalidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCATEGORIAVALORMENSALIDADE",gx.O.AV7cCategoriaValorMensalidade,2,',')},c2v:function(){gx.O.AV7cCategoriaValorMensalidade=this.val()},val:function(){return gx.fn.getDecimalValue("vCCATEGORIAVALORMENSALIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCATEGORIAVALORUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAVALORUSUARIOALT",gxz:"ZV8cCategoriaValorUsuarioAlt",gxold:"OV8cCategoriaValorUsuarioAlt",gxvar:"AV8cCategoriaValorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCategoriaValorUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cCategoriaValorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCCATEGORIAVALORUSUARIOALT",gx.O.AV8cCategoriaValorUsuarioAlt,0)},c2v:function(){gx.O.AV8cCategoriaValorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCCATEGORIAVALORUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCATEGORIAVALORDATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAVALORDATAHORAALT",gxz:"ZV9cCategoriaValorDataHoraAlt",gxold:"OV9cCategoriaValorDataHoraAlt",gxvar:"AV9cCategoriaValorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cCategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCATEGORIAVALORDATAHORAALT",gx.O.AV9cCategoriaValorDataHoraAlt,0)},c2v:function(){gx.O.AV9cCategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCCATEGORIAVALORDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCATEGORIAVALORDESCONTO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCATEGORIAVALORDESCONTO",gxz:"ZV13cCategoriaValorDesconto",gxold:"OV13cCategoriaValorDesconto",gxvar:"AV13cCategoriaValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cCategoriaValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13cCategoriaValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCATEGORIAVALORDESCONTO",gx.O.AV13cCategoriaValorDesconto,2,',')},c2v:function(){gx.O.AV13cCategoriaValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vCCATEGORIAVALORDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDATA",gxz:"Z2624CategoriaValorData",gxold:"O2624CategoriaValorData",gxvar:"A2624CategoriaValorData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2624CategoriaValorData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2624CategoriaValorData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORDATA",row || gx.fn.currentGridRowImpl(41),gx.O.A2624CategoriaValorData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2624CategoriaValorData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIAVALORDATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORMENSALIDADE",gxz:"Z2618CategoriaValorMensalidade",gxold:"O2618CategoriaValorMensalidade",gxvar:"A2618CategoriaValorMensalidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2618CategoriaValorMensalidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2618CategoriaValorMensalidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORMENSALIDADE",row || gx.fn.currentGridRowImpl(41),gx.O.A2618CategoriaValorMensalidade,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2618CategoriaValorMensalidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORMENSALIDADE",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORUSUARIOALT",gxz:"Z2619CategoriaValorUsuarioAlt",gxold:"O2619CategoriaValorUsuarioAlt",gxvar:"A2619CategoriaValorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2619CategoriaValorUsuarioAlt=Value},v2z:function(Value){gx.O.Z2619CategoriaValorUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A2619CategoriaValorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2619CategoriaValorUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAVALORUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDATAHORAALT",gxz:"Z2620CategoriaValorDataHoraAlt",gxold:"O2620CategoriaValorDataHoraAlt",gxvar:"A2620CategoriaValorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAVALORDATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A2620CategoriaValorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2620CategoriaValorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CATEGORIAVALORDATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDESCONTO",gxz:"Z9802CategoriaValorDesconto",gxold:"O9802CategoriaValorDesconto",gxvar:"A9802CategoriaValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9802CategoriaValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9802CategoriaValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORDESCONTO",row || gx.fn.currentGridRowImpl(41),gx.O.A9802CategoriaValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9802CategoriaValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORDESCONTO",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAVALORDESCONTO2",gxz:"Z10351CategoriaValorDesconto2",gxold:"O10351CategoriaValorDesconto2",gxvar:"A10351CategoriaValorDesconto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10351CategoriaValorDesconto2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10351CategoriaValorDesconto2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CATEGORIAVALORDESCONTO2",row || gx.fn.currentGridRowImpl(41),gx.O.A10351CategoriaValorDesconto2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10351CategoriaValorDesconto2=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CATEGORIAVALORDESCONTO2",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAEMPRESAID",gxz:"Z2621CategoriaEmpresaId",gxold:"O2621CategoriaEmpresaId",gxvar:"A2621CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2621CategoriaEmpresaId=Value},v2z:function(Value){gx.O.Z2621CategoriaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2621CategoriaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2621CategoriaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAID",gxz:"Z2622CategoriaId",gxold:"O2622CategoriaId",gxvar:"A2622CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2622CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2622CategoriaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2622CategoriaId,0)},c2v:function(){gx.O.A2622CategoriaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE4",grid:0};
   this.AV6cCategoriaValorData = gx.date.nullDate() ;
   this.ZV6cCategoriaValorData = gx.date.nullDate() ;
   this.OV6cCategoriaValorData = gx.date.nullDate() ;
   this.AV7cCategoriaValorMensalidade = 0 ;
   this.ZV7cCategoriaValorMensalidade = 0 ;
   this.OV7cCategoriaValorMensalidade = 0 ;
   this.AV8cCategoriaValorUsuarioAlt = "" ;
   this.ZV8cCategoriaValorUsuarioAlt = "" ;
   this.OV8cCategoriaValorUsuarioAlt = "" ;
   this.AV9cCategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cCategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.OV9cCategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.AV13cCategoriaValorDesconto = 0 ;
   this.ZV13cCategoriaValorDesconto = 0 ;
   this.OV13cCategoriaValorDesconto = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2624CategoriaValorData = gx.date.nullDate() ;
   this.O2624CategoriaValorData = gx.date.nullDate() ;
   this.Z2618CategoriaValorMensalidade = 0 ;
   this.O2618CategoriaValorMensalidade = 0 ;
   this.Z2619CategoriaValorUsuarioAlt = "" ;
   this.O2619CategoriaValorUsuarioAlt = "" ;
   this.Z2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.O2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.Z9802CategoriaValorDesconto = 0 ;
   this.O9802CategoriaValorDesconto = 0 ;
   this.Z10351CategoriaValorDesconto2 = 0 ;
   this.O10351CategoriaValorDesconto2 = 0 ;
   this.Z2621CategoriaEmpresaId = "" ;
   this.O2621CategoriaEmpresaId = "" ;
   this.Z2622CategoriaId = 0 ;
   this.O2622CategoriaId = 0 ;
   this.AV6cCategoriaValorData = gx.date.nullDate() ;
   this.AV7cCategoriaValorMensalidade = 0 ;
   this.AV8cCategoriaValorUsuarioAlt = "" ;
   this.AV9cCategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.AV13cCategoriaValorDesconto = 0 ;
   this.AV10pCategoriaEmpresaId = "" ;
   this.AV11pCategoriaId = 0 ;
   this.AV12pCategoriaValorData = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A2624CategoriaValorData = gx.date.nullDate() ;
   this.A2618CategoriaValorMensalidade = 0 ;
   this.A2619CategoriaValorUsuarioAlt = "" ;
   this.A2620CategoriaValorDataHoraAlt = gx.date.nullDate() ;
   this.A9802CategoriaValorDesconto = 0 ;
   this.A10351CategoriaValorDesconto2 = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.Events = {"e131mx2_client": ["ENTER", true] ,"e141mx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaValorData',fld:'vCCATEGORIAVALORDATA'},{av:'AV7cCategoriaValorMensalidade',fld:'vCCATEGORIAVALORMENSALIDADE'},{av:'AV8cCategoriaValorUsuarioAlt',fld:'vCCATEGORIAVALORUSUARIOALT'},{av:'AV9cCategoriaValorDataHoraAlt',fld:'vCCATEGORIAVALORDATAHORAALT'},{av:'AV13cCategoriaValorDesconto',fld:'vCCATEGORIAVALORDESCONTO'},{av:'AV10pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID',hsh:true},{av:'AV11pCategoriaId',fld:'vPCATEGORIAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2624CategoriaValorData',fld:'CATEGORIAVALORDATA'}],[{av:'AV12pCategoriaValorData',fld:'vPCATEGORIAVALORDATA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaValorData',fld:'vCCATEGORIAVALORDATA'},{av:'AV7cCategoriaValorMensalidade',fld:'vCCATEGORIAVALORMENSALIDADE'},{av:'AV8cCategoriaValorUsuarioAlt',fld:'vCCATEGORIAVALORUSUARIOALT'},{av:'AV9cCategoriaValorDataHoraAlt',fld:'vCCATEGORIAVALORDATAHORAALT'},{av:'AV13cCategoriaValorDesconto',fld:'vCCATEGORIAVALORDESCONTO'},{av:'AV10pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID',hsh:true},{av:'AV11pCategoriaId',fld:'vPCATEGORIAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaValorData',fld:'vCCATEGORIAVALORDATA'},{av:'AV7cCategoriaValorMensalidade',fld:'vCCATEGORIAVALORMENSALIDADE'},{av:'AV8cCategoriaValorUsuarioAlt',fld:'vCCATEGORIAVALORUSUARIOALT'},{av:'AV9cCategoriaValorDataHoraAlt',fld:'vCCATEGORIAVALORDATAHORAALT'},{av:'AV13cCategoriaValorDesconto',fld:'vCCATEGORIAVALORDESCONTO'},{av:'AV10pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID',hsh:true},{av:'AV11pCategoriaId',fld:'vPCATEGORIAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaValorData',fld:'vCCATEGORIAVALORDATA'},{av:'AV7cCategoriaValorMensalidade',fld:'vCCATEGORIAVALORMENSALIDADE'},{av:'AV8cCategoriaValorUsuarioAlt',fld:'vCCATEGORIAVALORUSUARIOALT'},{av:'AV9cCategoriaValorDataHoraAlt',fld:'vCCATEGORIAVALORDATAHORAALT'},{av:'AV13cCategoriaValorDesconto',fld:'vCCATEGORIAVALORDESCONTO'},{av:'AV10pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID',hsh:true},{av:'AV11pCategoriaId',fld:'vPCATEGORIAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCategoriaValorData',fld:'vCCATEGORIAVALORDATA'},{av:'AV7cCategoriaValorMensalidade',fld:'vCCATEGORIAVALORMENSALIDADE'},{av:'AV8cCategoriaValorUsuarioAlt',fld:'vCCATEGORIAVALORUSUARIOALT'},{av:'AV9cCategoriaValorDataHoraAlt',fld:'vCCATEGORIAVALORDATAHORAALT'},{av:'AV13cCategoriaValorDesconto',fld:'vCCATEGORIAVALORDESCONTO'},{av:'AV10pCategoriaEmpresaId',fld:'vPCATEGORIAEMPRESAID',hsh:true},{av:'AV11pCategoriaId',fld:'vPCATEGORIAID',hsh:true}],[]];
   this.setVCMap("AV10pCategoriaEmpresaId", "vPCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV11pCategoriaId", "vPCATEGORIAID", 0, "int");
   this.setVCMap("AV12pCategoriaValorData", "vPCATEGORIAVALORDATA", 0, "date");
   this.setVCMap("AV10pCategoriaEmpresaId", "vPCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV11pCategoriaId", "vPCATEGORIAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pCategoriaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pCategoriaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx07l2());
