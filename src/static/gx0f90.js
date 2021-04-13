/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:45.43
*/
gx.evt.autoSkip = false;
gx.define('gx0f90', false, function () {
   this.ServerClass =  "gx0f90" ;
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
      this.AV13pCBD001DETICMSNORMALSTCbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001DETICMSNORMALSTCBDEMPCODIGO",'.') ;
      this.AV14pCBD001DETICMSNORMALSTCbdNtfSerie=gx.fn.getControlValue("vPCBD001DETICMSNORMALSTCBDNTFSERIE") ;
      this.AV15pCBD001DETICMSNORMALSTCbdNtfNumero=gx.fn.getIntegerValue("vPCBD001DETICMSNORMALSTCBDNTFNUMERO",'.') ;
      this.AV16pCBD001DETICMSNORMALSTCbdnItem=gx.fn.getIntegerValue("vPCBD001DETICMSNORMALSTCBDNITEM",'.') ;
      this.AV17pCBD001DETICMSNORMALSTCbdCST=gx.fn.getIntegerValue("vPCBD001DETICMSNORMALSTCBDCST",'.') ;
   };
   this.e131tm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141tm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0f90",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7070,53,"CBD001DETICMSNORMALSTCBDEMPCOD","Código da Empresa","","CBD001DETICMSNORMALSTCbdEmpCod","int",0,"px",4,4,"right",null,[],7070,"CBD001DETICMSNORMALSTCbdEmpCod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7076,54,"CBD001DETICMSNORMALSTCBDNTFSER","Série do Documento Fiscal","","CBD001DETICMSNORMALSTCbdNtfSer","char",0,"px",3,3,"left",null,[],7076,"CBD001DETICMSNORMALSTCbdNtfSer",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7075,55,"CBD001DETICMSNORMALSTCBDNTFNUM","Número do Documento Fiscal","","CBD001DETICMSNORMALSTCbdNtfNum","int",0,"px",9,9,"right",null,[],7075,"CBD001DETICMSNORMALSTCbdNtfNum",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7074,56,"CBD001DETICMSNORMALSTCBDNITEM","Número do item","","CBD001DETICMSNORMALSTCbdnItem","int",0,"px",3,3,"right",null,[],7074,"CBD001DETICMSNORMALSTCbdnItem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7069,57,"CBD001DETICMSNORMALSTCBDCST","Tributação do ICMS","","CBD001DETICMSNORMALSTCbdCST","int",0,"px",3,3,"right",null,[],7069,"CBD001DETICMSNORMALSTCbdCST",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7077,58,"CBD001DETICMSNORMALSTCBDORIG","Origem da mercadoria","Selecionar","CBD001DETICMSNORMALSTCbdorig","int",0,"px",1,1,"right",null,[],7077,"CBD001DETICMSNORMALSTCbdorig",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDEMPCODIGO",gxz:"ZV6cCBD001DETICMSNORMALSTCbdEmpCodigo",gxold:"OV6cCBD001DETICMSNORMALSTCbdEmpCodigo",gxvar:"AV6cCBD001DETICMSNORMALSTCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001DETICMSNORMALSTCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001DETICMSNORMALSTCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDEMPCODIGO",gx.O.AV6cCBD001DETICMSNORMALSTCbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001DETICMSNORMALSTCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDNTFSERIE",gxz:"ZV7cCBD001DETICMSNORMALSTCbdNtfSerie",gxold:"OV7cCBD001DETICMSNORMALSTCbdNtfSerie",gxvar:"AV7cCBD001DETICMSNORMALSTCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001DETICMSNORMALSTCbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001DETICMSNORMALSTCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDNTFSERIE",gx.O.AV7cCBD001DETICMSNORMALSTCbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001DETICMSNORMALSTCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001DETICMSNORMALSTCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDNTFNUMERO",gxz:"ZV8cCBD001DETICMSNORMALSTCbdNtfNumero",gxold:"OV8cCBD001DETICMSNORMALSTCbdNtfNumero",gxvar:"AV8cCBD001DETICMSNORMALSTCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001DETICMSNORMALSTCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001DETICMSNORMALSTCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDNTFNUMERO",gx.O.AV8cCBD001DETICMSNORMALSTCbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001DETICMSNORMALSTCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDNITEM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDNITEM",gxz:"ZV9cCBD001DETICMSNORMALSTCbdnItem",gxold:"OV9cCBD001DETICMSNORMALSTCbdnItem",gxvar:"AV9cCBD001DETICMSNORMALSTCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDNITEM",gx.O.AV9cCBD001DETICMSNORMALSTCbdnItem,0)},c2v:function(){gx.O.AV9cCBD001DETICMSNORMALSTCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDCST", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDCST",gxz:"ZV10cCBD001DETICMSNORMALSTCbdCST",gxold:"OV10cCBD001DETICMSNORMALSTCbdCST",gxvar:"AV10cCBD001DETICMSNORMALSTCbdCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cCBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDCST",gx.O.AV10cCBD001DETICMSNORMALSTCbdCST,0)},c2v:function(){gx.O.AV10cCBD001DETICMSNORMALSTCbdCST=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDCST",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDORIG", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDORIG",gxz:"ZV11cCBD001DETICMSNORMALSTCbdorig",gxold:"OV11cCBD001DETICMSNORMALSTCbdorig",gxvar:"AV11cCBD001DETICMSNORMALSTCbdorig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDORIG",gx.O.AV11cCBD001DETICMSNORMALSTCbdorig,0)},c2v:function(){gx.O.AV11cCBD001DETICMSNORMALSTCbdorig=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDORIG",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCBD001DETICMSNORMALSTCBDMODBC", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETICMSNORMALSTCBDMODBC",gxz:"ZV12cCBD001DETICMSNORMALSTCbdmodBC",gxold:"OV12cCBD001DETICMSNORMALSTCbdmodBC",gxvar:"AV12cCBD001DETICMSNORMALSTCbdmodBC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETICMSNORMALSTCBDMODBC",gx.O.AV12cCBD001DETICMSNORMALSTCbdmodBC,0)},c2v:function(){gx.O.AV12cCBD001DETICMSNORMALSTCbdmodBC=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETICMSNORMALSTCBDMODBC",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDEMPCOD",gxz:"Z7070CBD001DETICMSNORMALSTCbdEmpCod",gxold:"O7070CBD001DETICMSNORMALSTCbdEmpCod",gxvar:"A7070CBD001DETICMSNORMALSTCbdEmpCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDEMPCOD",row || gx.fn.currentGridRowImpl(51),gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod,0)},c2v:function(){gx.O.A7070CBD001DETICMSNORMALSTCbdEmpCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETICMSNORMALSTCBDEMPCOD",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNTFSER",gxz:"Z7076CBD001DETICMSNORMALSTCbdNtfSer",gxold:"O7076CBD001DETICMSNORMALSTCbdNtfSer",gxvar:"A7076CBD001DETICMSNORMALSTCbdNtfSer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer=Value},v2z:function(Value){gx.O.Z7076CBD001DETICMSNORMALSTCbdNtfSer=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDNTFSER",row || gx.fn.currentGridRowImpl(51),gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer,0)},c2v:function(){gx.O.A7076CBD001DETICMSNORMALSTCbdNtfSer=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001DETICMSNORMALSTCBDNTFSER",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNTFNUM",gxz:"Z7075CBD001DETICMSNORMALSTCbdNtfNum",gxold:"O7075CBD001DETICMSNORMALSTCbdNtfNum",gxvar:"A7075CBD001DETICMSNORMALSTCbdNtfNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDNTFNUM",row || gx.fn.currentGridRowImpl(51),gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum,0)},c2v:function(){gx.O.A7075CBD001DETICMSNORMALSTCbdNtfNum=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETICMSNORMALSTCBDNTFNUM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDNITEM",gxz:"Z7074CBD001DETICMSNORMALSTCbdnItem",gxold:"O7074CBD001DETICMSNORMALSTCbdnItem",gxvar:"A7074CBD001DETICMSNORMALSTCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDNITEM",row || gx.fn.currentGridRowImpl(51),gx.O.A7074CBD001DETICMSNORMALSTCbdnItem,0)},c2v:function(){gx.O.A7074CBD001DETICMSNORMALSTCbdnItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETICMSNORMALSTCBDNITEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDCST",gxz:"Z7069CBD001DETICMSNORMALSTCbdCST",gxold:"O7069CBD001DETICMSNORMALSTCbdCST",gxvar:"A7069CBD001DETICMSNORMALSTCbdCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDCST",row || gx.fn.currentGridRowImpl(51),gx.O.A7069CBD001DETICMSNORMALSTCbdCST,0)},c2v:function(){gx.O.A7069CBD001DETICMSNORMALSTCbdCST=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETICMSNORMALSTCBDCST",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETICMSNORMALSTCBDORIG",gxz:"Z7077CBD001DETICMSNORMALSTCbdorig",gxold:"O7077CBD001DETICMSNORMALSTCbdorig",gxvar:"A7077CBD001DETICMSNORMALSTCbdorig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETICMSNORMALSTCBDORIG",row || gx.fn.currentGridRowImpl(51),gx.O.A7077CBD001DETICMSNORMALSTCbdorig,0)},c2v:function(){gx.O.A7077CBD001DETICMSNORMALSTCbdorig=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETICMSNORMALSTCBDORIG",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cCBD001DETICMSNORMALSTCbdEmpCodigo = 0 ;
   this.ZV6cCBD001DETICMSNORMALSTCbdEmpCodigo = 0 ;
   this.OV6cCBD001DETICMSNORMALSTCbdEmpCodigo = 0 ;
   this.AV7cCBD001DETICMSNORMALSTCbdNtfSerie = "" ;
   this.ZV7cCBD001DETICMSNORMALSTCbdNtfSerie = "" ;
   this.OV7cCBD001DETICMSNORMALSTCbdNtfSerie = "" ;
   this.AV8cCBD001DETICMSNORMALSTCbdNtfNumero = 0 ;
   this.ZV8cCBD001DETICMSNORMALSTCbdNtfNumero = 0 ;
   this.OV8cCBD001DETICMSNORMALSTCbdNtfNumero = 0 ;
   this.AV9cCBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.ZV9cCBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.OV9cCBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.AV10cCBD001DETICMSNORMALSTCbdCST = 0 ;
   this.ZV10cCBD001DETICMSNORMALSTCbdCST = 0 ;
   this.OV10cCBD001DETICMSNORMALSTCbdCST = 0 ;
   this.AV11cCBD001DETICMSNORMALSTCbdorig = 0 ;
   this.ZV11cCBD001DETICMSNORMALSTCbdorig = 0 ;
   this.OV11cCBD001DETICMSNORMALSTCbdorig = 0 ;
   this.AV12cCBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.ZV12cCBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.OV12cCBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.O7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.Z7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.O7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.Z7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.O7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.Z7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.O7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.Z7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.O7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.Z7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.O7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.AV6cCBD001DETICMSNORMALSTCbdEmpCodigo = 0 ;
   this.AV7cCBD001DETICMSNORMALSTCbdNtfSerie = "" ;
   this.AV8cCBD001DETICMSNORMALSTCbdNtfNumero = 0 ;
   this.AV9cCBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.AV10cCBD001DETICMSNORMALSTCbdCST = 0 ;
   this.AV11cCBD001DETICMSNORMALSTCbdorig = 0 ;
   this.AV12cCBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.AV13pCBD001DETICMSNORMALSTCbdEmpCodigo = 0 ;
   this.AV14pCBD001DETICMSNORMALSTCbdNtfSerie = "" ;
   this.AV15pCBD001DETICMSNORMALSTCbdNtfNumero = 0 ;
   this.AV16pCBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.AV17pCBD001DETICMSNORMALSTCbdCST = 0 ;
   this.A7071CBD001DETICMSNORMALSTCbdmodBC = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7070CBD001DETICMSNORMALSTCbdEmpCod = 0 ;
   this.A7076CBD001DETICMSNORMALSTCbdNtfSer = "" ;
   this.A7075CBD001DETICMSNORMALSTCbdNtfNum = 0 ;
   this.A7074CBD001DETICMSNORMALSTCbdnItem = 0 ;
   this.A7069CBD001DETICMSNORMALSTCbdCST = 0 ;
   this.A7077CBD001DETICMSNORMALSTCbdorig = 0 ;
   this.Events = {"e131tm2_client": ["ENTER", true] ,"e141tm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vCCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV7cCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vCCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV8cCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vCCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV9cCBD001DETICMSNORMALSTCbdnItem',fld:'vCCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV10cCBD001DETICMSNORMALSTCbdCST',fld:'vCCBD001DETICMSNORMALSTCBDCST'},{av:'AV11cCBD001DETICMSNORMALSTCbdorig',fld:'vCCBD001DETICMSNORMALSTCBDORIG'},{av:'AV12cCBD001DETICMSNORMALSTCbdmodBC',fld:'vCCBD001DETICMSNORMALSTCBDMODBC'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7070CBD001DETICMSNORMALSTCbdEmpCod',fld:'CBD001DETICMSNORMALSTCBDEMPCOD'},{av:'A7076CBD001DETICMSNORMALSTCbdNtfSer',fld:'CBD001DETICMSNORMALSTCBDNTFSER'},{av:'A7075CBD001DETICMSNORMALSTCbdNtfNum',fld:'CBD001DETICMSNORMALSTCBDNTFNUM'},{av:'A7074CBD001DETICMSNORMALSTCbdnItem',fld:'CBD001DETICMSNORMALSTCBDNITEM'},{av:'A7069CBD001DETICMSNORMALSTCbdCST',fld:'CBD001DETICMSNORMALSTCBDCST'}],[{av:'AV13pCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vPCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV14pCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vPCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV15pCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vPCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV16pCBD001DETICMSNORMALSTCbdnItem',fld:'vPCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV17pCBD001DETICMSNORMALSTCbdCST',fld:'vPCBD001DETICMSNORMALSTCBDCST'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vCCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV7cCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vCCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV8cCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vCCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV9cCBD001DETICMSNORMALSTCbdnItem',fld:'vCCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV10cCBD001DETICMSNORMALSTCbdCST',fld:'vCCBD001DETICMSNORMALSTCBDCST'},{av:'AV11cCBD001DETICMSNORMALSTCbdorig',fld:'vCCBD001DETICMSNORMALSTCBDORIG'},{av:'AV12cCBD001DETICMSNORMALSTCbdmodBC',fld:'vCCBD001DETICMSNORMALSTCBDMODBC'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vCCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV7cCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vCCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV8cCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vCCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV9cCBD001DETICMSNORMALSTCbdnItem',fld:'vCCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV10cCBD001DETICMSNORMALSTCbdCST',fld:'vCCBD001DETICMSNORMALSTCBDCST'},{av:'AV11cCBD001DETICMSNORMALSTCbdorig',fld:'vCCBD001DETICMSNORMALSTCBDORIG'},{av:'AV12cCBD001DETICMSNORMALSTCbdmodBC',fld:'vCCBD001DETICMSNORMALSTCBDMODBC'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vCCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV7cCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vCCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV8cCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vCCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV9cCBD001DETICMSNORMALSTCbdnItem',fld:'vCCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV10cCBD001DETICMSNORMALSTCbdCST',fld:'vCCBD001DETICMSNORMALSTCBDCST'},{av:'AV11cCBD001DETICMSNORMALSTCbdorig',fld:'vCCBD001DETICMSNORMALSTCBDORIG'},{av:'AV12cCBD001DETICMSNORMALSTCbdmodBC',fld:'vCCBD001DETICMSNORMALSTCBDMODBC'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETICMSNORMALSTCbdEmpCodigo',fld:'vCCBD001DETICMSNORMALSTCBDEMPCODIGO'},{av:'AV7cCBD001DETICMSNORMALSTCbdNtfSerie',fld:'vCCBD001DETICMSNORMALSTCBDNTFSERIE'},{av:'AV8cCBD001DETICMSNORMALSTCbdNtfNumero',fld:'vCCBD001DETICMSNORMALSTCBDNTFNUMERO'},{av:'AV9cCBD001DETICMSNORMALSTCbdnItem',fld:'vCCBD001DETICMSNORMALSTCBDNITEM'},{av:'AV10cCBD001DETICMSNORMALSTCbdCST',fld:'vCCBD001DETICMSNORMALSTCBDCST'},{av:'AV11cCBD001DETICMSNORMALSTCbdorig',fld:'vCCBD001DETICMSNORMALSTCBDORIG'},{av:'AV12cCBD001DETICMSNORMALSTCbdmodBC',fld:'vCCBD001DETICMSNORMALSTCBDMODBC'}],[]];
   this.setVCMap("AV13pCBD001DETICMSNORMALSTCbdEmpCodigo", "vPCBD001DETICMSNORMALSTCBDEMPCODIGO", 0, "int");
   this.setVCMap("AV14pCBD001DETICMSNORMALSTCbdNtfSerie", "vPCBD001DETICMSNORMALSTCBDNTFSERIE", 0, "char");
   this.setVCMap("AV15pCBD001DETICMSNORMALSTCbdNtfNumero", "vPCBD001DETICMSNORMALSTCBDNTFNUMERO", 0, "int");
   this.setVCMap("AV16pCBD001DETICMSNORMALSTCbdnItem", "vPCBD001DETICMSNORMALSTCBDNITEM", 0, "int");
   this.setVCMap("AV17pCBD001DETICMSNORMALSTCbdCST", "vPCBD001DETICMSNORMALSTCBDCST", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0f90());