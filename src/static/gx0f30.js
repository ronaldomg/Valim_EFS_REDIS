/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:34.69
*/
gx.evt.autoSkip = false;
gx.define('gx0f30', false, function () {
   this.ServerClass =  "gx0f30" ;
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
      this.AV13pCBD001NREFCbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001NREFCBDEMPCODIGO",'.') ;
      this.AV14pCBD001NREFCbdNtfSerie=gx.fn.getControlValue("vPCBD001NREFCBDNTFSERIE") ;
      this.AV15pCBD001NREFCbdNtfNumero=gx.fn.getIntegerValue("vPCBD001NREFCBDNTFNUMERO",'.') ;
      this.AV16pCBD001NREFCbdrefseq=gx.fn.getIntegerValue("vPCBD001NREFCBDREFSEQ",'.') ;
   };
   this.e131tg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141tg1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0f30",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7139,53,"CBD001NREFCBDEMPCODIGO","Código da Empresa","","CBD001NREFCbdEmpCodigo","int",0,"px",4,4,"right",null,[],7139,"CBD001NREFCbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7147,54,"CBD001NREFCBDNTFSERIE","Série do Documento Fiscal","","CBD001NREFCbdNtfSerie","char",0,"px",3,3,"left",null,[],7147,"CBD001NREFCbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7146,55,"CBD001NREFCBDNTFNUMERO","Número do Documento Fiscal","","CBD001NREFCbdNtfNumero","int",0,"px",9,9,"right",null,[],7146,"CBD001NREFCbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7150,56,"CBD001NREFCBDREFSEQ","Sequencial das Notas Fiscais referenciadas","","CBD001NREFCbdrefseq","int",0,"px",3,3,"right",null,[],7150,"CBD001NREFCbdrefseq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7137,57,"CBD001NREFCBDCPF","CPF do emitente","","CBD001NREFCbdCPF","char",0,"px",11,11,"left",null,[],7137,"CBD001NREFCbdCPF",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001NREFCBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDEMPCODIGO",gxz:"ZV6cCBD001NREFCbdEmpCodigo",gxold:"OV6cCBD001NREFCbdEmpCodigo",gxvar:"AV6cCBD001NREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDEMPCODIGO",gx.O.AV6cCBD001NREFCbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001NREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001NREFCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001NREFCBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDNTFSERIE",gxz:"ZV7cCBD001NREFCbdNtfSerie",gxold:"OV7cCBD001NREFCbdNtfSerie",gxvar:"AV7cCBD001NREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001NREFCbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001NREFCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDNTFSERIE",gx.O.AV7cCBD001NREFCbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001NREFCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001NREFCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001NREFCBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDNTFNUMERO",gxz:"ZV8cCBD001NREFCbdNtfNumero",gxold:"OV8cCBD001NREFCbdNtfNumero",gxvar:"AV8cCBD001NREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDNTFNUMERO",gx.O.AV8cCBD001NREFCbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001NREFCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001NREFCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001NREFCBDREFSEQ", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDREFSEQ",gxz:"ZV9cCBD001NREFCbdrefseq",gxold:"OV9cCBD001NREFCbdrefseq",gxvar:"AV9cCBD001NREFCbdrefseq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001NREFCbdrefseq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCBD001NREFCbdrefseq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDREFSEQ",gx.O.AV9cCBD001NREFCbdrefseq,0)},c2v:function(){gx.O.AV9cCBD001NREFCbdrefseq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001NREFCBDREFSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001NREFCBDREFNFE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDREFNFE",gxz:"ZV10cCBD001NREFCbdrefNFe",gxold:"OV10cCBD001NREFCbdrefNFe",gxvar:"AV10cCBD001NREFCbdrefNFe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001NREFCbdrefNFe=Value},v2z:function(Value){gx.O.ZV10cCBD001NREFCbdrefNFe=Value},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDREFNFE",gx.O.AV10cCBD001NREFCbdrefNFe,0)},c2v:function(){gx.O.AV10cCBD001NREFCbdrefNFe=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001NREFCBDREFNFE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCBD001NREFCBDCUF_REFNFE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDCUF_REFNFE",gxz:"ZV11cCBD001NREFCbdcUF_refNFE",gxold:"OV11cCBD001NREFCbdcUF_refNFE",gxvar:"AV11cCBD001NREFCbdcUF_refNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCBD001NREFCbdcUF_refNFE=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCBD001NREFCbdcUF_refNFE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDCUF_REFNFE",gx.O.AV11cCBD001NREFCbdcUF_refNFE,0)},c2v:function(){gx.O.AV11cCBD001NREFCbdcUF_refNFE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001NREFCBDCUF_REFNFE",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCBD001NREFCBDAAMM", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001NREFCBDAAMM",gxz:"ZV12cCBD001NREFCbdAAMM",gxold:"OV12cCBD001NREFCbdAAMM",gxvar:"AV12cCBD001NREFCbdAAMM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCBD001NREFCbdAAMM=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCBD001NREFCbdAAMM=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001NREFCBDAAMM",gx.O.AV12cCBD001NREFCbdAAMM,0)},c2v:function(){gx.O.AV12cCBD001NREFCbdAAMM=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001NREFCBDAAMM",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDEMPCODIGO",gxz:"Z7139CBD001NREFCbdEmpCodigo",gxold:"O7139CBD001NREFCbdEmpCodigo",gxvar:"A7139CBD001NREFCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7139CBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7139CBD001NREFCbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001NREFCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7139CBD001NREFCbdEmpCodigo,0)},c2v:function(){gx.O.A7139CBD001NREFCbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001NREFCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNTFSERIE",gxz:"Z7147CBD001NREFCbdNtfSerie",gxold:"O7147CBD001NREFCbdNtfSerie",gxvar:"A7147CBD001NREFCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7147CBD001NREFCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7147CBD001NREFCbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001NREFCBDNTFSERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A7147CBD001NREFCbdNtfSerie,0)},c2v:function(){gx.O.A7147CBD001NREFCbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001NREFCBDNTFSERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDNTFNUMERO",gxz:"Z7146CBD001NREFCbdNtfNumero",gxold:"O7146CBD001NREFCbdNtfNumero",gxvar:"A7146CBD001NREFCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7146CBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7146CBD001NREFCbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001NREFCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7146CBD001NREFCbdNtfNumero,0)},c2v:function(){gx.O.A7146CBD001NREFCbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001NREFCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDREFSEQ",gxz:"Z7150CBD001NREFCbdrefseq",gxold:"O7150CBD001NREFCbdrefseq",gxvar:"A7150CBD001NREFCbdrefseq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7150CBD001NREFCbdrefseq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7150CBD001NREFCbdrefseq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001NREFCBDREFSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A7150CBD001NREFCbdrefseq,0)},c2v:function(){gx.O.A7150CBD001NREFCbdrefseq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001NREFCBDREFSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:11,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001NREFCBDCPF",gxz:"Z7137CBD001NREFCbdCPF",gxold:"O7137CBD001NREFCbdCPF",gxvar:"A7137CBD001NREFCbdCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7137CBD001NREFCbdCPF=Value},v2z:function(Value){gx.O.Z7137CBD001NREFCbdCPF=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001NREFCBDCPF",row || gx.fn.currentGridRowImpl(51),gx.O.A7137CBD001NREFCbdCPF,0)},c2v:function(){gx.O.A7137CBD001NREFCbdCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001NREFCBDCPF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cCBD001NREFCbdEmpCodigo = 0 ;
   this.ZV6cCBD001NREFCbdEmpCodigo = 0 ;
   this.OV6cCBD001NREFCbdEmpCodigo = 0 ;
   this.AV7cCBD001NREFCbdNtfSerie = "" ;
   this.ZV7cCBD001NREFCbdNtfSerie = "" ;
   this.OV7cCBD001NREFCbdNtfSerie = "" ;
   this.AV8cCBD001NREFCbdNtfNumero = 0 ;
   this.ZV8cCBD001NREFCbdNtfNumero = 0 ;
   this.OV8cCBD001NREFCbdNtfNumero = 0 ;
   this.AV9cCBD001NREFCbdrefseq = 0 ;
   this.ZV9cCBD001NREFCbdrefseq = 0 ;
   this.OV9cCBD001NREFCbdrefseq = 0 ;
   this.AV10cCBD001NREFCbdrefNFe = "" ;
   this.ZV10cCBD001NREFCbdrefNFe = "" ;
   this.OV10cCBD001NREFCbdrefNFe = "" ;
   this.AV11cCBD001NREFCbdcUF_refNFE = 0 ;
   this.ZV11cCBD001NREFCbdcUF_refNFE = 0 ;
   this.OV11cCBD001NREFCbdcUF_refNFE = 0 ;
   this.AV12cCBD001NREFCbdAAMM = 0 ;
   this.ZV12cCBD001NREFCbdAAMM = 0 ;
   this.OV12cCBD001NREFCbdAAMM = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7139CBD001NREFCbdEmpCodigo = 0 ;
   this.O7139CBD001NREFCbdEmpCodigo = 0 ;
   this.Z7147CBD001NREFCbdNtfSerie = "" ;
   this.O7147CBD001NREFCbdNtfSerie = "" ;
   this.Z7146CBD001NREFCbdNtfNumero = 0 ;
   this.O7146CBD001NREFCbdNtfNumero = 0 ;
   this.Z7150CBD001NREFCbdrefseq = 0 ;
   this.O7150CBD001NREFCbdrefseq = 0 ;
   this.Z7137CBD001NREFCbdCPF = "" ;
   this.O7137CBD001NREFCbdCPF = "" ;
   this.AV6cCBD001NREFCbdEmpCodigo = 0 ;
   this.AV7cCBD001NREFCbdNtfSerie = "" ;
   this.AV8cCBD001NREFCbdNtfNumero = 0 ;
   this.AV9cCBD001NREFCbdrefseq = 0 ;
   this.AV10cCBD001NREFCbdrefNFe = "" ;
   this.AV11cCBD001NREFCbdcUF_refNFE = 0 ;
   this.AV12cCBD001NREFCbdAAMM = 0 ;
   this.AV13pCBD001NREFCbdEmpCodigo = 0 ;
   this.AV14pCBD001NREFCbdNtfSerie = "" ;
   this.AV15pCBD001NREFCbdNtfNumero = 0 ;
   this.AV16pCBD001NREFCbdrefseq = 0 ;
   this.A7135CBD001NREFCbdAAMM = 0 ;
   this.A7138CBD001NREFCbdcUF_refNFE = 0 ;
   this.A7149CBD001NREFCbdrefNFe = "" ;
   this.AV5LinkSelection = "" ;
   this.A7139CBD001NREFCbdEmpCodigo = 0 ;
   this.A7147CBD001NREFCbdNtfSerie = "" ;
   this.A7146CBD001NREFCbdNtfNumero = 0 ;
   this.A7150CBD001NREFCbdrefseq = 0 ;
   this.A7137CBD001NREFCbdCPF = "" ;
   this.Events = {"e131tg2_client": ["ENTER", true] ,"e141tg1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001NREFCbdEmpCodigo',fld:'vCCBD001NREFCBDEMPCODIGO'},{av:'AV7cCBD001NREFCbdNtfSerie',fld:'vCCBD001NREFCBDNTFSERIE'},{av:'AV8cCBD001NREFCbdNtfNumero',fld:'vCCBD001NREFCBDNTFNUMERO'},{av:'AV9cCBD001NREFCbdrefseq',fld:'vCCBD001NREFCBDREFSEQ'},{av:'AV10cCBD001NREFCbdrefNFe',fld:'vCCBD001NREFCBDREFNFE'},{av:'AV11cCBD001NREFCbdcUF_refNFE',fld:'vCCBD001NREFCBDCUF_REFNFE'},{av:'AV12cCBD001NREFCbdAAMM',fld:'vCCBD001NREFCBDAAMM'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7139CBD001NREFCbdEmpCodigo',fld:'CBD001NREFCBDEMPCODIGO'},{av:'A7147CBD001NREFCbdNtfSerie',fld:'CBD001NREFCBDNTFSERIE'},{av:'A7146CBD001NREFCbdNtfNumero',fld:'CBD001NREFCBDNTFNUMERO'},{av:'A7150CBD001NREFCbdrefseq',fld:'CBD001NREFCBDREFSEQ'}],[{av:'AV13pCBD001NREFCbdEmpCodigo',fld:'vPCBD001NREFCBDEMPCODIGO'},{av:'AV14pCBD001NREFCbdNtfSerie',fld:'vPCBD001NREFCBDNTFSERIE'},{av:'AV15pCBD001NREFCbdNtfNumero',fld:'vPCBD001NREFCBDNTFNUMERO'},{av:'AV16pCBD001NREFCbdrefseq',fld:'vPCBD001NREFCBDREFSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001NREFCbdEmpCodigo',fld:'vCCBD001NREFCBDEMPCODIGO'},{av:'AV7cCBD001NREFCbdNtfSerie',fld:'vCCBD001NREFCBDNTFSERIE'},{av:'AV8cCBD001NREFCbdNtfNumero',fld:'vCCBD001NREFCBDNTFNUMERO'},{av:'AV9cCBD001NREFCbdrefseq',fld:'vCCBD001NREFCBDREFSEQ'},{av:'AV10cCBD001NREFCbdrefNFe',fld:'vCCBD001NREFCBDREFNFE'},{av:'AV11cCBD001NREFCbdcUF_refNFE',fld:'vCCBD001NREFCBDCUF_REFNFE'},{av:'AV12cCBD001NREFCbdAAMM',fld:'vCCBD001NREFCBDAAMM'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001NREFCbdEmpCodigo',fld:'vCCBD001NREFCBDEMPCODIGO'},{av:'AV7cCBD001NREFCbdNtfSerie',fld:'vCCBD001NREFCBDNTFSERIE'},{av:'AV8cCBD001NREFCbdNtfNumero',fld:'vCCBD001NREFCBDNTFNUMERO'},{av:'AV9cCBD001NREFCbdrefseq',fld:'vCCBD001NREFCBDREFSEQ'},{av:'AV10cCBD001NREFCbdrefNFe',fld:'vCCBD001NREFCBDREFNFE'},{av:'AV11cCBD001NREFCbdcUF_refNFE',fld:'vCCBD001NREFCBDCUF_REFNFE'},{av:'AV12cCBD001NREFCbdAAMM',fld:'vCCBD001NREFCBDAAMM'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001NREFCbdEmpCodigo',fld:'vCCBD001NREFCBDEMPCODIGO'},{av:'AV7cCBD001NREFCbdNtfSerie',fld:'vCCBD001NREFCBDNTFSERIE'},{av:'AV8cCBD001NREFCbdNtfNumero',fld:'vCCBD001NREFCBDNTFNUMERO'},{av:'AV9cCBD001NREFCbdrefseq',fld:'vCCBD001NREFCBDREFSEQ'},{av:'AV10cCBD001NREFCbdrefNFe',fld:'vCCBD001NREFCBDREFNFE'},{av:'AV11cCBD001NREFCbdcUF_refNFE',fld:'vCCBD001NREFCBDCUF_REFNFE'},{av:'AV12cCBD001NREFCbdAAMM',fld:'vCCBD001NREFCBDAAMM'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001NREFCbdEmpCodigo',fld:'vCCBD001NREFCBDEMPCODIGO'},{av:'AV7cCBD001NREFCbdNtfSerie',fld:'vCCBD001NREFCBDNTFSERIE'},{av:'AV8cCBD001NREFCbdNtfNumero',fld:'vCCBD001NREFCBDNTFNUMERO'},{av:'AV9cCBD001NREFCbdrefseq',fld:'vCCBD001NREFCBDREFSEQ'},{av:'AV10cCBD001NREFCbdrefNFe',fld:'vCCBD001NREFCBDREFNFE'},{av:'AV11cCBD001NREFCbdcUF_refNFE',fld:'vCCBD001NREFCBDCUF_REFNFE'},{av:'AV12cCBD001NREFCbdAAMM',fld:'vCCBD001NREFCBDAAMM'}],[]];
   this.setVCMap("AV13pCBD001NREFCbdEmpCodigo", "vPCBD001NREFCBDEMPCODIGO", 0, "int");
   this.setVCMap("AV14pCBD001NREFCbdNtfSerie", "vPCBD001NREFCBDNTFSERIE", 0, "char");
   this.setVCMap("AV15pCBD001NREFCbdNtfNumero", "vPCBD001NREFCBDNTFNUMERO", 0, "int");
   this.setVCMap("AV16pCBD001NREFCbdrefseq", "vPCBD001NREFCBDREFSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0f30());