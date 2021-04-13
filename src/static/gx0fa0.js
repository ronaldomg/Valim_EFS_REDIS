/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:47.54
*/
gx.evt.autoSkip = false;
gx.define('gx0fa0', false, function () {
   this.ServerClass =  "gx0fa0" ;
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
      this.AV13pCBD001DETDICbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001DETDICBDEMPCODIGO",'.') ;
      this.AV14pCBD001DETDICbdNtfSerie=gx.fn.getControlValue("vPCBD001DETDICBDNTFSERIE") ;
      this.AV15pCBD001DETDICbdNtfNumero=gx.fn.getIntegerValue("vPCBD001DETDICBDNTFNUMERO",'.') ;
      this.AV16pCBD001DETDICbdnItem=gx.fn.getIntegerValue("vPCBD001DETDICBDNITEM",'.') ;
      this.AV17pCBD001DETDICbdnDI=gx.fn.getControlValue("vPCBD001DETDICBDNDI") ;
   };
   this.e131tn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141tn1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fa0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7062,53,"CBD001DETDICBDEMPCODIGO","Código da Empresa","","CBD001DETDICbdEmpCodigo","int",0,"px",4,4,"right",null,[],7062,"CBD001DETDICbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7066,54,"CBD001DETDICBDNTFSERIE","Série do Documento Fiscal","","CBD001DETDICbdNtfSerie","char",0,"px",3,3,"left",null,[],7066,"CBD001DETDICbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7065,55,"CBD001DETDICBDNTFNUMERO","Número do Documento Fiscal","","CBD001DETDICbdNtfNumero","int",0,"px",9,9,"right",null,[],7065,"CBD001DETDICbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7064,56,"CBD001DETDICBDNITEM","Número do item","","CBD001DETDICbdnItem","int",0,"px",3,3,"right",null,[],7064,"CBD001DETDICbdnItem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7061,57,"CBD001DETDICBDDDI","Data de Registro da DI/DSI/DA","Selecionar","CBD001DETDICbddDi","date",0,"px",8,8,"right",null,[],7061,"CBD001DETDICbddDi",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7063,58,"CBD001DETDICBDNDI","Número do Documento de Importação DI/DSI/DA/DRI-E","","CBD001DETDICbdnDI","char",0,"px",12,12,"left",null,[],7063,"CBD001DETDICbdnDI",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001DETDICBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDEMPCODIGO",gxz:"ZV6cCBD001DETDICbdEmpCodigo",gxold:"OV6cCBD001DETDICbdEmpCodigo",gxvar:"AV6cCBD001DETDICbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDEMPCODIGO",gx.O.AV6cCBD001DETDICbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001DETDICbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETDICBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001DETDICBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDNTFSERIE",gxz:"ZV7cCBD001DETDICbdNtfSerie",gxold:"OV7cCBD001DETDICbdNtfSerie",gxvar:"AV7cCBD001DETDICbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001DETDICbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001DETDICbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDNTFSERIE",gx.O.AV7cCBD001DETDICbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001DETDICbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001DETDICBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001DETDICBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDNTFNUMERO",gxz:"ZV8cCBD001DETDICbdNtfNumero",gxold:"OV8cCBD001DETDICbdNtfNumero",gxvar:"AV8cCBD001DETDICbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDNTFNUMERO",gx.O.AV8cCBD001DETDICbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001DETDICbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETDICBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001DETDICBDNITEM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDNITEM",gxz:"ZV9cCBD001DETDICbdnItem",gxold:"OV9cCBD001DETDICbdnItem",gxvar:"AV9cCBD001DETDICbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001DETDICbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCBD001DETDICbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDNITEM",gx.O.AV9cCBD001DETDICbdnItem,0)},c2v:function(){gx.O.AV9cCBD001DETDICbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETDICBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001DETDICBDNDI", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDNDI",gxz:"ZV10cCBD001DETDICbdnDI",gxold:"OV10cCBD001DETDICbdnDI",gxvar:"AV10cCBD001DETDICbdnDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001DETDICbdnDI=Value},v2z:function(Value){gx.O.ZV10cCBD001DETDICbdnDI=Value},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDNDI",gx.O.AV10cCBD001DETDICbdnDI,0)},c2v:function(){gx.O.AV10cCBD001DETDICbdnDI=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001DETDICBDNDI")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCBD001DETDICBDDDI", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDDDI",gxz:"ZV11cCBD001DETDICbddDi",gxold:"OV11cCBD001DETDICbddDi",gxvar:"AV11cCBD001DETDICbddDi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cCBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDDDI",gx.O.AV11cCBD001DETDICbddDi,0)},c2v:function(){gx.O.AV11cCBD001DETDICbddDi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCBD001DETDICBDDDI")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCBD001DETDICBDXLOCDESEMB", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETDICBDXLOCDESEMB",gxz:"ZV12cCBD001DETDICbdxLocDesemb",gxold:"OV12cCBD001DETDICbdxLocDesemb",gxvar:"AV12cCBD001DETDICbdxLocDesemb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCBD001DETDICbdxLocDesemb=Value},v2z:function(Value){gx.O.ZV12cCBD001DETDICbdxLocDesemb=Value},v2c:function(){gx.fn.setControlValue("vCCBD001DETDICBDXLOCDESEMB",gx.O.AV12cCBD001DETDICbdxLocDesemb,0)},c2v:function(){gx.O.AV12cCBD001DETDICbdxLocDesemb=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001DETDICBDXLOCDESEMB")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDEMPCODIGO",gxz:"Z7062CBD001DETDICbdEmpCodigo",gxold:"O7062CBD001DETDICbdEmpCodigo",gxvar:"A7062CBD001DETDICbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7062CBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7062CBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7062CBD001DETDICbdEmpCodigo,0)},c2v:function(){gx.O.A7062CBD001DETDICbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETDICBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNTFSERIE",gxz:"Z7066CBD001DETDICbdNtfSerie",gxold:"O7066CBD001DETDICbdNtfSerie",gxvar:"A7066CBD001DETDICbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7066CBD001DETDICbdNtfSerie=Value},v2z:function(Value){gx.O.Z7066CBD001DETDICbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDNTFSERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A7066CBD001DETDICbdNtfSerie,0)},c2v:function(){gx.O.A7066CBD001DETDICbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001DETDICBDNTFSERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNTFNUMERO",gxz:"Z7065CBD001DETDICbdNtfNumero",gxold:"O7065CBD001DETDICbdNtfNumero",gxvar:"A7065CBD001DETDICbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7065CBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7065CBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7065CBD001DETDICbdNtfNumero,0)},c2v:function(){gx.O.A7065CBD001DETDICbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETDICBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNITEM",gxz:"Z7064CBD001DETDICbdnItem",gxold:"O7064CBD001DETDICbdnItem",gxvar:"A7064CBD001DETDICbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7064CBD001DETDICbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7064CBD001DETDICbdnItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDNITEM",row || gx.fn.currentGridRowImpl(51),gx.O.A7064CBD001DETDICbdnItem,0)},c2v:function(){gx.O.A7064CBD001DETDICbdnItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETDICBDNITEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDDDI",gxz:"Z7061CBD001DETDICbddDi",gxold:"O7061CBD001DETDICbddDi",gxvar:"A7061CBD001DETDICbddDi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDDDI",row || gx.fn.currentGridRowImpl(51),gx.O.A7061CBD001DETDICbddDi,0)},c2v:function(){gx.O.A7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CBD001DETDICBDDDI",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNDI",gxz:"Z7063CBD001DETDICbdnDI",gxold:"O7063CBD001DETDICbdnDI",gxvar:"A7063CBD001DETDICbdnDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7063CBD001DETDICbdnDI=Value},v2z:function(Value){gx.O.Z7063CBD001DETDICbdnDI=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001DETDICBDNDI",row || gx.fn.currentGridRowImpl(51),gx.O.A7063CBD001DETDICbdnDI,0)},c2v:function(){gx.O.A7063CBD001DETDICbdnDI=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001DETDICBDNDI",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cCBD001DETDICbdEmpCodigo = 0 ;
   this.ZV6cCBD001DETDICbdEmpCodigo = 0 ;
   this.OV6cCBD001DETDICbdEmpCodigo = 0 ;
   this.AV7cCBD001DETDICbdNtfSerie = "" ;
   this.ZV7cCBD001DETDICbdNtfSerie = "" ;
   this.OV7cCBD001DETDICbdNtfSerie = "" ;
   this.AV8cCBD001DETDICbdNtfNumero = 0 ;
   this.ZV8cCBD001DETDICbdNtfNumero = 0 ;
   this.OV8cCBD001DETDICbdNtfNumero = 0 ;
   this.AV9cCBD001DETDICbdnItem = 0 ;
   this.ZV9cCBD001DETDICbdnItem = 0 ;
   this.OV9cCBD001DETDICbdnItem = 0 ;
   this.AV10cCBD001DETDICbdnDI = "" ;
   this.ZV10cCBD001DETDICbdnDI = "" ;
   this.OV10cCBD001DETDICbdnDI = "" ;
   this.AV11cCBD001DETDICbddDi = gx.date.nullDate() ;
   this.ZV11cCBD001DETDICbddDi = gx.date.nullDate() ;
   this.OV11cCBD001DETDICbddDi = gx.date.nullDate() ;
   this.AV12cCBD001DETDICbdxLocDesemb = "" ;
   this.ZV12cCBD001DETDICbdxLocDesemb = "" ;
   this.OV12cCBD001DETDICbdxLocDesemb = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7062CBD001DETDICbdEmpCodigo = 0 ;
   this.O7062CBD001DETDICbdEmpCodigo = 0 ;
   this.Z7066CBD001DETDICbdNtfSerie = "" ;
   this.O7066CBD001DETDICbdNtfSerie = "" ;
   this.Z7065CBD001DETDICbdNtfNumero = 0 ;
   this.O7065CBD001DETDICbdNtfNumero = 0 ;
   this.Z7064CBD001DETDICbdnItem = 0 ;
   this.O7064CBD001DETDICbdnItem = 0 ;
   this.Z7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.O7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.Z7063CBD001DETDICbdnDI = "" ;
   this.O7063CBD001DETDICbdnDI = "" ;
   this.AV6cCBD001DETDICbdEmpCodigo = 0 ;
   this.AV7cCBD001DETDICbdNtfSerie = "" ;
   this.AV8cCBD001DETDICbdNtfNumero = 0 ;
   this.AV9cCBD001DETDICbdnItem = 0 ;
   this.AV10cCBD001DETDICbdnDI = "" ;
   this.AV11cCBD001DETDICbddDi = gx.date.nullDate() ;
   this.AV12cCBD001DETDICbdxLocDesemb = "" ;
   this.AV13pCBD001DETDICbdEmpCodigo = 0 ;
   this.AV14pCBD001DETDICbdNtfSerie = "" ;
   this.AV15pCBD001DETDICbdNtfNumero = 0 ;
   this.AV16pCBD001DETDICbdnItem = 0 ;
   this.AV17pCBD001DETDICbdnDI = "" ;
   this.A7068CBD001DETDICbdxLocDesemb = "" ;
   this.AV5LinkSelection = "" ;
   this.A7062CBD001DETDICbdEmpCodigo = 0 ;
   this.A7066CBD001DETDICbdNtfSerie = "" ;
   this.A7065CBD001DETDICbdNtfNumero = 0 ;
   this.A7064CBD001DETDICbdnItem = 0 ;
   this.A7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.A7063CBD001DETDICbdnDI = "" ;
   this.Events = {"e131tn2_client": ["ENTER", true] ,"e141tn1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETDICbdEmpCodigo',fld:'vCCBD001DETDICBDEMPCODIGO'},{av:'AV7cCBD001DETDICbdNtfSerie',fld:'vCCBD001DETDICBDNTFSERIE'},{av:'AV8cCBD001DETDICbdNtfNumero',fld:'vCCBD001DETDICBDNTFNUMERO'},{av:'AV9cCBD001DETDICbdnItem',fld:'vCCBD001DETDICBDNITEM'},{av:'AV10cCBD001DETDICbdnDI',fld:'vCCBD001DETDICBDNDI'},{av:'AV11cCBD001DETDICbddDi',fld:'vCCBD001DETDICBDDDI'},{av:'AV12cCBD001DETDICbdxLocDesemb',fld:'vCCBD001DETDICBDXLOCDESEMB'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7062CBD001DETDICbdEmpCodigo',fld:'CBD001DETDICBDEMPCODIGO'},{av:'A7066CBD001DETDICbdNtfSerie',fld:'CBD001DETDICBDNTFSERIE'},{av:'A7065CBD001DETDICbdNtfNumero',fld:'CBD001DETDICBDNTFNUMERO'},{av:'A7064CBD001DETDICbdnItem',fld:'CBD001DETDICBDNITEM'},{av:'A7063CBD001DETDICbdnDI',fld:'CBD001DETDICBDNDI'}],[{av:'AV13pCBD001DETDICbdEmpCodigo',fld:'vPCBD001DETDICBDEMPCODIGO'},{av:'AV14pCBD001DETDICbdNtfSerie',fld:'vPCBD001DETDICBDNTFSERIE'},{av:'AV15pCBD001DETDICbdNtfNumero',fld:'vPCBD001DETDICBDNTFNUMERO'},{av:'AV16pCBD001DETDICbdnItem',fld:'vPCBD001DETDICBDNITEM'},{av:'AV17pCBD001DETDICbdnDI',fld:'vPCBD001DETDICBDNDI'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETDICbdEmpCodigo',fld:'vCCBD001DETDICBDEMPCODIGO'},{av:'AV7cCBD001DETDICbdNtfSerie',fld:'vCCBD001DETDICBDNTFSERIE'},{av:'AV8cCBD001DETDICbdNtfNumero',fld:'vCCBD001DETDICBDNTFNUMERO'},{av:'AV9cCBD001DETDICbdnItem',fld:'vCCBD001DETDICBDNITEM'},{av:'AV10cCBD001DETDICbdnDI',fld:'vCCBD001DETDICBDNDI'},{av:'AV11cCBD001DETDICbddDi',fld:'vCCBD001DETDICBDDDI'},{av:'AV12cCBD001DETDICbdxLocDesemb',fld:'vCCBD001DETDICBDXLOCDESEMB'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETDICbdEmpCodigo',fld:'vCCBD001DETDICBDEMPCODIGO'},{av:'AV7cCBD001DETDICbdNtfSerie',fld:'vCCBD001DETDICBDNTFSERIE'},{av:'AV8cCBD001DETDICbdNtfNumero',fld:'vCCBD001DETDICBDNTFNUMERO'},{av:'AV9cCBD001DETDICbdnItem',fld:'vCCBD001DETDICBDNITEM'},{av:'AV10cCBD001DETDICbdnDI',fld:'vCCBD001DETDICBDNDI'},{av:'AV11cCBD001DETDICbddDi',fld:'vCCBD001DETDICBDDDI'},{av:'AV12cCBD001DETDICbdxLocDesemb',fld:'vCCBD001DETDICBDXLOCDESEMB'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETDICbdEmpCodigo',fld:'vCCBD001DETDICBDEMPCODIGO'},{av:'AV7cCBD001DETDICbdNtfSerie',fld:'vCCBD001DETDICBDNTFSERIE'},{av:'AV8cCBD001DETDICbdNtfNumero',fld:'vCCBD001DETDICBDNTFNUMERO'},{av:'AV9cCBD001DETDICbdnItem',fld:'vCCBD001DETDICBDNITEM'},{av:'AV10cCBD001DETDICbdnDI',fld:'vCCBD001DETDICBDNDI'},{av:'AV11cCBD001DETDICbddDi',fld:'vCCBD001DETDICBDDDI'},{av:'AV12cCBD001DETDICbdxLocDesemb',fld:'vCCBD001DETDICBDXLOCDESEMB'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETDICbdEmpCodigo',fld:'vCCBD001DETDICBDEMPCODIGO'},{av:'AV7cCBD001DETDICbdNtfSerie',fld:'vCCBD001DETDICBDNTFSERIE'},{av:'AV8cCBD001DETDICbdNtfNumero',fld:'vCCBD001DETDICBDNTFNUMERO'},{av:'AV9cCBD001DETDICbdnItem',fld:'vCCBD001DETDICBDNITEM'},{av:'AV10cCBD001DETDICbdnDI',fld:'vCCBD001DETDICBDNDI'},{av:'AV11cCBD001DETDICbddDi',fld:'vCCBD001DETDICBDDDI'},{av:'AV12cCBD001DETDICbdxLocDesemb',fld:'vCCBD001DETDICBDXLOCDESEMB'}],[]];
   this.setVCMap("AV13pCBD001DETDICbdEmpCodigo", "vPCBD001DETDICBDEMPCODIGO", 0, "int");
   this.setVCMap("AV14pCBD001DETDICbdNtfSerie", "vPCBD001DETDICBDNTFSERIE", 0, "char");
   this.setVCMap("AV15pCBD001DETDICbdNtfNumero", "vPCBD001DETDICBDNTFNUMERO", 0, "int");
   this.setVCMap("AV16pCBD001DETDICbdnItem", "vPCBD001DETDICBDNITEM", 0, "int");
   this.setVCMap("AV17pCBD001DETDICbdnDI", "vPCBD001DETDICBDNDI", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fa0());