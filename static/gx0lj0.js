/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:5.26
*/
gx.evt.autoSkip = false;
gx.define('gx0lj0', false, function () {
   this.ServerClass =  "gx0lj0" ;
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
      this.AV13pCxaBcoRelFluxoTipo=gx.fn.getIntegerValue("vPCXABCORELFLUXOTIPO",'.') ;
      this.AV14pCxaBcoRelFluxoUsuarioId=gx.fn.getControlValue("vPCXABCORELFLUXOUSUARIOID") ;
      this.AV15pCxaBcoRelFluxoEmpresa=gx.fn.getControlValue("vPCXABCORELFLUXOEMPRESA") ;
      this.AV16pCxaBcoRelFluxoNumLanc=gx.fn.getIntegerValue("vPCXABCORELFLUXONUMLANC",'.') ;
      this.AV17pCxaBcoRelFluxoSeqRateio=gx.fn.getIntegerValue("vPCXABCORELFLUXOSEQRATEIO",'.') ;
   };
   this.e1326o2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1426o1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0lj0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10402,53,"CXABCORELFLUXOTIPO","Fluxo Tipo","","CxaBcoRelFluxoTipo","int",0,"px",4,4,"right",null,[],10402,"CxaBcoRelFluxoTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10403,54,"CXABCORELFLUXOUSUARIOID","Usuario Id","","CxaBcoRelFluxoUsuarioId","char",0,"px",12,12,"left",null,[],10403,"CxaBcoRelFluxoUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10404,55,"CXABCORELFLUXOEMPRESA","Fluxo Empresa","","CxaBcoRelFluxoEmpresa","char",0,"px",10,10,"left",null,[],10404,"CxaBcoRelFluxoEmpresa",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10405,56,"CXABCORELFLUXONUMLANC","Num Lanc","","CxaBcoRelFluxoNumLanc","int",0,"px",8,8,"right",null,[],10405,"CxaBcoRelFluxoNumLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10413,57,"CXABCORELFLUXODATA","Fluxo Data","Selecionar","CxaBcoRelFluxoData","date",0,"px",10,10,"right",null,[],10413,"CxaBcoRelFluxoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10406,58,"CXABCORELFLUXOSEQRATEIO","Cxa Bco Rel Fluxo Seq Rateio","","CxaBcoRelFluxoSeqRateio","int",0,"px",4,4,"right",null,[],10406,"CxaBcoRelFluxoSeqRateio",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCXABCORELFLUXOTIPO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXOTIPO",gxz:"ZV6cCxaBcoRelFluxoTipo",gxold:"OV6cCxaBcoRelFluxoTipo",gxvar:"AV6cCxaBcoRelFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCxaBcoRelFluxoTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCxaBcoRelFluxoTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXOTIPO",gx.O.AV6cCxaBcoRelFluxoTipo,0)},c2v:function(){gx.O.AV6cCxaBcoRelFluxoTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCXABCORELFLUXOTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCXABCORELFLUXOUSUARIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXOUSUARIOID",gxz:"ZV7cCxaBcoRelFluxoUsuarioId",gxold:"OV7cCxaBcoRelFluxoUsuarioId",gxvar:"AV7cCxaBcoRelFluxoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCxaBcoRelFluxoUsuarioId=Value},v2z:function(Value){gx.O.ZV7cCxaBcoRelFluxoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXOUSUARIOID",gx.O.AV7cCxaBcoRelFluxoUsuarioId,0)},c2v:function(){gx.O.AV7cCxaBcoRelFluxoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCCXABCORELFLUXOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCXABCORELFLUXOEMPRESA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXOEMPRESA",gxz:"ZV8cCxaBcoRelFluxoEmpresa",gxold:"OV8cCxaBcoRelFluxoEmpresa",gxvar:"AV8cCxaBcoRelFluxoEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCxaBcoRelFluxoEmpresa=Value},v2z:function(Value){gx.O.ZV8cCxaBcoRelFluxoEmpresa=Value},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXOEMPRESA",gx.O.AV8cCxaBcoRelFluxoEmpresa,0)},c2v:function(){gx.O.AV8cCxaBcoRelFluxoEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vCCXABCORELFLUXOEMPRESA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCXABCORELFLUXONUMLANC", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXONUMLANC",gxz:"ZV9cCxaBcoRelFluxoNumLanc",gxold:"OV9cCxaBcoRelFluxoNumLanc",gxvar:"AV9cCxaBcoRelFluxoNumLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXONUMLANC",gx.O.AV9cCxaBcoRelFluxoNumLanc,0)},c2v:function(){gx.O.AV9cCxaBcoRelFluxoNumLanc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCXABCORELFLUXONUMLANC",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCXABCORELFLUXOSEQRATEIO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXOSEQRATEIO",gxz:"ZV10cCxaBcoRelFluxoSeqRateio",gxold:"OV10cCxaBcoRelFluxoSeqRateio",gxvar:"AV10cCxaBcoRelFluxoSeqRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cCxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXOSEQRATEIO",gx.O.AV10cCxaBcoRelFluxoSeqRateio,0)},c2v:function(){gx.O.AV10cCxaBcoRelFluxoSeqRateio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCXABCORELFLUXOSEQRATEIO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCXABCORELFLUXODATA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXODATA",gxz:"ZV11cCxaBcoRelFluxoData",gxold:"OV11cCxaBcoRelFluxoData",gxvar:"AV11cCxaBcoRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cCxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXODATA",gx.O.AV11cCxaBcoRelFluxoData,0)},c2v:function(){gx.O.AV11cCxaBcoRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCXABCORELFLUXODATA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCXABCORELFLUXOFILIAL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCXABCORELFLUXOFILIAL",gxz:"ZV12cCxaBcoRelFluxoFilial",gxold:"OV12cCxaBcoRelFluxoFilial",gxvar:"AV12cCxaBcoRelFluxoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCxaBcoRelFluxoFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCxaBcoRelFluxoFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCXABCORELFLUXOFILIAL",gx.O.AV12cCxaBcoRelFluxoFilial,0)},c2v:function(){gx.O.AV12cCxaBcoRelFluxoFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCXABCORELFLUXOFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOTIPO",gxz:"Z10402CxaBcoRelFluxoTipo",gxold:"O10402CxaBcoRelFluxoTipo",gxvar:"A10402CxaBcoRelFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10402CxaBcoRelFluxoTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10402CxaBcoRelFluxoTipo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A10402CxaBcoRelFluxoTipo,0)},c2v:function(){gx.O.A10402CxaBcoRelFluxoTipo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CXABCORELFLUXOTIPO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOUSUARIOID",gxz:"Z10403CxaBcoRelFluxoUsuarioId",gxold:"O10403CxaBcoRelFluxoUsuarioId",gxvar:"A10403CxaBcoRelFluxoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10403CxaBcoRelFluxoUsuarioId=Value},v2z:function(Value){gx.O.Z10403CxaBcoRelFluxoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXOUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10403CxaBcoRelFluxoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10403CxaBcoRelFluxoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CXABCORELFLUXOUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOEMPRESA",gxz:"Z10404CxaBcoRelFluxoEmpresa",gxold:"O10404CxaBcoRelFluxoEmpresa",gxvar:"A10404CxaBcoRelFluxoEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10404CxaBcoRelFluxoEmpresa=Value},v2z:function(Value){gx.O.Z10404CxaBcoRelFluxoEmpresa=Value},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXOEMPRESA",row || gx.fn.currentGridRowImpl(51),gx.O.A10404CxaBcoRelFluxoEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10404CxaBcoRelFluxoEmpresa=this.val()},val:function(row){return gx.fn.getGridControlValue("CXABCORELFLUXOEMPRESA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXONUMLANC",gxz:"Z10405CxaBcoRelFluxoNumLanc",gxold:"O10405CxaBcoRelFluxoNumLanc",gxvar:"A10405CxaBcoRelFluxoNumLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10405CxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10405CxaBcoRelFluxoNumLanc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXONUMLANC",row || gx.fn.currentGridRowImpl(51),gx.O.A10405CxaBcoRelFluxoNumLanc,0)},c2v:function(){gx.O.A10405CxaBcoRelFluxoNumLanc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CXABCORELFLUXONUMLANC",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXODATA",gxz:"Z10413CxaBcoRelFluxoData",gxold:"O10413CxaBcoRelFluxoData",gxvar:"A10413CxaBcoRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXODATA",row || gx.fn.currentGridRowImpl(51),gx.O.A10413CxaBcoRelFluxoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10413CxaBcoRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CXABCORELFLUXODATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CXABCORELFLUXOSEQRATEIO",gxz:"Z10406CxaBcoRelFluxoSeqRateio",gxold:"O10406CxaBcoRelFluxoSeqRateio",gxvar:"A10406CxaBcoRelFluxoSeqRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10406CxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10406CxaBcoRelFluxoSeqRateio=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CXABCORELFLUXOSEQRATEIO",row || gx.fn.currentGridRowImpl(51),gx.O.A10406CxaBcoRelFluxoSeqRateio,0)},c2v:function(){gx.O.A10406CxaBcoRelFluxoSeqRateio=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CXABCORELFLUXOSEQRATEIO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cCxaBcoRelFluxoTipo = 0 ;
   this.ZV6cCxaBcoRelFluxoTipo = 0 ;
   this.OV6cCxaBcoRelFluxoTipo = 0 ;
   this.AV7cCxaBcoRelFluxoUsuarioId = "" ;
   this.ZV7cCxaBcoRelFluxoUsuarioId = "" ;
   this.OV7cCxaBcoRelFluxoUsuarioId = "" ;
   this.AV8cCxaBcoRelFluxoEmpresa = "" ;
   this.ZV8cCxaBcoRelFluxoEmpresa = "" ;
   this.OV8cCxaBcoRelFluxoEmpresa = "" ;
   this.AV9cCxaBcoRelFluxoNumLanc = 0 ;
   this.ZV9cCxaBcoRelFluxoNumLanc = 0 ;
   this.OV9cCxaBcoRelFluxoNumLanc = 0 ;
   this.AV10cCxaBcoRelFluxoSeqRateio = 0 ;
   this.ZV10cCxaBcoRelFluxoSeqRateio = 0 ;
   this.OV10cCxaBcoRelFluxoSeqRateio = 0 ;
   this.AV11cCxaBcoRelFluxoData = gx.date.nullDate() ;
   this.ZV11cCxaBcoRelFluxoData = gx.date.nullDate() ;
   this.OV11cCxaBcoRelFluxoData = gx.date.nullDate() ;
   this.AV12cCxaBcoRelFluxoFilial = 0 ;
   this.ZV12cCxaBcoRelFluxoFilial = 0 ;
   this.OV12cCxaBcoRelFluxoFilial = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10402CxaBcoRelFluxoTipo = 0 ;
   this.O10402CxaBcoRelFluxoTipo = 0 ;
   this.Z10403CxaBcoRelFluxoUsuarioId = "" ;
   this.O10403CxaBcoRelFluxoUsuarioId = "" ;
   this.Z10404CxaBcoRelFluxoEmpresa = "" ;
   this.O10404CxaBcoRelFluxoEmpresa = "" ;
   this.Z10405CxaBcoRelFluxoNumLanc = 0 ;
   this.O10405CxaBcoRelFluxoNumLanc = 0 ;
   this.Z10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.O10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.Z10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.O10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.AV6cCxaBcoRelFluxoTipo = 0 ;
   this.AV7cCxaBcoRelFluxoUsuarioId = "" ;
   this.AV8cCxaBcoRelFluxoEmpresa = "" ;
   this.AV9cCxaBcoRelFluxoNumLanc = 0 ;
   this.AV10cCxaBcoRelFluxoSeqRateio = 0 ;
   this.AV11cCxaBcoRelFluxoData = gx.date.nullDate() ;
   this.AV12cCxaBcoRelFluxoFilial = 0 ;
   this.AV13pCxaBcoRelFluxoTipo = 0 ;
   this.AV14pCxaBcoRelFluxoUsuarioId = "" ;
   this.AV15pCxaBcoRelFluxoEmpresa = "" ;
   this.AV16pCxaBcoRelFluxoNumLanc = 0 ;
   this.AV17pCxaBcoRelFluxoSeqRateio = 0 ;
   this.A10425CxaBcoRelFluxoFilial = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10402CxaBcoRelFluxoTipo = 0 ;
   this.A10403CxaBcoRelFluxoUsuarioId = "" ;
   this.A10404CxaBcoRelFluxoEmpresa = "" ;
   this.A10405CxaBcoRelFluxoNumLanc = 0 ;
   this.A10413CxaBcoRelFluxoData = gx.date.nullDate() ;
   this.A10406CxaBcoRelFluxoSeqRateio = 0 ;
   this.Events = {"e1326o2_client": ["ENTER", true] ,"e1426o1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCxaBcoRelFluxoTipo',fld:'vCCXABCORELFLUXOTIPO'},{av:'AV7cCxaBcoRelFluxoUsuarioId',fld:'vCCXABCORELFLUXOUSUARIOID'},{av:'AV8cCxaBcoRelFluxoEmpresa',fld:'vCCXABCORELFLUXOEMPRESA'},{av:'AV9cCxaBcoRelFluxoNumLanc',fld:'vCCXABCORELFLUXONUMLANC'},{av:'AV10cCxaBcoRelFluxoSeqRateio',fld:'vCCXABCORELFLUXOSEQRATEIO'},{av:'AV11cCxaBcoRelFluxoData',fld:'vCCXABCORELFLUXODATA'},{av:'AV12cCxaBcoRelFluxoFilial',fld:'vCCXABCORELFLUXOFILIAL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10402CxaBcoRelFluxoTipo',fld:'CXABCORELFLUXOTIPO'},{av:'A10403CxaBcoRelFluxoUsuarioId',fld:'CXABCORELFLUXOUSUARIOID'},{av:'A10404CxaBcoRelFluxoEmpresa',fld:'CXABCORELFLUXOEMPRESA'},{av:'A10405CxaBcoRelFluxoNumLanc',fld:'CXABCORELFLUXONUMLANC'},{av:'A10406CxaBcoRelFluxoSeqRateio',fld:'CXABCORELFLUXOSEQRATEIO'}],[{av:'AV13pCxaBcoRelFluxoTipo',fld:'vPCXABCORELFLUXOTIPO'},{av:'AV14pCxaBcoRelFluxoUsuarioId',fld:'vPCXABCORELFLUXOUSUARIOID'},{av:'AV15pCxaBcoRelFluxoEmpresa',fld:'vPCXABCORELFLUXOEMPRESA'},{av:'AV16pCxaBcoRelFluxoNumLanc',fld:'vPCXABCORELFLUXONUMLANC'},{av:'AV17pCxaBcoRelFluxoSeqRateio',fld:'vPCXABCORELFLUXOSEQRATEIO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCxaBcoRelFluxoTipo',fld:'vCCXABCORELFLUXOTIPO'},{av:'AV7cCxaBcoRelFluxoUsuarioId',fld:'vCCXABCORELFLUXOUSUARIOID'},{av:'AV8cCxaBcoRelFluxoEmpresa',fld:'vCCXABCORELFLUXOEMPRESA'},{av:'AV9cCxaBcoRelFluxoNumLanc',fld:'vCCXABCORELFLUXONUMLANC'},{av:'AV10cCxaBcoRelFluxoSeqRateio',fld:'vCCXABCORELFLUXOSEQRATEIO'},{av:'AV11cCxaBcoRelFluxoData',fld:'vCCXABCORELFLUXODATA'},{av:'AV12cCxaBcoRelFluxoFilial',fld:'vCCXABCORELFLUXOFILIAL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCxaBcoRelFluxoTipo',fld:'vCCXABCORELFLUXOTIPO'},{av:'AV7cCxaBcoRelFluxoUsuarioId',fld:'vCCXABCORELFLUXOUSUARIOID'},{av:'AV8cCxaBcoRelFluxoEmpresa',fld:'vCCXABCORELFLUXOEMPRESA'},{av:'AV9cCxaBcoRelFluxoNumLanc',fld:'vCCXABCORELFLUXONUMLANC'},{av:'AV10cCxaBcoRelFluxoSeqRateio',fld:'vCCXABCORELFLUXOSEQRATEIO'},{av:'AV11cCxaBcoRelFluxoData',fld:'vCCXABCORELFLUXODATA'},{av:'AV12cCxaBcoRelFluxoFilial',fld:'vCCXABCORELFLUXOFILIAL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCxaBcoRelFluxoTipo',fld:'vCCXABCORELFLUXOTIPO'},{av:'AV7cCxaBcoRelFluxoUsuarioId',fld:'vCCXABCORELFLUXOUSUARIOID'},{av:'AV8cCxaBcoRelFluxoEmpresa',fld:'vCCXABCORELFLUXOEMPRESA'},{av:'AV9cCxaBcoRelFluxoNumLanc',fld:'vCCXABCORELFLUXONUMLANC'},{av:'AV10cCxaBcoRelFluxoSeqRateio',fld:'vCCXABCORELFLUXOSEQRATEIO'},{av:'AV11cCxaBcoRelFluxoData',fld:'vCCXABCORELFLUXODATA'},{av:'AV12cCxaBcoRelFluxoFilial',fld:'vCCXABCORELFLUXOFILIAL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCxaBcoRelFluxoTipo',fld:'vCCXABCORELFLUXOTIPO'},{av:'AV7cCxaBcoRelFluxoUsuarioId',fld:'vCCXABCORELFLUXOUSUARIOID'},{av:'AV8cCxaBcoRelFluxoEmpresa',fld:'vCCXABCORELFLUXOEMPRESA'},{av:'AV9cCxaBcoRelFluxoNumLanc',fld:'vCCXABCORELFLUXONUMLANC'},{av:'AV10cCxaBcoRelFluxoSeqRateio',fld:'vCCXABCORELFLUXOSEQRATEIO'},{av:'AV11cCxaBcoRelFluxoData',fld:'vCCXABCORELFLUXODATA'},{av:'AV12cCxaBcoRelFluxoFilial',fld:'vCCXABCORELFLUXOFILIAL'}],[]];
   this.setVCMap("AV13pCxaBcoRelFluxoTipo", "vPCXABCORELFLUXOTIPO", 0, "int");
   this.setVCMap("AV14pCxaBcoRelFluxoUsuarioId", "vPCXABCORELFLUXOUSUARIOID", 0, "char");
   this.setVCMap("AV15pCxaBcoRelFluxoEmpresa", "vPCXABCORELFLUXOEMPRESA", 0, "char");
   this.setVCMap("AV16pCxaBcoRelFluxoNumLanc", "vPCXABCORELFLUXONUMLANC", 0, "int");
   this.setVCMap("AV17pCxaBcoRelFluxoSeqRateio", "vPCXABCORELFLUXOSEQRATEIO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0lj0());
