/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:45:39.49
*/
gx.evt.autoSkip = false;
gx.define('gx0l80', false, function () {
   this.ServerClass =  "gx0l80" ;
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
      this.AV12pCBD001LACRESCbdEmpCodigo=gx.fn.getIntegerValue("vPCBD001LACRESCBDEMPCODIGO",'.') ;
      this.AV13pCBD001LACRESCbdNtfSerie=gx.fn.getControlValue("vPCBD001LACRESCBDNTFSERIE") ;
      this.AV14pCBD001LACRESCbdNtfNumero=gx.fn.getIntegerValue("vPCBD001LACRESCBDNTFNUMERO",'.') ;
      this.AV15pCBD001LACRESCbdnVol=gx.fn.getControlValue("vPCBD001LACRESCBDNVOL") ;
      this.AV16pCBD001LACRESCbdnLacre=gx.fn.getControlValue("vPCBD001LACRESCBDNLACRE") ;
      this.AV17pCBD001LACRESCbdSeqVol=gx.fn.getIntegerValue("vPCBD001LACRESCBDSEQVOL",'.') ;
   };
   this.e132632_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142631_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0l80",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7130,48,"CBD001LACRESCBDEMPCODIGO","Código da Empresa","","CBD001LACRESCbdEmpCodigo","int",0,"px",4,4,"right",null,[],7130,"CBD001LACRESCbdEmpCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7133,49,"CBD001LACRESCBDNTFSERIE","Série do Documento Fiscal","","CBD001LACRESCbdNtfSerie","char",0,"px",3,3,"left",null,[],7133,"CBD001LACRESCbdNtfSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7132,50,"CBD001LACRESCBDNTFNUMERO","Número do Documento Fiscal","","CBD001LACRESCbdNtfNumero","int",0,"px",9,9,"right",null,[],7132,"CBD001LACRESCbdNtfNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10187,51,"CBD001LACRESCBDSEQVOL","Seq Vol","Selecionar","CBD001LACRESCbdSeqVol","int",0,"px",4,4,"right",null,[],10187,"CBD001LACRESCbdSeqVol",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7134,52,"CBD001LACRESCBDNVOL","Numeração dos volumes transportados","","CBD001LACRESCbdnVol","char",0,"px",60,60,"left",null,[],7134,"CBD001LACRESCbdnVol",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7131,53,"CBD001LACRESCBDNLACRE","Número dos Lacres","","CBD001LACRESCbdnLacre","char",0,"px",60,60,"left",null,[],7131,"CBD001LACRESCbdnLacre",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCBD001LACRESCBDEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDEMPCODIGO",gxz:"ZV6cCBD001LACRESCbdEmpCodigo",gxold:"OV6cCBD001LACRESCbdEmpCodigo",gxvar:"AV6cCBD001LACRESCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDEMPCODIGO",gx.O.AV6cCBD001LACRESCbdEmpCodigo,0)},c2v:function(){gx.O.AV6cCBD001LACRESCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001LACRESCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCBD001LACRESCBDNTFSERIE", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDNTFSERIE",gxz:"ZV7cCBD001LACRESCbdNtfSerie",gxold:"OV7cCBD001LACRESCbdNtfSerie",gxvar:"AV7cCBD001LACRESCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCBD001LACRESCbdNtfSerie=Value},v2z:function(Value){gx.O.ZV7cCBD001LACRESCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDNTFSERIE",gx.O.AV7cCBD001LACRESCbdNtfSerie,0)},c2v:function(){gx.O.AV7cCBD001LACRESCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001LACRESCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCBD001LACRESCBDNTFNUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDNTFNUMERO",gxz:"ZV8cCBD001LACRESCbdNtfNumero",gxold:"OV8cCBD001LACRESCbdNtfNumero",gxvar:"AV8cCBD001LACRESCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDNTFNUMERO",gx.O.AV8cCBD001LACRESCbdNtfNumero,0)},c2v:function(){gx.O.AV8cCBD001LACRESCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001LACRESCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCBD001LACRESCBDNVOL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDNVOL",gxz:"ZV9cCBD001LACRESCbdnVol",gxold:"OV9cCBD001LACRESCbdnVol",gxvar:"AV9cCBD001LACRESCbdnVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCBD001LACRESCbdnVol=Value},v2z:function(Value){gx.O.ZV9cCBD001LACRESCbdnVol=Value},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDNVOL",gx.O.AV9cCBD001LACRESCbdnVol,0)},c2v:function(){gx.O.AV9cCBD001LACRESCbdnVol=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001LACRESCBDNVOL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCBD001LACRESCBDNLACRE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDNLACRE",gxz:"ZV10cCBD001LACRESCbdnLacre",gxold:"OV10cCBD001LACRESCbdnLacre",gxvar:"AV10cCBD001LACRESCbdnLacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCBD001LACRESCbdnLacre=Value},v2z:function(Value){gx.O.ZV10cCBD001LACRESCbdnLacre=Value},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDNLACRE",gx.O.AV10cCBD001LACRESCbdnLacre,0)},c2v:function(){gx.O.AV10cCBD001LACRESCbdnLacre=this.val()},val:function(){return gx.fn.getControlValue("vCCBD001LACRESCBDNLACRE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCBD001LACRESCBDSEQVOL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCBD001LACRESCBDSEQVOL",gxz:"ZV11cCBD001LACRESCbdSeqVol",gxold:"OV11cCBD001LACRESCbdSeqVol",gxvar:"AV11cCBD001LACRESCbdSeqVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCBD001LACRESCBDSEQVOL",gx.O.AV11cCBD001LACRESCbdSeqVol,0)},c2v:function(){gx.O.AV11cCBD001LACRESCbdSeqVol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCBD001LACRESCBDSEQVOL",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDEMPCODIGO",gxz:"Z7130CBD001LACRESCbdEmpCodigo",gxold:"O7130CBD001LACRESCbdEmpCodigo",gxvar:"A7130CBD001LACRESCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7130CBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7130CBD001LACRESCbdEmpCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A7130CBD001LACRESCbdEmpCodigo,0)},c2v:function(){gx.O.A7130CBD001LACRESCbdEmpCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001LACRESCBDEMPCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNTFSERIE",gxz:"Z7133CBD001LACRESCbdNtfSerie",gxold:"O7133CBD001LACRESCbdNtfSerie",gxvar:"A7133CBD001LACRESCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7133CBD001LACRESCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7133CBD001LACRESCbdNtfSerie=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDNTFSERIE",row || gx.fn.currentGridRowImpl(46),gx.O.A7133CBD001LACRESCbdNtfSerie,0)},c2v:function(){gx.O.A7133CBD001LACRESCbdNtfSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001LACRESCBDNTFSERIE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNTFNUMERO",gxz:"Z7132CBD001LACRESCbdNtfNumero",gxold:"O7132CBD001LACRESCbdNtfNumero",gxvar:"A7132CBD001LACRESCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7132CBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7132CBD001LACRESCbdNtfNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A7132CBD001LACRESCbdNtfNumero,0)},c2v:function(){gx.O.A7132CBD001LACRESCbdNtfNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001LACRESCBDNTFNUMERO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDSEQVOL",gxz:"Z10187CBD001LACRESCbdSeqVol",gxold:"O10187CBD001LACRESCbdSeqVol",gxvar:"A10187CBD001LACRESCbdSeqVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10187CBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10187CBD001LACRESCbdSeqVol=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDSEQVOL",row || gx.fn.currentGridRowImpl(46),gx.O.A10187CBD001LACRESCbdSeqVol,0)},c2v:function(){gx.O.A10187CBD001LACRESCbdSeqVol=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CBD001LACRESCBDSEQVOL",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNVOL",gxz:"Z7134CBD001LACRESCbdnVol",gxold:"O7134CBD001LACRESCbdnVol",gxvar:"A7134CBD001LACRESCbdnVol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7134CBD001LACRESCbdnVol=Value},v2z:function(Value){gx.O.Z7134CBD001LACRESCbdnVol=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDNVOL",row || gx.fn.currentGridRowImpl(46),gx.O.A7134CBD001LACRESCbdnVol,0)},c2v:function(){gx.O.A7134CBD001LACRESCbdnVol=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001LACRESCBDNVOL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CBD001LACRESCBDNLACRE",gxz:"Z7131CBD001LACRESCbdnLacre",gxold:"O7131CBD001LACRESCbdnLacre",gxvar:"A7131CBD001LACRESCbdnLacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7131CBD001LACRESCbdnLacre=Value},v2z:function(Value){gx.O.Z7131CBD001LACRESCbdnLacre=Value},v2c:function(row){gx.fn.setGridControlValue("CBD001LACRESCBDNLACRE",row || gx.fn.currentGridRowImpl(46),gx.O.A7131CBD001LACRESCbdnLacre,0)},c2v:function(){gx.O.A7131CBD001LACRESCbdnLacre=this.val()},val:function(row){return gx.fn.getGridControlValue("CBD001LACRESCBDNLACRE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cCBD001LACRESCbdEmpCodigo = 0 ;
   this.ZV6cCBD001LACRESCbdEmpCodigo = 0 ;
   this.OV6cCBD001LACRESCbdEmpCodigo = 0 ;
   this.AV7cCBD001LACRESCbdNtfSerie = "" ;
   this.ZV7cCBD001LACRESCbdNtfSerie = "" ;
   this.OV7cCBD001LACRESCbdNtfSerie = "" ;
   this.AV8cCBD001LACRESCbdNtfNumero = 0 ;
   this.ZV8cCBD001LACRESCbdNtfNumero = 0 ;
   this.OV8cCBD001LACRESCbdNtfNumero = 0 ;
   this.AV9cCBD001LACRESCbdnVol = "" ;
   this.ZV9cCBD001LACRESCbdnVol = "" ;
   this.OV9cCBD001LACRESCbdnVol = "" ;
   this.AV10cCBD001LACRESCbdnLacre = "" ;
   this.ZV10cCBD001LACRESCbdnLacre = "" ;
   this.OV10cCBD001LACRESCbdnLacre = "" ;
   this.AV11cCBD001LACRESCbdSeqVol = 0 ;
   this.ZV11cCBD001LACRESCbdSeqVol = 0 ;
   this.OV11cCBD001LACRESCbdSeqVol = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.O7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.Z7133CBD001LACRESCbdNtfSerie = "" ;
   this.O7133CBD001LACRESCbdNtfSerie = "" ;
   this.Z7132CBD001LACRESCbdNtfNumero = 0 ;
   this.O7132CBD001LACRESCbdNtfNumero = 0 ;
   this.Z10187CBD001LACRESCbdSeqVol = 0 ;
   this.O10187CBD001LACRESCbdSeqVol = 0 ;
   this.Z7134CBD001LACRESCbdnVol = "" ;
   this.O7134CBD001LACRESCbdnVol = "" ;
   this.Z7131CBD001LACRESCbdnLacre = "" ;
   this.O7131CBD001LACRESCbdnLacre = "" ;
   this.AV6cCBD001LACRESCbdEmpCodigo = 0 ;
   this.AV7cCBD001LACRESCbdNtfSerie = "" ;
   this.AV8cCBD001LACRESCbdNtfNumero = 0 ;
   this.AV9cCBD001LACRESCbdnVol = "" ;
   this.AV10cCBD001LACRESCbdnLacre = "" ;
   this.AV11cCBD001LACRESCbdSeqVol = 0 ;
   this.AV12pCBD001LACRESCbdEmpCodigo = 0 ;
   this.AV13pCBD001LACRESCbdNtfSerie = "" ;
   this.AV14pCBD001LACRESCbdNtfNumero = 0 ;
   this.AV15pCBD001LACRESCbdnVol = "" ;
   this.AV16pCBD001LACRESCbdnLacre = "" ;
   this.AV17pCBD001LACRESCbdSeqVol = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7130CBD001LACRESCbdEmpCodigo = 0 ;
   this.A7133CBD001LACRESCbdNtfSerie = "" ;
   this.A7132CBD001LACRESCbdNtfNumero = 0 ;
   this.A10187CBD001LACRESCbdSeqVol = 0 ;
   this.A7134CBD001LACRESCbdnVol = "" ;
   this.A7131CBD001LACRESCbdnLacre = "" ;
   this.Events = {"e132632_client": ["ENTER", true] ,"e142631_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001LACRESCbdEmpCodigo',fld:'vCCBD001LACRESCBDEMPCODIGO'},{av:'AV7cCBD001LACRESCbdNtfSerie',fld:'vCCBD001LACRESCBDNTFSERIE'},{av:'AV8cCBD001LACRESCbdNtfNumero',fld:'vCCBD001LACRESCBDNTFNUMERO'},{av:'AV9cCBD001LACRESCbdnVol',fld:'vCCBD001LACRESCBDNVOL'},{av:'AV10cCBD001LACRESCbdnLacre',fld:'vCCBD001LACRESCBDNLACRE'},{av:'AV11cCBD001LACRESCbdSeqVol',fld:'vCCBD001LACRESCBDSEQVOL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7130CBD001LACRESCbdEmpCodigo',fld:'CBD001LACRESCBDEMPCODIGO'},{av:'A7133CBD001LACRESCbdNtfSerie',fld:'CBD001LACRESCBDNTFSERIE'},{av:'A7132CBD001LACRESCbdNtfNumero',fld:'CBD001LACRESCBDNTFNUMERO'},{av:'A7134CBD001LACRESCbdnVol',fld:'CBD001LACRESCBDNVOL'},{av:'A7131CBD001LACRESCbdnLacre',fld:'CBD001LACRESCBDNLACRE'},{av:'A10187CBD001LACRESCbdSeqVol',fld:'CBD001LACRESCBDSEQVOL'}],[{av:'AV12pCBD001LACRESCbdEmpCodigo',fld:'vPCBD001LACRESCBDEMPCODIGO'},{av:'AV13pCBD001LACRESCbdNtfSerie',fld:'vPCBD001LACRESCBDNTFSERIE'},{av:'AV14pCBD001LACRESCbdNtfNumero',fld:'vPCBD001LACRESCBDNTFNUMERO'},{av:'AV15pCBD001LACRESCbdnVol',fld:'vPCBD001LACRESCBDNVOL'},{av:'AV16pCBD001LACRESCbdnLacre',fld:'vPCBD001LACRESCBDNLACRE'},{av:'AV17pCBD001LACRESCbdSeqVol',fld:'vPCBD001LACRESCBDSEQVOL'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001LACRESCbdEmpCodigo',fld:'vCCBD001LACRESCBDEMPCODIGO'},{av:'AV7cCBD001LACRESCbdNtfSerie',fld:'vCCBD001LACRESCBDNTFSERIE'},{av:'AV8cCBD001LACRESCbdNtfNumero',fld:'vCCBD001LACRESCBDNTFNUMERO'},{av:'AV9cCBD001LACRESCbdnVol',fld:'vCCBD001LACRESCBDNVOL'},{av:'AV10cCBD001LACRESCbdnLacre',fld:'vCCBD001LACRESCBDNLACRE'},{av:'AV11cCBD001LACRESCbdSeqVol',fld:'vCCBD001LACRESCBDSEQVOL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001LACRESCbdEmpCodigo',fld:'vCCBD001LACRESCBDEMPCODIGO'},{av:'AV7cCBD001LACRESCbdNtfSerie',fld:'vCCBD001LACRESCBDNTFSERIE'},{av:'AV8cCBD001LACRESCbdNtfNumero',fld:'vCCBD001LACRESCBDNTFNUMERO'},{av:'AV9cCBD001LACRESCbdnVol',fld:'vCCBD001LACRESCBDNVOL'},{av:'AV10cCBD001LACRESCbdnLacre',fld:'vCCBD001LACRESCBDNLACRE'},{av:'AV11cCBD001LACRESCbdSeqVol',fld:'vCCBD001LACRESCBDSEQVOL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001LACRESCbdEmpCodigo',fld:'vCCBD001LACRESCBDEMPCODIGO'},{av:'AV7cCBD001LACRESCbdNtfSerie',fld:'vCCBD001LACRESCBDNTFSERIE'},{av:'AV8cCBD001LACRESCbdNtfNumero',fld:'vCCBD001LACRESCBDNTFNUMERO'},{av:'AV9cCBD001LACRESCbdnVol',fld:'vCCBD001LACRESCBDNVOL'},{av:'AV10cCBD001LACRESCbdnLacre',fld:'vCCBD001LACRESCBDNLACRE'},{av:'AV11cCBD001LACRESCbdSeqVol',fld:'vCCBD001LACRESCBDSEQVOL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCBD001LACRESCbdEmpCodigo',fld:'vCCBD001LACRESCBDEMPCODIGO'},{av:'AV7cCBD001LACRESCbdNtfSerie',fld:'vCCBD001LACRESCBDNTFSERIE'},{av:'AV8cCBD001LACRESCbdNtfNumero',fld:'vCCBD001LACRESCBDNTFNUMERO'},{av:'AV9cCBD001LACRESCbdnVol',fld:'vCCBD001LACRESCBDNVOL'},{av:'AV10cCBD001LACRESCbdnLacre',fld:'vCCBD001LACRESCBDNLACRE'},{av:'AV11cCBD001LACRESCbdSeqVol',fld:'vCCBD001LACRESCBDSEQVOL'}],[]];
   this.setVCMap("AV12pCBD001LACRESCbdEmpCodigo", "vPCBD001LACRESCBDEMPCODIGO", 0, "int");
   this.setVCMap("AV13pCBD001LACRESCbdNtfSerie", "vPCBD001LACRESCBDNTFSERIE", 0, "char");
   this.setVCMap("AV14pCBD001LACRESCbdNtfNumero", "vPCBD001LACRESCBDNTFNUMERO", 0, "int");
   this.setVCMap("AV15pCBD001LACRESCbdnVol", "vPCBD001LACRESCBDNVOL", 0, "char");
   this.setVCMap("AV16pCBD001LACRESCbdnLacre", "vPCBD001LACRESCBDNLACRE", 0, "char");
   this.setVCMap("AV17pCBD001LACRESCbdSeqVol", "vPCBD001LACRESCBDSEQVOL", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0l80());
