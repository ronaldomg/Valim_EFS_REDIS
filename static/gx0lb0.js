/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:45:46.73
*/
gx.evt.autoSkip = false;
gx.define('gx0lb0', false, function () {
   this.ServerClass =  "gx0lb0" ;
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
      this.AV13pTipoClassFluxoEmpresaId=gx.fn.getControlValue("vPTIPOCLASSFLUXOEMPRESAID") ;
      this.AV14pTipoClassFluxoId=gx.fn.getIntegerValue("vPTIPOCLASSFLUXOID",'.') ;
      this.AV15pClassFluxoId=gx.fn.getControlValue("vPCLASSFLUXOID") ;
      this.AV16pClassFluxoSelecaoSeq=gx.fn.getIntegerValue("vPCLASSFLUXOSELECAOSEQ",'.') ;
      this.AV17pClassFluxoSelItemSeq=gx.fn.getIntegerValue("vPCLASSFLUXOSELITEMSEQ",'.') ;
   };
   this.e1326c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1426c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0lb0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10198,53,"TIPOCLASSFLUXOEMPRESAID","Tipo Class Fluxo Empresa Id","","TipoClassFluxoEmpresaId","char",0,"px",10,10,"left",null,[],10198,"TipoClassFluxoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10199,54,"TIPOCLASSFLUXOID","Tipo Class Fluxo Id","","TipoClassFluxoId","int",0,"px",4,4,"right",null,[],10199,"TipoClassFluxoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3288,55,"CLASSFLUXOID","Classificação","","ClassFluxoId","svchar",0,"px",10,10,"left",null,[],3288,"ClassFluxoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3293,56,"CLASSFLUXOSELECAOSEQ","Sequência Seleção","","ClassFluxoSelecaoSeq","int",0,"px",4,4,"right",null,[],3293,"ClassFluxoSelecaoSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3297,57,"CLASSFLUXOSELITEMSEQ","Sequência Seleção Item","","ClassFluxoSelItemSeq","int",0,"px",4,4,"right",null,[],3297,"ClassFluxoSelItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3298,58,"CLASSFLUXOSELITEMFILINI","Filial Inicial","Selecionar","ClassFluxoSelItemFilIni","int",0,"px",7,7,"right",null,[],3298,"ClassFluxoSelItemFilIni",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3299,59,"CLASSFLUXOSELITEMFILFIN","Filial Final","","ClassFluxoSelItemFilFin","int",0,"px",7,7,"right",null,[],3299,"ClassFluxoSelItemFilFin",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOCLASSFLUXOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCLASSFLUXOEMPRESAID",gxz:"ZV6cTipoClassFluxoEmpresaId",gxold:"OV6cTipoClassFluxoEmpresaId",gxvar:"AV6cTipoClassFluxoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoClassFluxoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoClassFluxoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCLASSFLUXOEMPRESAID",gx.O.AV6cTipoClassFluxoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoClassFluxoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCLASSFLUXOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOCLASSFLUXOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCLASSFLUXOID",gxz:"ZV7cTipoClassFluxoId",gxold:"OV7cTipoClassFluxoId",gxvar:"AV7cTipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOCLASSFLUXOID",gx.O.AV7cTipoClassFluxoId,0)},c2v:function(){gx.O.AV7cTipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCLASSFLUXOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSFLUXOID",gxz:"ZV8cClassFluxoId",gxold:"OV8cClassFluxoId",gxvar:"AV8cClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cClassFluxoId=Value},v2z:function(Value){gx.O.ZV8cClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCCLASSFLUXOID",gx.O.AV8cClassFluxoId,0)},c2v:function(){gx.O.AV8cClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCLASSFLUXOSELECAOSEQ", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSFLUXOSELECAOSEQ",gxz:"ZV9cClassFluxoSelecaoSeq",gxold:"OV9cClassFluxoSelecaoSeq",gxvar:"AV9cClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCLASSFLUXOSELECAOSEQ",gx.O.AV9cClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.AV9cClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCLASSFLUXOSELITEMSEQ", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSFLUXOSELITEMSEQ",gxz:"ZV10cClassFluxoSelItemSeq",gxold:"OV10cClassFluxoSelItemSeq",gxvar:"AV10cClassFluxoSelItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cClassFluxoSelItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cClassFluxoSelItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCLASSFLUXOSELITEMSEQ",gx.O.AV10cClassFluxoSelItemSeq,0)},c2v:function(){gx.O.AV10cClassFluxoSelItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCLASSFLUXOSELITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCLASSFLUXOSELITEMFILINI", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSFLUXOSELITEMFILINI",gxz:"ZV11cClassFluxoSelItemFilIni",gxold:"OV11cClassFluxoSelItemFilIni",gxvar:"AV11cClassFluxoSelItemFilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cClassFluxoSelItemFilIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cClassFluxoSelItemFilIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCLASSFLUXOSELITEMFILINI",gx.O.AV11cClassFluxoSelItemFilIni,0)},c2v:function(){gx.O.AV11cClassFluxoSelItemFilIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCLASSFLUXOSELITEMFILINI",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCLASSFLUXOSELITEMFILFIN", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSFLUXOSELITEMFILFIN",gxz:"ZV12cClassFluxoSelItemFilFin",gxold:"OV12cClassFluxoSelItemFilFin",gxvar:"AV12cClassFluxoSelItemFilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cClassFluxoSelItemFilFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cClassFluxoSelItemFilFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCLASSFLUXOSELITEMFILFIN",gx.O.AV12cClassFluxoSelItemFilFin,0)},c2v:function(){gx.O.AV12cClassFluxoSelItemFilFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCLASSFLUXOSELITEMFILFIN",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOEMPRESAID",gxz:"Z10198TipoClassFluxoEmpresaId",gxold:"O10198TipoClassFluxoEmpresaId",gxvar:"A10198TipoClassFluxoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10198TipoClassFluxoEmpresaId=Value},v2z:function(Value){gx.O.Z10198TipoClassFluxoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10198TipoClassFluxoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10198TipoClassFluxoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOID",gxz:"Z10199TipoClassFluxoId",gxold:"O10199TipoClassFluxoId",gxvar:"A10199TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10199TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10199TipoClassFluxoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10199TipoClassFluxoId,0)},c2v:function(){gx.O.A10199TipoClassFluxoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOID",gxz:"Z3288ClassFluxoId",gxold:"O3288ClassFluxoId",gxvar:"A3288ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3288ClassFluxoId=Value},v2z:function(Value){gx.O.Z3288ClassFluxoId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(51),gx.O.A3288ClassFluxoId,0)},c2v:function(){gx.O.A3288ClassFluxoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELECAOSEQ",gxz:"Z3293ClassFluxoSelecaoSeq",gxold:"O3293ClassFluxoSelecaoSeq",gxvar:"A3293ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3293ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A3293ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.A3293ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELECAOSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSEQ",gxz:"Z3297ClassFluxoSelItemSeq",gxold:"O3297ClassFluxoSelItemSeq",gxvar:"A3297ClassFluxoSelItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELITEMSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A3297ClassFluxoSelItemSeq,0)},c2v:function(){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELITEMSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILINI",gxz:"Z3298ClassFluxoSelItemFilIni",gxold:"O3298ClassFluxoSelItemFilIni",gxvar:"A3298ClassFluxoSelItemFilIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3298ClassFluxoSelItemFilIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3298ClassFluxoSelItemFilIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELITEMFILINI",row || gx.fn.currentGridRowImpl(51),gx.O.A3298ClassFluxoSelItemFilIni,0)},c2v:function(){gx.O.A3298ClassFluxoSelItemFilIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELITEMFILINI",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMFILFIN",gxz:"Z3299ClassFluxoSelItemFilFin",gxold:"O3299ClassFluxoSelItemFilFin",gxvar:"A3299ClassFluxoSelItemFilFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3299ClassFluxoSelItemFilFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3299ClassFluxoSelItemFilFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELITEMFILFIN",row || gx.fn.currentGridRowImpl(51),gx.O.A3299ClassFluxoSelItemFilFin,0)},c2v:function(){gx.O.A3299ClassFluxoSelItemFilFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELITEMFILFIN",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cTipoClassFluxoEmpresaId = "" ;
   this.ZV6cTipoClassFluxoEmpresaId = "" ;
   this.OV6cTipoClassFluxoEmpresaId = "" ;
   this.AV7cTipoClassFluxoId = 0 ;
   this.ZV7cTipoClassFluxoId = 0 ;
   this.OV7cTipoClassFluxoId = 0 ;
   this.AV8cClassFluxoId = "" ;
   this.ZV8cClassFluxoId = "" ;
   this.OV8cClassFluxoId = "" ;
   this.AV9cClassFluxoSelecaoSeq = 0 ;
   this.ZV9cClassFluxoSelecaoSeq = 0 ;
   this.OV9cClassFluxoSelecaoSeq = 0 ;
   this.AV10cClassFluxoSelItemSeq = 0 ;
   this.ZV10cClassFluxoSelItemSeq = 0 ;
   this.OV10cClassFluxoSelItemSeq = 0 ;
   this.AV11cClassFluxoSelItemFilIni = 0 ;
   this.ZV11cClassFluxoSelItemFilIni = 0 ;
   this.OV11cClassFluxoSelItemFilIni = 0 ;
   this.AV12cClassFluxoSelItemFilFin = 0 ;
   this.ZV12cClassFluxoSelItemFilFin = 0 ;
   this.OV12cClassFluxoSelItemFilFin = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10198TipoClassFluxoEmpresaId = "" ;
   this.O10198TipoClassFluxoEmpresaId = "" ;
   this.Z10199TipoClassFluxoId = 0 ;
   this.O10199TipoClassFluxoId = 0 ;
   this.Z3288ClassFluxoId = "" ;
   this.O3288ClassFluxoId = "" ;
   this.Z3293ClassFluxoSelecaoSeq = 0 ;
   this.O3293ClassFluxoSelecaoSeq = 0 ;
   this.Z3297ClassFluxoSelItemSeq = 0 ;
   this.O3297ClassFluxoSelItemSeq = 0 ;
   this.Z3298ClassFluxoSelItemFilIni = 0 ;
   this.O3298ClassFluxoSelItemFilIni = 0 ;
   this.Z3299ClassFluxoSelItemFilFin = 0 ;
   this.O3299ClassFluxoSelItemFilFin = 0 ;
   this.AV6cTipoClassFluxoEmpresaId = "" ;
   this.AV7cTipoClassFluxoId = 0 ;
   this.AV8cClassFluxoId = "" ;
   this.AV9cClassFluxoSelecaoSeq = 0 ;
   this.AV10cClassFluxoSelItemSeq = 0 ;
   this.AV11cClassFluxoSelItemFilIni = 0 ;
   this.AV12cClassFluxoSelItemFilFin = 0 ;
   this.AV13pTipoClassFluxoEmpresaId = "" ;
   this.AV14pTipoClassFluxoId = 0 ;
   this.AV15pClassFluxoId = "" ;
   this.AV16pClassFluxoSelecaoSeq = 0 ;
   this.AV17pClassFluxoSelItemSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.A3297ClassFluxoSelItemSeq = 0 ;
   this.A3298ClassFluxoSelItemFilIni = 0 ;
   this.A3299ClassFluxoSelItemFilFin = 0 ;
   this.Events = {"e1326c2_client": ["ENTER", true] ,"e1426c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoClassFluxoEmpresaId',fld:'vCTIPOCLASSFLUXOEMPRESAID'},{av:'AV7cTipoClassFluxoId',fld:'vCTIPOCLASSFLUXOID'},{av:'AV8cClassFluxoId',fld:'vCCLASSFLUXOID'},{av:'AV9cClassFluxoSelecaoSeq',fld:'vCCLASSFLUXOSELECAOSEQ'},{av:'AV10cClassFluxoSelItemSeq',fld:'vCCLASSFLUXOSELITEMSEQ'},{av:'AV11cClassFluxoSelItemFilIni',fld:'vCCLASSFLUXOSELITEMFILINI'},{av:'AV12cClassFluxoSelItemFilFin',fld:'vCCLASSFLUXOSELITEMFILFIN'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10198TipoClassFluxoEmpresaId',fld:'TIPOCLASSFLUXOEMPRESAID'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'A3288ClassFluxoId',fld:'CLASSFLUXOID'},{av:'A3293ClassFluxoSelecaoSeq',fld:'CLASSFLUXOSELECAOSEQ'},{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'}],[{av:'AV13pTipoClassFluxoEmpresaId',fld:'vPTIPOCLASSFLUXOEMPRESAID'},{av:'AV14pTipoClassFluxoId',fld:'vPTIPOCLASSFLUXOID'},{av:'AV15pClassFluxoId',fld:'vPCLASSFLUXOID'},{av:'AV16pClassFluxoSelecaoSeq',fld:'vPCLASSFLUXOSELECAOSEQ'},{av:'AV17pClassFluxoSelItemSeq',fld:'vPCLASSFLUXOSELITEMSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoClassFluxoEmpresaId',fld:'vCTIPOCLASSFLUXOEMPRESAID'},{av:'AV7cTipoClassFluxoId',fld:'vCTIPOCLASSFLUXOID'},{av:'AV8cClassFluxoId',fld:'vCCLASSFLUXOID'},{av:'AV9cClassFluxoSelecaoSeq',fld:'vCCLASSFLUXOSELECAOSEQ'},{av:'AV10cClassFluxoSelItemSeq',fld:'vCCLASSFLUXOSELITEMSEQ'},{av:'AV11cClassFluxoSelItemFilIni',fld:'vCCLASSFLUXOSELITEMFILINI'},{av:'AV12cClassFluxoSelItemFilFin',fld:'vCCLASSFLUXOSELITEMFILFIN'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoClassFluxoEmpresaId',fld:'vCTIPOCLASSFLUXOEMPRESAID'},{av:'AV7cTipoClassFluxoId',fld:'vCTIPOCLASSFLUXOID'},{av:'AV8cClassFluxoId',fld:'vCCLASSFLUXOID'},{av:'AV9cClassFluxoSelecaoSeq',fld:'vCCLASSFLUXOSELECAOSEQ'},{av:'AV10cClassFluxoSelItemSeq',fld:'vCCLASSFLUXOSELITEMSEQ'},{av:'AV11cClassFluxoSelItemFilIni',fld:'vCCLASSFLUXOSELITEMFILINI'},{av:'AV12cClassFluxoSelItemFilFin',fld:'vCCLASSFLUXOSELITEMFILFIN'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoClassFluxoEmpresaId',fld:'vCTIPOCLASSFLUXOEMPRESAID'},{av:'AV7cTipoClassFluxoId',fld:'vCTIPOCLASSFLUXOID'},{av:'AV8cClassFluxoId',fld:'vCCLASSFLUXOID'},{av:'AV9cClassFluxoSelecaoSeq',fld:'vCCLASSFLUXOSELECAOSEQ'},{av:'AV10cClassFluxoSelItemSeq',fld:'vCCLASSFLUXOSELITEMSEQ'},{av:'AV11cClassFluxoSelItemFilIni',fld:'vCCLASSFLUXOSELITEMFILINI'},{av:'AV12cClassFluxoSelItemFilFin',fld:'vCCLASSFLUXOSELITEMFILFIN'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoClassFluxoEmpresaId',fld:'vCTIPOCLASSFLUXOEMPRESAID'},{av:'AV7cTipoClassFluxoId',fld:'vCTIPOCLASSFLUXOID'},{av:'AV8cClassFluxoId',fld:'vCCLASSFLUXOID'},{av:'AV9cClassFluxoSelecaoSeq',fld:'vCCLASSFLUXOSELECAOSEQ'},{av:'AV10cClassFluxoSelItemSeq',fld:'vCCLASSFLUXOSELITEMSEQ'},{av:'AV11cClassFluxoSelItemFilIni',fld:'vCCLASSFLUXOSELITEMFILINI'},{av:'AV12cClassFluxoSelItemFilFin',fld:'vCCLASSFLUXOSELITEMFILFIN'}],[]];
   this.setVCMap("AV13pTipoClassFluxoEmpresaId", "vPTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoClassFluxoId", "vPTIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV15pClassFluxoId", "vPCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV16pClassFluxoSelecaoSeq", "vPCLASSFLUXOSELECAOSEQ", 0, "int");
   this.setVCMap("AV17pClassFluxoSelItemSeq", "vPCLASSFLUXOSELITEMSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0lb0());