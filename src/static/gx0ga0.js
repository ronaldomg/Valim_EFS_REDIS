/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:48.86
*/
gx.evt.autoSkip = false;
gx.define('gx0ga0', false, function () {
   this.ServerClass =  "gx0ga0" ;
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
      this.AV13pNFE010EmpCodigo=gx.fn.getIntegerValue("vPNFE010EMPCODIGO",'.') ;
      this.AV14pNFE010NtfNumero=gx.fn.getIntegerValue("vPNFE010NTFNUMERO",'.') ;
      this.AV15pNFE010NtfSerie=gx.fn.getControlValue("vPNFE010NTFSERIE") ;
      this.AV16pNFE010LgnCodigo=gx.fn.getIntegerValue("vPNFE010LGNCODIGO",'.') ;
   };
   this.e131ui2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ui1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ga0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7979,53,"NFE010EMPCODIGO","Código da Empresa","","NFE010EmpCodigo","int",0,"px",4,4,"right",null,[],7979,"NFE010EmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7980,54,"NFE010NTFNUMERO","Número do Documento Fiscal","","NFE010NtfNumero","int",0,"px",9,9,"right",null,[],7980,"NFE010NtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7981,55,"NFE010NTFSERIE","Série do Documento Fiscal","","NFE010NtfSerie","char",0,"px",3,3,"left",null,[],7981,"NFE010NtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7982,56,"NFE010LGNCODIGO","Sequência","","NFE010LgnCodigo","int",0,"px",4,4,"right",null,[],7982,"NFE010LgnCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7983,57,"NFE010LGNDTAINCLUSAO","NFE010 Lgn Dta Inclusao","Selecionar","NFE010LgnDtaInclusao","dtime",0,"px",16,16,"right",null,[],7983,"NFE010LgnDtaInclusao",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7985,58,"NFE010LGNDTAENVIO","NFE010 Lgn Dta Envio","","NFE010LgnDtaEnvio","dtime",0,"px",16,16,"right",null,[],7985,"NFE010LgnDtaEnvio",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNFE010EMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010EMPCODIGO",gxz:"ZV6cNFE010EmpCodigo",gxold:"OV6cNFE010EmpCodigo",gxvar:"AV6cNFE010EmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNFE010EmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNFE010EmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010EMPCODIGO",gx.O.AV6cNFE010EmpCodigo,0)},c2v:function(){gx.O.AV6cNFE010EmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010EMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNFE010NTFNUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010NTFNUMERO",gxz:"ZV7cNFE010NtfNumero",gxold:"OV7cNFE010NtfNumero",gxvar:"AV7cNFE010NtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNFE010NtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cNFE010NtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010NTFNUMERO",gx.O.AV7cNFE010NtfNumero,0)},c2v:function(){gx.O.AV7cNFE010NtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010NTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNFE010NTFSERIE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010NTFSERIE",gxz:"ZV8cNFE010NtfSerie",gxold:"OV8cNFE010NtfSerie",gxvar:"AV8cNFE010NtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNFE010NtfSerie=Value},v2z:function(Value){gx.O.ZV8cNFE010NtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCNFE010NTFSERIE",gx.O.AV8cNFE010NtfSerie,0)},c2v:function(){gx.O.AV8cNFE010NtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCNFE010NTFSERIE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKNFE010LGNCODIGO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LGNCODIGO",gxz:"ZV9cNFE010LgnCodigo",gxold:"OV9cNFE010LgnCodigo",gxvar:"AV9cNFE010LgnCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cNFE010LgnCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cNFE010LgnCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LGNCODIGO",gx.O.AV9cNFE010LgnCodigo,0)},c2v:function(){gx.O.AV9cNFE010LgnCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LGNCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKNFE010LGNDTAINCLUSAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LGNDTAINCLUSAO",gxz:"ZV10cNFE010LgnDtaInclusao",gxold:"OV10cNFE010LgnDtaInclusao",gxvar:"AV10cNFE010LgnDtaInclusao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cNFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cNFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LGNDTAINCLUSAO",gx.O.AV10cNFE010LgnDtaInclusao,0)},c2v:function(){gx.O.AV10cNFE010LgnDtaInclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNFE010LGNDTAINCLUSAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKNFE010LGNDTAPROCESSAMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LGNDTAPROCESSAMENTO",gxz:"ZV11cNFE010LgnDtaProcessamento",gxold:"OV11cNFE010LgnDtaProcessamento",gxvar:"AV11cNFE010LgnDtaProcessamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cNFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cNFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LGNDTAPROCESSAMENTO",gx.O.AV11cNFE010LgnDtaProcessamento,0)},c2v:function(){gx.O.AV11cNFE010LgnDtaProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNFE010LGNDTAPROCESSAMENTO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKNFE010LGNDTAENVIO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LGNDTAENVIO",gxz:"ZV12cNFE010LgnDtaEnvio",gxold:"OV12cNFE010LgnDtaEnvio",gxvar:"AV12cNFE010LgnDtaEnvio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cNFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cNFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LGNDTAENVIO",gx.O.AV12cNFE010LgnDtaEnvio,0)},c2v:function(){gx.O.AV12cNFE010LgnDtaEnvio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNFE010LGNDTAENVIO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010EMPCODIGO",gxz:"Z7979NFE010EmpCodigo",gxold:"O7979NFE010EmpCodigo",gxvar:"A7979NFE010EmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7979NFE010EmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7979NFE010EmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010EMPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7979NFE010EmpCodigo,0)},c2v:function(){gx.O.A7979NFE010EmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010EMPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010NTFNUMERO",gxz:"Z7980NFE010NtfNumero",gxold:"O7980NFE010NtfNumero",gxvar:"A7980NFE010NtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7980NFE010NtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7980NFE010NtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010NTFNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7980NFE010NtfNumero,0)},c2v:function(){gx.O.A7980NFE010NtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010NTFNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010NTFSERIE",gxz:"Z7981NFE010NtfSerie",gxold:"O7981NFE010NtfSerie",gxvar:"A7981NFE010NtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7981NFE010NtfSerie=Value},v2z:function(Value){gx.O.Z7981NFE010NtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("NFE010NTFSERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A7981NFE010NtfSerie,0)},c2v:function(){gx.O.A7981NFE010NtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("NFE010NTFSERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNCODIGO",gxz:"Z7982NFE010LgnCodigo",gxold:"O7982NFE010LgnCodigo",gxvar:"A7982NFE010LgnCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7982NFE010LgnCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7982NFE010LgnCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LGNCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7982NFE010LgnCodigo,0)},c2v:function(){gx.O.A7982NFE010LgnCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010LGNCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDTAINCLUSAO",gxz:"Z7983NFE010LgnDtaInclusao",gxold:"O7983NFE010LgnDtaInclusao",gxvar:"A7983NFE010LgnDtaInclusao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LGNDTAINCLUSAO",row || gx.fn.currentGridRowImpl(51),gx.O.A7983NFE010LgnDtaInclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7983NFE010LgnDtaInclusao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NFE010LGNDTAINCLUSAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LGNDTAENVIO",gxz:"Z7985NFE010LgnDtaEnvio",gxold:"O7985NFE010LgnDtaEnvio",gxvar:"A7985NFE010LgnDtaEnvio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LGNDTAENVIO",row || gx.fn.currentGridRowImpl(51),gx.O.A7985NFE010LgnDtaEnvio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7985NFE010LgnDtaEnvio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NFE010LGNDTAENVIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cNFE010EmpCodigo = 0 ;
   this.ZV6cNFE010EmpCodigo = 0 ;
   this.OV6cNFE010EmpCodigo = 0 ;
   this.AV7cNFE010NtfNumero = 0 ;
   this.ZV7cNFE010NtfNumero = 0 ;
   this.OV7cNFE010NtfNumero = 0 ;
   this.AV8cNFE010NtfSerie = "" ;
   this.ZV8cNFE010NtfSerie = "" ;
   this.OV8cNFE010NtfSerie = "" ;
   this.AV9cNFE010LgnCodigo = 0 ;
   this.ZV9cNFE010LgnCodigo = 0 ;
   this.OV9cNFE010LgnCodigo = 0 ;
   this.AV10cNFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.ZV10cNFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.OV10cNFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.AV11cNFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.ZV11cNFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.OV11cNFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.AV12cNFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.ZV12cNFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.OV12cNFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7979NFE010EmpCodigo = 0 ;
   this.O7979NFE010EmpCodigo = 0 ;
   this.Z7980NFE010NtfNumero = 0 ;
   this.O7980NFE010NtfNumero = 0 ;
   this.Z7981NFE010NtfSerie = "" ;
   this.O7981NFE010NtfSerie = "" ;
   this.Z7982NFE010LgnCodigo = 0 ;
   this.O7982NFE010LgnCodigo = 0 ;
   this.Z7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.O7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.Z7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.O7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.AV6cNFE010EmpCodigo = 0 ;
   this.AV7cNFE010NtfNumero = 0 ;
   this.AV8cNFE010NtfSerie = "" ;
   this.AV9cNFE010LgnCodigo = 0 ;
   this.AV10cNFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.AV11cNFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.AV12cNFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.AV13pNFE010EmpCodigo = 0 ;
   this.AV14pNFE010NtfNumero = 0 ;
   this.AV15pNFE010NtfSerie = "" ;
   this.AV16pNFE010LgnCodigo = 0 ;
   this.A7984NFE010LgnDtaProcessamento = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A7979NFE010EmpCodigo = 0 ;
   this.A7980NFE010NtfNumero = 0 ;
   this.A7981NFE010NtfSerie = "" ;
   this.A7982NFE010LgnCodigo = 0 ;
   this.A7983NFE010LgnDtaInclusao = gx.date.nullDate() ;
   this.A7985NFE010LgnDtaEnvio = gx.date.nullDate() ;
   this.Events = {"e131ui2_client": ["ENTER", true] ,"e141ui1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010EmpCodigo',fld:'vCNFE010EMPCODIGO'},{av:'AV7cNFE010NtfNumero',fld:'vCNFE010NTFNUMERO'},{av:'AV8cNFE010NtfSerie',fld:'vCNFE010NTFSERIE'},{av:'AV9cNFE010LgnCodigo',fld:'vCNFE010LGNCODIGO'},{av:'AV10cNFE010LgnDtaInclusao',fld:'vCNFE010LGNDTAINCLUSAO'},{av:'AV11cNFE010LgnDtaProcessamento',fld:'vCNFE010LGNDTAPROCESSAMENTO'},{av:'AV12cNFE010LgnDtaEnvio',fld:'vCNFE010LGNDTAENVIO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7979NFE010EmpCodigo',fld:'NFE010EMPCODIGO'},{av:'A7980NFE010NtfNumero',fld:'NFE010NTFNUMERO'},{av:'A7981NFE010NtfSerie',fld:'NFE010NTFSERIE'},{av:'A7982NFE010LgnCodigo',fld:'NFE010LGNCODIGO'}],[{av:'AV13pNFE010EmpCodigo',fld:'vPNFE010EMPCODIGO'},{av:'AV14pNFE010NtfNumero',fld:'vPNFE010NTFNUMERO'},{av:'AV15pNFE010NtfSerie',fld:'vPNFE010NTFSERIE'},{av:'AV16pNFE010LgnCodigo',fld:'vPNFE010LGNCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010EmpCodigo',fld:'vCNFE010EMPCODIGO'},{av:'AV7cNFE010NtfNumero',fld:'vCNFE010NTFNUMERO'},{av:'AV8cNFE010NtfSerie',fld:'vCNFE010NTFSERIE'},{av:'AV9cNFE010LgnCodigo',fld:'vCNFE010LGNCODIGO'},{av:'AV10cNFE010LgnDtaInclusao',fld:'vCNFE010LGNDTAINCLUSAO'},{av:'AV11cNFE010LgnDtaProcessamento',fld:'vCNFE010LGNDTAPROCESSAMENTO'},{av:'AV12cNFE010LgnDtaEnvio',fld:'vCNFE010LGNDTAENVIO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010EmpCodigo',fld:'vCNFE010EMPCODIGO'},{av:'AV7cNFE010NtfNumero',fld:'vCNFE010NTFNUMERO'},{av:'AV8cNFE010NtfSerie',fld:'vCNFE010NTFSERIE'},{av:'AV9cNFE010LgnCodigo',fld:'vCNFE010LGNCODIGO'},{av:'AV10cNFE010LgnDtaInclusao',fld:'vCNFE010LGNDTAINCLUSAO'},{av:'AV11cNFE010LgnDtaProcessamento',fld:'vCNFE010LGNDTAPROCESSAMENTO'},{av:'AV12cNFE010LgnDtaEnvio',fld:'vCNFE010LGNDTAENVIO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010EmpCodigo',fld:'vCNFE010EMPCODIGO'},{av:'AV7cNFE010NtfNumero',fld:'vCNFE010NTFNUMERO'},{av:'AV8cNFE010NtfSerie',fld:'vCNFE010NTFSERIE'},{av:'AV9cNFE010LgnCodigo',fld:'vCNFE010LGNCODIGO'},{av:'AV10cNFE010LgnDtaInclusao',fld:'vCNFE010LGNDTAINCLUSAO'},{av:'AV11cNFE010LgnDtaProcessamento',fld:'vCNFE010LGNDTAPROCESSAMENTO'},{av:'AV12cNFE010LgnDtaEnvio',fld:'vCNFE010LGNDTAENVIO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010EmpCodigo',fld:'vCNFE010EMPCODIGO'},{av:'AV7cNFE010NtfNumero',fld:'vCNFE010NTFNUMERO'},{av:'AV8cNFE010NtfSerie',fld:'vCNFE010NTFSERIE'},{av:'AV9cNFE010LgnCodigo',fld:'vCNFE010LGNCODIGO'},{av:'AV10cNFE010LgnDtaInclusao',fld:'vCNFE010LGNDTAINCLUSAO'},{av:'AV11cNFE010LgnDtaProcessamento',fld:'vCNFE010LGNDTAPROCESSAMENTO'},{av:'AV12cNFE010LgnDtaEnvio',fld:'vCNFE010LGNDTAENVIO'}],[]];
   this.setVCMap("AV13pNFE010EmpCodigo", "vPNFE010EMPCODIGO", 0, "int");
   this.setVCMap("AV14pNFE010NtfNumero", "vPNFE010NTFNUMERO", 0, "int");
   this.setVCMap("AV15pNFE010NtfSerie", "vPNFE010NTFSERIE", 0, "char");
   this.setVCMap("AV16pNFE010LgnCodigo", "vPNFE010LGNCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ga0());