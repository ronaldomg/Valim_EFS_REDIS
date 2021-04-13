/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:2.13
*/
gx.evt.autoSkip = false;
gx.define('gx0fc0', false, function () {
   this.ServerClass =  "gx0fc0" ;
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
      this.AV13pCBD001DETARMACbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001DETARMACBDEMPCODIGO",'.') ;
      this.AV14pCBD001DETARMACbdNtfSerie=gx.fn.getControlValue("vPCBD001DETARMACBDNTFSERIE") ;
      this.AV15pCBD001DETARMACbdNtfNumero=gx.fn.getIntegerValue("vPCBD001DETARMACBDNTFNUMERO",'.') ;
      this.AV16pCBD001DETARMACbdnItem=gx.fn.getIntegerValue("vPCBD001DETARMACBDNITEM",'.') ;
      this.AV17pCBD001DETARMACbdnSerie_arma=gx.fn.getIntegerValue("vPCBD001DETARMACBDNSERIE_ARMA",'.') ;
   };
   this.e131xw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fc0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7042,53,"CBD001DETARMACBDEMPCODIGO","Código da Empresa","","CBD001DETARMACbdEmpCodigo","int",0,"px",4,4,"right",null,[],7042,"CBD001DETARMACbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7047,54,"CBD001DETARMACBDNTFSERIE","Série do Documento Fiscal","","CBD001DETARMACbdNtfSerie","char",0,"px",3,3,"left",null,[],7047,"CBD001DETARMACbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7046,55,"CBD001DETARMACBDNTFNUMERO","Número do Documento Fiscal","","CBD001DETARMACbdNtfNumero","int",0,"px",9,9,"right",null,[],7046,"CBD001DETARMACbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7044,56,"CBD001DETARMACBDNITEM","Número do item","","CBD001DETARMACbdnItem","int",0,"px",3,3,"right",null,[],7044,"CBD001DETARMACbdnItem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7045,57,"CBD001DETARMACBDNSERIE_ARMA","Número de série da arma","","CBD001DETARMACbdnSerie_arma","int",0,"px",9,9,"right",null,[],7045,"CBD001DETARMACbdnSerie_arma",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001DETARMACBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDEMPCODIGO",gxz:"ZV6cCBD001DETARMACbdEmpCodigo",gxold:"OV6cCBD001DETARMACbdEmpCodigo",gxvar:"AV6cCBD001DETARMACbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDEMPCODIGO",gx.O.AV6cCBD001DETARMACbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001DETARMACbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001DETARMACBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDNTFSERIE",gxz:"ZV7cCBD001DETARMACbdNtfSerie",gxold:"OV7cCBD001DETARMACbdNtfSerie",gxvar:"AV7cCBD001DETARMACbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001DETARMACbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001DETARMACbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDNTFSERIE",gx.O.AV7cCBD001DETARMACbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001DETARMACbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001DETARMACBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001DETARMACBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDNTFNUMERO",gxz:"ZV8cCBD001DETARMACbdNtfNumero",gxold:"OV8cCBD001DETARMACbdNtfNumero",gxvar:"AV8cCBD001DETARMACbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDNTFNUMERO",gx.O.AV8cCBD001DETARMACbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001DETARMACbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001DETARMACBDNITEM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDNITEM",gxz:"ZV9cCBD001DETARMACbdnItem",gxold:"OV9cCBD001DETARMACbdnItem",gxvar:"AV9cCBD001DETARMACbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001DETARMACbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCBD001DETARMACbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDNITEM",gx.O.AV9cCBD001DETARMACbdnItem,0)},c2v:function(){gx.O.AV9cCBD001DETARMACbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001DETARMACBDNSERIE_ARMA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDNSERIE_ARMA",gxz:"ZV10cCBD001DETARMACbdnSerie_arma",gxold:"OV10cCBD001DETARMACbdnSerie_arma",gxvar:"AV10cCBD001DETARMACbdnSerie_arma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cCBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDNSERIE_ARMA",gx.O.AV10cCBD001DETARMACbdnSerie_arma,0)},c2v:function(){gx.O.AV10cCBD001DETARMACbdnSerie_arma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDNSERIE_ARMA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCBD001DETARMACBDTPARMA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDTPARMA",gxz:"ZV11cCBD001DETARMACbdtpArma",gxold:"OV11cCBD001DETARMACbdtpArma",gxvar:"AV11cCBD001DETARMACbdtpArma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCBD001DETARMACbdtpArma=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCBD001DETARMACbdtpArma=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDTPARMA",gx.O.AV11cCBD001DETARMACbdtpArma,0)},c2v:function(){gx.O.AV11cCBD001DETARMACbdtpArma=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDTPARMA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCBD001DETARMACBDNCANO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001DETARMACBDNCANO",gxz:"ZV12cCBD001DETARMACbdnCano",gxold:"OV12cCBD001DETARMACbdnCano",gxvar:"AV12cCBD001DETARMACbdnCano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCBD001DETARMACbdnCano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCBD001DETARMACbdnCano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001DETARMACBDNCANO",gx.O.AV12cCBD001DETARMACbdnCano,0)},c2v:function(){gx.O.AV12cCBD001DETARMACbdnCano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001DETARMACBDNCANO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDEMPCODIGO",gxz:"Z7042CBD001DETARMACbdEmpCodigo",gxold:"O7042CBD001DETARMACbdEmpCodigo",gxvar:"A7042CBD001DETARMACbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7042CBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7042CBD001DETARMACbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETARMACBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7042CBD001DETARMACbdEmpCodigo,0)},c2v:function(){gx.O.A7042CBD001DETARMACbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETARMACBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNTFSERIE",gxz:"Z7047CBD001DETARMACbdNtfSerie",gxold:"O7047CBD001DETARMACbdNtfSerie",gxvar:"A7047CBD001DETARMACbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7047CBD001DETARMACbdNtfSerie=Value},v2z:function(Value){gx.O.Z7047CBD001DETARMACbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001DETARMACBDNTFSERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A7047CBD001DETARMACbdNtfSerie,0)},c2v:function(){gx.O.A7047CBD001DETARMACbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001DETARMACBDNTFSERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNTFNUMERO",gxz:"Z7046CBD001DETARMACbdNtfNumero",gxold:"O7046CBD001DETARMACbdNtfNumero",gxvar:"A7046CBD001DETARMACbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7046CBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7046CBD001DETARMACbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETARMACBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7046CBD001DETARMACbdNtfNumero,0)},c2v:function(){gx.O.A7046CBD001DETARMACbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETARMACBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNITEM",gxz:"Z7044CBD001DETARMACbdnItem",gxold:"O7044CBD001DETARMACbdnItem",gxvar:"A7044CBD001DETARMACbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7044CBD001DETARMACbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7044CBD001DETARMACbdnItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETARMACBDNITEM",row || gx.fn.currentGridRowImpl(51),gx.O.A7044CBD001DETARMACbdnItem,0)},c2v:function(){gx.O.A7044CBD001DETARMACbdnItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETARMACBDNITEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETARMACBDNSERIE_ARMA",gxz:"Z7045CBD001DETARMACbdnSerie_arma",gxold:"O7045CBD001DETARMACbdnSerie_arma",gxvar:"A7045CBD001DETARMACbdnSerie_arma",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7045CBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7045CBD001DETARMACbdnSerie_arma=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001DETARMACBDNSERIE_ARMA",row || gx.fn.currentGridRowImpl(51),gx.O.A7045CBD001DETARMACbdnSerie_arma,0)},c2v:function(){gx.O.A7045CBD001DETARMACbdnSerie_arma=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001DETARMACBDNSERIE_ARMA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cCBD001DETARMACbdEmpCodigo = 0 ;
   this.ZV6cCBD001DETARMACbdEmpCodigo = 0 ;
   this.OV6cCBD001DETARMACbdEmpCodigo = 0 ;
   this.AV7cCBD001DETARMACbdNtfSerie = "" ;
   this.ZV7cCBD001DETARMACbdNtfSerie = "" ;
   this.OV7cCBD001DETARMACbdNtfSerie = "" ;
   this.AV8cCBD001DETARMACbdNtfNumero = 0 ;
   this.ZV8cCBD001DETARMACbdNtfNumero = 0 ;
   this.OV8cCBD001DETARMACbdNtfNumero = 0 ;
   this.AV9cCBD001DETARMACbdnItem = 0 ;
   this.ZV9cCBD001DETARMACbdnItem = 0 ;
   this.OV9cCBD001DETARMACbdnItem = 0 ;
   this.AV10cCBD001DETARMACbdnSerie_arma = 0 ;
   this.ZV10cCBD001DETARMACbdnSerie_arma = 0 ;
   this.OV10cCBD001DETARMACbdnSerie_arma = 0 ;
   this.AV11cCBD001DETARMACbdtpArma = 0 ;
   this.ZV11cCBD001DETARMACbdtpArma = 0 ;
   this.OV11cCBD001DETARMACbdtpArma = 0 ;
   this.AV12cCBD001DETARMACbdnCano = 0 ;
   this.ZV12cCBD001DETARMACbdnCano = 0 ;
   this.OV12cCBD001DETARMACbdnCano = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.O7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.Z7047CBD001DETARMACbdNtfSerie = "" ;
   this.O7047CBD001DETARMACbdNtfSerie = "" ;
   this.Z7046CBD001DETARMACbdNtfNumero = 0 ;
   this.O7046CBD001DETARMACbdNtfNumero = 0 ;
   this.Z7044CBD001DETARMACbdnItem = 0 ;
   this.O7044CBD001DETARMACbdnItem = 0 ;
   this.Z7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.O7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.AV6cCBD001DETARMACbdEmpCodigo = 0 ;
   this.AV7cCBD001DETARMACbdNtfSerie = "" ;
   this.AV8cCBD001DETARMACbdNtfNumero = 0 ;
   this.AV9cCBD001DETARMACbdnItem = 0 ;
   this.AV10cCBD001DETARMACbdnSerie_arma = 0 ;
   this.AV11cCBD001DETARMACbdtpArma = 0 ;
   this.AV12cCBD001DETARMACbdnCano = 0 ;
   this.AV13pCBD001DETARMACbdEmpCodigo = 0 ;
   this.AV14pCBD001DETARMACbdNtfSerie = "" ;
   this.AV15pCBD001DETARMACbdNtfNumero = 0 ;
   this.AV16pCBD001DETARMACbdnItem = 0 ;
   this.AV17pCBD001DETARMACbdnSerie_arma = 0 ;
   this.A7043CBD001DETARMACbdnCano = 0 ;
   this.A7048CBD001DETARMACbdtpArma = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7042CBD001DETARMACbdEmpCodigo = 0 ;
   this.A7047CBD001DETARMACbdNtfSerie = "" ;
   this.A7046CBD001DETARMACbdNtfNumero = 0 ;
   this.A7044CBD001DETARMACbdnItem = 0 ;
   this.A7045CBD001DETARMACbdnSerie_arma = 0 ;
   this.Events = {"e131xw2_client": ["ENTER", true] ,"e141xw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETARMACbdEmpCodigo',fld:'vCCBD001DETARMACBDEMPCODIGO'},{av:'AV7cCBD001DETARMACbdNtfSerie',fld:'vCCBD001DETARMACBDNTFSERIE'},{av:'AV8cCBD001DETARMACbdNtfNumero',fld:'vCCBD001DETARMACBDNTFNUMERO'},{av:'AV9cCBD001DETARMACbdnItem',fld:'vCCBD001DETARMACBDNITEM'},{av:'AV10cCBD001DETARMACbdnSerie_arma',fld:'vCCBD001DETARMACBDNSERIE_ARMA'},{av:'AV11cCBD001DETARMACbdtpArma',fld:'vCCBD001DETARMACBDTPARMA'},{av:'AV12cCBD001DETARMACbdnCano',fld:'vCCBD001DETARMACBDNCANO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7042CBD001DETARMACbdEmpCodigo',fld:'CBD001DETARMACBDEMPCODIGO'},{av:'A7047CBD001DETARMACbdNtfSerie',fld:'CBD001DETARMACBDNTFSERIE'},{av:'A7046CBD001DETARMACbdNtfNumero',fld:'CBD001DETARMACBDNTFNUMERO'},{av:'A7044CBD001DETARMACbdnItem',fld:'CBD001DETARMACBDNITEM'},{av:'A7045CBD001DETARMACbdnSerie_arma',fld:'CBD001DETARMACBDNSERIE_ARMA'}],[{av:'AV13pCBD001DETARMACbdEmpCodigo',fld:'vPCBD001DETARMACBDEMPCODIGO'},{av:'AV14pCBD001DETARMACbdNtfSerie',fld:'vPCBD001DETARMACBDNTFSERIE'},{av:'AV15pCBD001DETARMACbdNtfNumero',fld:'vPCBD001DETARMACBDNTFNUMERO'},{av:'AV16pCBD001DETARMACbdnItem',fld:'vPCBD001DETARMACBDNITEM'},{av:'AV17pCBD001DETARMACbdnSerie_arma',fld:'vPCBD001DETARMACBDNSERIE_ARMA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETARMACbdEmpCodigo',fld:'vCCBD001DETARMACBDEMPCODIGO'},{av:'AV7cCBD001DETARMACbdNtfSerie',fld:'vCCBD001DETARMACBDNTFSERIE'},{av:'AV8cCBD001DETARMACbdNtfNumero',fld:'vCCBD001DETARMACBDNTFNUMERO'},{av:'AV9cCBD001DETARMACbdnItem',fld:'vCCBD001DETARMACBDNITEM'},{av:'AV10cCBD001DETARMACbdnSerie_arma',fld:'vCCBD001DETARMACBDNSERIE_ARMA'},{av:'AV11cCBD001DETARMACbdtpArma',fld:'vCCBD001DETARMACBDTPARMA'},{av:'AV12cCBD001DETARMACbdnCano',fld:'vCCBD001DETARMACBDNCANO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETARMACbdEmpCodigo',fld:'vCCBD001DETARMACBDEMPCODIGO'},{av:'AV7cCBD001DETARMACbdNtfSerie',fld:'vCCBD001DETARMACBDNTFSERIE'},{av:'AV8cCBD001DETARMACbdNtfNumero',fld:'vCCBD001DETARMACBDNTFNUMERO'},{av:'AV9cCBD001DETARMACbdnItem',fld:'vCCBD001DETARMACBDNITEM'},{av:'AV10cCBD001DETARMACbdnSerie_arma',fld:'vCCBD001DETARMACBDNSERIE_ARMA'},{av:'AV11cCBD001DETARMACbdtpArma',fld:'vCCBD001DETARMACBDTPARMA'},{av:'AV12cCBD001DETARMACbdnCano',fld:'vCCBD001DETARMACBDNCANO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETARMACbdEmpCodigo',fld:'vCCBD001DETARMACBDEMPCODIGO'},{av:'AV7cCBD001DETARMACbdNtfSerie',fld:'vCCBD001DETARMACBDNTFSERIE'},{av:'AV8cCBD001DETARMACbdNtfNumero',fld:'vCCBD001DETARMACBDNTFNUMERO'},{av:'AV9cCBD001DETARMACbdnItem',fld:'vCCBD001DETARMACBDNITEM'},{av:'AV10cCBD001DETARMACbdnSerie_arma',fld:'vCCBD001DETARMACBDNSERIE_ARMA'},{av:'AV11cCBD001DETARMACbdtpArma',fld:'vCCBD001DETARMACBDTPARMA'},{av:'AV12cCBD001DETARMACbdnCano',fld:'vCCBD001DETARMACBDNCANO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001DETARMACbdEmpCodigo',fld:'vCCBD001DETARMACBDEMPCODIGO'},{av:'AV7cCBD001DETARMACbdNtfSerie',fld:'vCCBD001DETARMACBDNTFSERIE'},{av:'AV8cCBD001DETARMACbdNtfNumero',fld:'vCCBD001DETARMACBDNTFNUMERO'},{av:'AV9cCBD001DETARMACbdnItem',fld:'vCCBD001DETARMACBDNITEM'},{av:'AV10cCBD001DETARMACbdnSerie_arma',fld:'vCCBD001DETARMACBDNSERIE_ARMA'},{av:'AV11cCBD001DETARMACbdtpArma',fld:'vCCBD001DETARMACBDTPARMA'},{av:'AV12cCBD001DETARMACbdnCano',fld:'vCCBD001DETARMACBDNCANO'}],[]];
   this.setVCMap("AV13pCBD001DETARMACbdEmpCodigo", "vPCBD001DETARMACBDEMPCODIGO", 0, "int");
   this.setVCMap("AV14pCBD001DETARMACbdNtfSerie", "vPCBD001DETARMACBDNTFSERIE", 0, "char");
   this.setVCMap("AV15pCBD001DETARMACbdNtfNumero", "vPCBD001DETARMACBDNTFNUMERO", 0, "int");
   this.setVCMap("AV16pCBD001DETARMACbdnItem", "vPCBD001DETARMACBDNITEM", 0, "int");
   this.setVCMap("AV17pCBD001DETARMACbdnSerie_arma", "vPCBD001DETARMACBDNSERIE_ARMA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fc0());
