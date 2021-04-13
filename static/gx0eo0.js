/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:13.14
*/
gx.evt.autoSkip = false;
gx.define('gx0eo0', false, function () {
   this.ServerClass =  "gx0eo0" ;
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
      this.AV13pApuracaoAjusteEmpresaId=gx.fn.getControlValue("vPAPURACAOAJUSTEEMPRESAID") ;
      this.AV14pApuracaoAjusteFilialEmpId=gx.fn.getControlValue("vPAPURACAOAJUSTEFILIALEMPID") ;
      this.AV15pApuracaoAjusteFilialId=gx.fn.getIntegerValue("vPAPURACAOAJUSTEFILIALID",'.') ;
      this.AV16pApuracaoAjusteData=gx.fn.getDateValue("vPAPURACAOAJUSTEDATA") ;
      this.AV17pApuracaoAjusteFiscalCodigo=gx.fn.getControlValue("vPAPURACAOAJUSTEFISCALCODIGO") ;
      this.AV18pApuracaoAjusteDocSeq=gx.fn.getIntegerValue("vPAPURACAOAJUSTEDOCSEQ",'.') ;
   };
   this.e131t22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141t21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0eo0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6689,53,"APURACAOAJUSTEEMPRESAID","Empresa Apuração Ajuste","","ApuracaoAjusteEmpresaId","char",0,"px",10,10,"left",null,[],6689,"ApuracaoAjusteEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6690,54,"APURACAOAJUSTEFILIALEMPID","Empresa Filial","","ApuracaoAjusteFilialEmpId","char",0,"px",10,10,"left",null,[],6690,"ApuracaoAjusteFilialEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6691,55,"APURACAOAJUSTEFILIALID","Código Filial","","ApuracaoAjusteFilialId","int",0,"px",7,7,"right",null,[],6691,"ApuracaoAjusteFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6692,56,"APURACAOAJUSTEDATA","Data Apuração Ajuste","","ApuracaoAjusteData","date",0,"px",10,10,"right",null,[],6692,"ApuracaoAjusteData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6693,57,"APURACAOAJUSTEFISCALCODIGO","Código Ajuste Fiscal","","ApuracaoAjusteFiscalCodigo","char",0,"px",10,10,"left",null,[],6693,"ApuracaoAjusteFiscalCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6708,58,"APURACAOAJUSTEDOCSEQ","Sequência","","ApuracaoAjusteDocSeq","int",0,"px",4,4,"right",null,[],6708,"ApuracaoAjusteDocSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6694,59,"APURACAOAJUSTEDOCSAIDAEMPID","Empresa Saída","","ApuracaoAjusteDocSaidaEmpId","char",0,"px",10,10,"left",null,[],6694,"ApuracaoAjusteDocSaidaEmpId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAPURACAOAJUSTEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEEMPRESAID",gxz:"ZV6cApuracaoAjusteEmpresaId",gxold:"OV6cApuracaoAjusteEmpresaId",gxvar:"AV6cApuracaoAjusteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cApuracaoAjusteEmpresaId=Value},v2z:function(Value){gx.O.ZV6cApuracaoAjusteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEEMPRESAID",gx.O.AV6cApuracaoAjusteEmpresaId,0)},c2v:function(){gx.O.AV6cApuracaoAjusteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOAJUSTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAPURACAOAJUSTEFILIALEMPID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEFILIALEMPID",gxz:"ZV7cApuracaoAjusteFilialEmpId",gxold:"OV7cApuracaoAjusteFilialEmpId",gxvar:"AV7cApuracaoAjusteFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cApuracaoAjusteFilialEmpId=Value},v2z:function(Value){gx.O.ZV7cApuracaoAjusteFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEFILIALEMPID",gx.O.AV7cApuracaoAjusteFilialEmpId,0)},c2v:function(){gx.O.AV7cApuracaoAjusteFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOAJUSTEFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAPURACAOAJUSTEFILIALID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEFILIALID",gxz:"ZV8cApuracaoAjusteFilialId",gxold:"OV8cApuracaoAjusteFilialId",gxvar:"AV8cApuracaoAjusteFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cApuracaoAjusteFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cApuracaoAjusteFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEFILIALID",gx.O.AV8cApuracaoAjusteFilialId,0)},c2v:function(){gx.O.AV8cApuracaoAjusteFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPURACAOAJUSTEFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAPURACAOAJUSTEDATA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEDATA",gxz:"ZV9cApuracaoAjusteData",gxold:"OV9cApuracaoAjusteData",gxvar:"AV9cApuracaoAjusteData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cApuracaoAjusteData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cApuracaoAjusteData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEDATA",gx.O.AV9cApuracaoAjusteData,0)},c2v:function(){gx.O.AV9cApuracaoAjusteData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAPURACAOAJUSTEDATA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAPURACAOAJUSTEFISCALCODIGO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEFISCALCODIGO",gxz:"ZV10cApuracaoAjusteFiscalCodigo",gxold:"OV10cApuracaoAjusteFiscalCodigo",gxvar:"AV10cApuracaoAjusteFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cApuracaoAjusteFiscalCodigo=Value},v2z:function(Value){gx.O.ZV10cApuracaoAjusteFiscalCodigo=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEFISCALCODIGO",gx.O.AV10cApuracaoAjusteFiscalCodigo,0)},c2v:function(){gx.O.AV10cApuracaoAjusteFiscalCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOAJUSTEFISCALCODIGO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAPURACAOAJUSTEDOCSEQ", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEDOCSEQ",gxz:"ZV11cApuracaoAjusteDocSeq",gxold:"OV11cApuracaoAjusteDocSeq",gxvar:"AV11cApuracaoAjusteDocSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cApuracaoAjusteDocSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cApuracaoAjusteDocSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEDOCSEQ",gx.O.AV11cApuracaoAjusteDocSeq,0)},c2v:function(){gx.O.AV11cApuracaoAjusteDocSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPURACAOAJUSTEDOCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAPURACAOAJUSTEDOCSAIDAEMPID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOAJUSTEDOCSAIDAEMPID",gxz:"ZV12cApuracaoAjusteDocSaidaEmpId",gxold:"OV12cApuracaoAjusteDocSaidaEmpId",gxvar:"AV12cApuracaoAjusteDocSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cApuracaoAjusteDocSaidaEmpId=Value},v2z:function(Value){gx.O.ZV12cApuracaoAjusteDocSaidaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOAJUSTEDOCSAIDAEMPID",gx.O.AV12cApuracaoAjusteDocSaidaEmpId,0)},c2v:function(){gx.O.AV12cApuracaoAjusteDocSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOAJUSTEDOCSAIDAEMPID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEEMPRESAID",gxz:"Z6689ApuracaoAjusteEmpresaId",gxold:"O6689ApuracaoAjusteEmpresaId",gxvar:"A6689ApuracaoAjusteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6689ApuracaoAjusteEmpresaId=Value},v2z:function(Value){gx.O.Z6689ApuracaoAjusteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A6689ApuracaoAjusteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6689ApuracaoAjusteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOAJUSTEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEFILIALEMPID",gxz:"Z6690ApuracaoAjusteFilialEmpId",gxold:"O6690ApuracaoAjusteFilialEmpId",gxvar:"A6690ApuracaoAjusteFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6690ApuracaoAjusteFilialEmpId=Value},v2z:function(Value){gx.O.Z6690ApuracaoAjusteFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEFILIALEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A6690ApuracaoAjusteFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6690ApuracaoAjusteFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOAJUSTEFILIALEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEFILIALID",gxz:"Z6691ApuracaoAjusteFilialId",gxold:"O6691ApuracaoAjusteFilialId",gxvar:"A6691ApuracaoAjusteFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6691ApuracaoAjusteFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6691ApuracaoAjusteFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEFILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A6691ApuracaoAjusteFilialId,0)},c2v:function(){gx.O.A6691ApuracaoAjusteFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOAJUSTEFILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEDATA",gxz:"Z6692ApuracaoAjusteData",gxold:"O6692ApuracaoAjusteData",gxvar:"A6692ApuracaoAjusteData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6692ApuracaoAjusteData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6692ApuracaoAjusteData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A6692ApuracaoAjusteData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6692ApuracaoAjusteData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APURACAOAJUSTEDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEFISCALCODIGO",gxz:"Z6693ApuracaoAjusteFiscalCodigo",gxold:"O6693ApuracaoAjusteFiscalCodigo",gxvar:"A6693ApuracaoAjusteFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6693ApuracaoAjusteFiscalCodigo=Value},v2z:function(Value){gx.O.Z6693ApuracaoAjusteFiscalCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEFISCALCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A6693ApuracaoAjusteFiscalCodigo,0)},c2v:function(){gx.O.A6693ApuracaoAjusteFiscalCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOAJUSTEFISCALCODIGO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEDOCSEQ",gxz:"Z6708ApuracaoAjusteDocSeq",gxold:"O6708ApuracaoAjusteDocSeq",gxvar:"A6708ApuracaoAjusteDocSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6708ApuracaoAjusteDocSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6708ApuracaoAjusteDocSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEDOCSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A6708ApuracaoAjusteDocSeq,0)},c2v:function(){gx.O.A6708ApuracaoAjusteDocSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOAJUSTEDOCSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOAJUSTEDOCSAIDAEMPID",gxz:"Z6694ApuracaoAjusteDocSaidaEmpId",gxold:"O6694ApuracaoAjusteDocSaidaEmpId",gxvar:"A6694ApuracaoAjusteDocSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6694ApuracaoAjusteDocSaidaEmpId=Value},v2z:function(Value){gx.O.Z6694ApuracaoAjusteDocSaidaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOAJUSTEDOCSAIDAEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A6694ApuracaoAjusteDocSaidaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6694ApuracaoAjusteDocSaidaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOAJUSTEDOCSAIDAEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cApuracaoAjusteEmpresaId = "" ;
   this.ZV6cApuracaoAjusteEmpresaId = "" ;
   this.OV6cApuracaoAjusteEmpresaId = "" ;
   this.AV7cApuracaoAjusteFilialEmpId = "" ;
   this.ZV7cApuracaoAjusteFilialEmpId = "" ;
   this.OV7cApuracaoAjusteFilialEmpId = "" ;
   this.AV8cApuracaoAjusteFilialId = 0 ;
   this.ZV8cApuracaoAjusteFilialId = 0 ;
   this.OV8cApuracaoAjusteFilialId = 0 ;
   this.AV9cApuracaoAjusteData = gx.date.nullDate() ;
   this.ZV9cApuracaoAjusteData = gx.date.nullDate() ;
   this.OV9cApuracaoAjusteData = gx.date.nullDate() ;
   this.AV10cApuracaoAjusteFiscalCodigo = "" ;
   this.ZV10cApuracaoAjusteFiscalCodigo = "" ;
   this.OV10cApuracaoAjusteFiscalCodigo = "" ;
   this.AV11cApuracaoAjusteDocSeq = 0 ;
   this.ZV11cApuracaoAjusteDocSeq = 0 ;
   this.OV11cApuracaoAjusteDocSeq = 0 ;
   this.AV12cApuracaoAjusteDocSaidaEmpId = "" ;
   this.ZV12cApuracaoAjusteDocSaidaEmpId = "" ;
   this.OV12cApuracaoAjusteDocSaidaEmpId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6689ApuracaoAjusteEmpresaId = "" ;
   this.O6689ApuracaoAjusteEmpresaId = "" ;
   this.Z6690ApuracaoAjusteFilialEmpId = "" ;
   this.O6690ApuracaoAjusteFilialEmpId = "" ;
   this.Z6691ApuracaoAjusteFilialId = 0 ;
   this.O6691ApuracaoAjusteFilialId = 0 ;
   this.Z6692ApuracaoAjusteData = gx.date.nullDate() ;
   this.O6692ApuracaoAjusteData = gx.date.nullDate() ;
   this.Z6693ApuracaoAjusteFiscalCodigo = "" ;
   this.O6693ApuracaoAjusteFiscalCodigo = "" ;
   this.Z6708ApuracaoAjusteDocSeq = 0 ;
   this.O6708ApuracaoAjusteDocSeq = 0 ;
   this.Z6694ApuracaoAjusteDocSaidaEmpId = "" ;
   this.O6694ApuracaoAjusteDocSaidaEmpId = "" ;
   this.AV6cApuracaoAjusteEmpresaId = "" ;
   this.AV7cApuracaoAjusteFilialEmpId = "" ;
   this.AV8cApuracaoAjusteFilialId = 0 ;
   this.AV9cApuracaoAjusteData = gx.date.nullDate() ;
   this.AV10cApuracaoAjusteFiscalCodigo = "" ;
   this.AV11cApuracaoAjusteDocSeq = 0 ;
   this.AV12cApuracaoAjusteDocSaidaEmpId = "" ;
   this.AV13pApuracaoAjusteEmpresaId = "" ;
   this.AV14pApuracaoAjusteFilialEmpId = "" ;
   this.AV15pApuracaoAjusteFilialId = 0 ;
   this.AV16pApuracaoAjusteData = gx.date.nullDate() ;
   this.AV17pApuracaoAjusteFiscalCodigo = "" ;
   this.AV18pApuracaoAjusteDocSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A6689ApuracaoAjusteEmpresaId = "" ;
   this.A6690ApuracaoAjusteFilialEmpId = "" ;
   this.A6691ApuracaoAjusteFilialId = 0 ;
   this.A6692ApuracaoAjusteData = gx.date.nullDate() ;
   this.A6693ApuracaoAjusteFiscalCodigo = "" ;
   this.A6708ApuracaoAjusteDocSeq = 0 ;
   this.A6694ApuracaoAjusteDocSaidaEmpId = "" ;
   this.Events = {"e131t22_client": ["ENTER", true] ,"e141t21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoAjusteEmpresaId',fld:'vCAPURACAOAJUSTEEMPRESAID'},{av:'AV7cApuracaoAjusteFilialEmpId',fld:'vCAPURACAOAJUSTEFILIALEMPID'},{av:'AV8cApuracaoAjusteFilialId',fld:'vCAPURACAOAJUSTEFILIALID'},{av:'AV9cApuracaoAjusteData',fld:'vCAPURACAOAJUSTEDATA'},{av:'AV10cApuracaoAjusteFiscalCodigo',fld:'vCAPURACAOAJUSTEFISCALCODIGO'},{av:'AV11cApuracaoAjusteDocSeq',fld:'vCAPURACAOAJUSTEDOCSEQ'},{av:'AV12cApuracaoAjusteDocSaidaEmpId',fld:'vCAPURACAOAJUSTEDOCSAIDAEMPID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6689ApuracaoAjusteEmpresaId',fld:'APURACAOAJUSTEEMPRESAID'},{av:'A6690ApuracaoAjusteFilialEmpId',fld:'APURACAOAJUSTEFILIALEMPID'},{av:'A6691ApuracaoAjusteFilialId',fld:'APURACAOAJUSTEFILIALID'},{av:'A6692ApuracaoAjusteData',fld:'APURACAOAJUSTEDATA'},{av:'A6693ApuracaoAjusteFiscalCodigo',fld:'APURACAOAJUSTEFISCALCODIGO'},{av:'A6708ApuracaoAjusteDocSeq',fld:'APURACAOAJUSTEDOCSEQ'}],[{av:'AV13pApuracaoAjusteEmpresaId',fld:'vPAPURACAOAJUSTEEMPRESAID'},{av:'AV14pApuracaoAjusteFilialEmpId',fld:'vPAPURACAOAJUSTEFILIALEMPID'},{av:'AV15pApuracaoAjusteFilialId',fld:'vPAPURACAOAJUSTEFILIALID'},{av:'AV16pApuracaoAjusteData',fld:'vPAPURACAOAJUSTEDATA'},{av:'AV17pApuracaoAjusteFiscalCodigo',fld:'vPAPURACAOAJUSTEFISCALCODIGO'},{av:'AV18pApuracaoAjusteDocSeq',fld:'vPAPURACAOAJUSTEDOCSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoAjusteEmpresaId',fld:'vCAPURACAOAJUSTEEMPRESAID'},{av:'AV7cApuracaoAjusteFilialEmpId',fld:'vCAPURACAOAJUSTEFILIALEMPID'},{av:'AV8cApuracaoAjusteFilialId',fld:'vCAPURACAOAJUSTEFILIALID'},{av:'AV9cApuracaoAjusteData',fld:'vCAPURACAOAJUSTEDATA'},{av:'AV10cApuracaoAjusteFiscalCodigo',fld:'vCAPURACAOAJUSTEFISCALCODIGO'},{av:'AV11cApuracaoAjusteDocSeq',fld:'vCAPURACAOAJUSTEDOCSEQ'},{av:'AV12cApuracaoAjusteDocSaidaEmpId',fld:'vCAPURACAOAJUSTEDOCSAIDAEMPID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoAjusteEmpresaId',fld:'vCAPURACAOAJUSTEEMPRESAID'},{av:'AV7cApuracaoAjusteFilialEmpId',fld:'vCAPURACAOAJUSTEFILIALEMPID'},{av:'AV8cApuracaoAjusteFilialId',fld:'vCAPURACAOAJUSTEFILIALID'},{av:'AV9cApuracaoAjusteData',fld:'vCAPURACAOAJUSTEDATA'},{av:'AV10cApuracaoAjusteFiscalCodigo',fld:'vCAPURACAOAJUSTEFISCALCODIGO'},{av:'AV11cApuracaoAjusteDocSeq',fld:'vCAPURACAOAJUSTEDOCSEQ'},{av:'AV12cApuracaoAjusteDocSaidaEmpId',fld:'vCAPURACAOAJUSTEDOCSAIDAEMPID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoAjusteEmpresaId',fld:'vCAPURACAOAJUSTEEMPRESAID'},{av:'AV7cApuracaoAjusteFilialEmpId',fld:'vCAPURACAOAJUSTEFILIALEMPID'},{av:'AV8cApuracaoAjusteFilialId',fld:'vCAPURACAOAJUSTEFILIALID'},{av:'AV9cApuracaoAjusteData',fld:'vCAPURACAOAJUSTEDATA'},{av:'AV10cApuracaoAjusteFiscalCodigo',fld:'vCAPURACAOAJUSTEFISCALCODIGO'},{av:'AV11cApuracaoAjusteDocSeq',fld:'vCAPURACAOAJUSTEDOCSEQ'},{av:'AV12cApuracaoAjusteDocSaidaEmpId',fld:'vCAPURACAOAJUSTEDOCSAIDAEMPID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoAjusteEmpresaId',fld:'vCAPURACAOAJUSTEEMPRESAID'},{av:'AV7cApuracaoAjusteFilialEmpId',fld:'vCAPURACAOAJUSTEFILIALEMPID'},{av:'AV8cApuracaoAjusteFilialId',fld:'vCAPURACAOAJUSTEFILIALID'},{av:'AV9cApuracaoAjusteData',fld:'vCAPURACAOAJUSTEDATA'},{av:'AV10cApuracaoAjusteFiscalCodigo',fld:'vCAPURACAOAJUSTEFISCALCODIGO'},{av:'AV11cApuracaoAjusteDocSeq',fld:'vCAPURACAOAJUSTEDOCSEQ'},{av:'AV12cApuracaoAjusteDocSaidaEmpId',fld:'vCAPURACAOAJUSTEDOCSAIDAEMPID'}],[]];
   this.setVCMap("AV13pApuracaoAjusteEmpresaId", "vPAPURACAOAJUSTEEMPRESAID", 0, "char");
   this.setVCMap("AV14pApuracaoAjusteFilialEmpId", "vPAPURACAOAJUSTEFILIALEMPID", 0, "char");
   this.setVCMap("AV15pApuracaoAjusteFilialId", "vPAPURACAOAJUSTEFILIALID", 0, "int");
   this.setVCMap("AV16pApuracaoAjusteData", "vPAPURACAOAJUSTEDATA", 0, "date");
   this.setVCMap("AV17pApuracaoAjusteFiscalCodigo", "vPAPURACAOAJUSTEFISCALCODIGO", 0, "char");
   this.setVCMap("AV18pApuracaoAjusteDocSeq", "vPAPURACAOAJUSTEDOCSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0eo0());
