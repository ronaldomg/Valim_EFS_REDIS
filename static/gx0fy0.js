/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:28.86
*/
gx.evt.autoSkip = false;
gx.define('gx0fy0', false, function () {
   this.ServerClass =  "gx0fy0" ;
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
      this.AV13pFaturamentoComodatoId=gx.fn.getIntegerValue("vPFATURAMENTOCOMODATOID",'.') ;
   };
   this.e131u62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141u61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fy0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7596,53,"FATURAMENTOCOMODATOID","Identificador","","FaturamentoComodatoId","int",0,"px",8,8,"right",null,[],7596,"FaturamentoComodatoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7597,54,"FATURAMENTOCOMODATODATA","Data","Selecionar","FaturamentoComodatoData","date",0,"px",10,10,"right",null,[],7597,"FaturamentoComodatoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7598,55,"FATURAMENTOCOMODATOCLIENTEEMPI","Empresa Cliente","","FaturamentoComodatoClienteEmpI","char",0,"px",10,10,"left",null,[],7598,"FaturamentoComodatoClienteEmpI",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7599,56,"FATURAMENTOCOMODATOCLIENTEID","Cliente","","FaturamentoComodatoClienteId","int",0,"px",7,7,"right",null,[],7599,"FaturamentoComodatoClienteId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7605,57,"FATURAMENTOCOMODATOCONTADORINI","Contador Inicial","","FaturamentoComodatoContadorIni","int",0,"px",8,8,"right",null,[],7605,"FaturamentoComodatoContadorIni",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7606,58,"FATURAMENTOCOMODATOCONTADORFIN","Contador Final","","FaturamentoComodatoContadorFin","int",0,"px",8,8,"right",null,[],7606,"FaturamentoComodatoContadorFin",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7607,59,"FATURAMENTOCOMODATOFORMAPAGTO","Forma de Pagamento","","FaturamentoComodatoFormaPagto","svchar",0,"px",20,20,"left",null,[],7607,"FaturamentoComodatoFormaPagto",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7608,60,"FATURAMENTOCOMODATOVENCIMENTO","Vencimento","","FaturamentoComodatoVencimento","date",0,"px",10,10,"right",null,[],7608,"FaturamentoComodatoVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7610,61,"FATURAMENTOCOMODATOUSUARIOALT","Usuário de Alteração","","FaturamentoComodatoUsuarioAlt","char",0,"px",12,12,"left",null,[],7610,"FaturamentoComodatoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFATURAMENTOCOMODATOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOID",gxz:"ZV6cFaturamentoComodatoId",gxold:"OV6cFaturamentoComodatoId",gxvar:"AV6cFaturamentoComodatoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFaturamentoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cFaturamentoComodatoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOID",gx.O.AV6cFaturamentoComodatoId,0)},c2v:function(){gx.O.AV6cFaturamentoComodatoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFATURAMENTOCOMODATOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFATURAMENTOCOMODATODATA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATODATA",gxz:"ZV7cFaturamentoComodatoData",gxold:"OV7cFaturamentoComodatoData",gxvar:"AV7cFaturamentoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cFaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATODATA",gx.O.AV7cFaturamentoComodatoData,0)},c2v:function(){gx.O.AV7cFaturamentoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCFATURAMENTOCOMODATODATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFATURAMENTOCOMODATOCLIENTEEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOCLIENTEEMPID",gxz:"ZV8cFaturamentoComodatoClienteEmpId",gxold:"OV8cFaturamentoComodatoClienteEmpId",gxvar:"AV8cFaturamentoComodatoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFaturamentoComodatoClienteEmpId=Value},v2z:function(Value){gx.O.ZV8cFaturamentoComodatoClienteEmpId=Value},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOCLIENTEEMPID",gx.O.AV8cFaturamentoComodatoClienteEmpId,0)},c2v:function(){gx.O.AV8cFaturamentoComodatoClienteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCFATURAMENTOCOMODATOCLIENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFATURAMENTOCOMODATOCLIENTEID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOCLIENTEID",gxz:"ZV9cFaturamentoComodatoClienteId",gxold:"OV9cFaturamentoComodatoClienteId",gxvar:"AV9cFaturamentoComodatoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFaturamentoComodatoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cFaturamentoComodatoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOCLIENTEID",gx.O.AV9cFaturamentoComodatoClienteId,0)},c2v:function(){gx.O.AV9cFaturamentoComodatoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFATURAMENTOCOMODATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFATURAMENTOCOMODATOCONTADORINI", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOCONTADORINI",gxz:"ZV10cFaturamentoComodatoContadorIni",gxold:"OV10cFaturamentoComodatoContadorIni",gxvar:"AV10cFaturamentoComodatoContadorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFaturamentoComodatoContadorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cFaturamentoComodatoContadorIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOCONTADORINI",gx.O.AV10cFaturamentoComodatoContadorIni,0)},c2v:function(){gx.O.AV10cFaturamentoComodatoContadorIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFATURAMENTOCOMODATOCONTADORINI",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFATURAMENTOCOMODATOCONTADORFIN", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOCONTADORFIN",gxz:"ZV11cFaturamentoComodatoContadorFin",gxold:"OV11cFaturamentoComodatoContadorFin",gxvar:"AV11cFaturamentoComodatoContadorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFaturamentoComodatoContadorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cFaturamentoComodatoContadorFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOCONTADORFIN",gx.O.AV11cFaturamentoComodatoContadorFin,0)},c2v:function(){gx.O.AV11cFaturamentoComodatoContadorFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFATURAMENTOCOMODATOCONTADORFIN",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFATURAMENTOCOMODATOFORMAPAGTO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFATURAMENTOCOMODATOFORMAPAGTO",gxz:"ZV12cFaturamentoComodatoFormaPagto",gxold:"OV12cFaturamentoComodatoFormaPagto",gxvar:"AV12cFaturamentoComodatoFormaPagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cFaturamentoComodatoFormaPagto=Value},v2z:function(Value){gx.O.ZV12cFaturamentoComodatoFormaPagto=Value},v2c:function(){gx.fn.setControlValue("vCFATURAMENTOCOMODATOFORMAPAGTO",gx.O.AV12cFaturamentoComodatoFormaPagto,0)},c2v:function(){gx.O.AV12cFaturamentoComodatoFormaPagto=this.val()},val:function(){return gx.fn.getControlValue("vCFATURAMENTOCOMODATOFORMAPAGTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOID",gxz:"Z7596FaturamentoComodatoId",gxold:"O7596FaturamentoComodatoId",gxvar:"A7596FaturamentoComodatoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7596FaturamentoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7596FaturamentoComodatoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOID",row || gx.fn.currentGridRowImpl(51),gx.O.A7596FaturamentoComodatoId,0)},c2v:function(){gx.O.A7596FaturamentoComodatoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOCOMODATOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATODATA",gxz:"Z7597FaturamentoComodatoData",gxold:"O7597FaturamentoComodatoData",gxvar:"A7597FaturamentoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7597FaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7597FaturamentoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATODATA",row || gx.fn.currentGridRowImpl(51),gx.O.A7597FaturamentoComodatoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7597FaturamentoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FATURAMENTOCOMODATODATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEEMPI",gxz:"Z7598FaturamentoComodatoClienteEmpI",gxold:"O7598FaturamentoComodatoClienteEmpI",gxvar:"A7598FaturamentoComodatoClienteEmpI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7598FaturamentoComodatoClienteEmpI=Value},v2z:function(Value){gx.O.Z7598FaturamentoComodatoClienteEmpI=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOCLIENTEEMPI",row || gx.fn.currentGridRowImpl(51),gx.O.A7598FaturamentoComodatoClienteEmpI,0)},c2v:function(){gx.O.A7598FaturamentoComodatoClienteEmpI=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOCOMODATOCLIENTEEMPI",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCLIENTEID",gxz:"Z7599FaturamentoComodatoClienteId",gxold:"O7599FaturamentoComodatoClienteId",gxvar:"A7599FaturamentoComodatoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7599FaturamentoComodatoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7599FaturamentoComodatoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOCLIENTEID",row || gx.fn.currentGridRowImpl(51),gx.O.A7599FaturamentoComodatoClienteId,0)},c2v:function(){gx.O.A7599FaturamentoComodatoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOCOMODATOCLIENTEID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCONTADORINI",gxz:"Z7605FaturamentoComodatoContadorIni",gxold:"O7605FaturamentoComodatoContadorIni",gxvar:"A7605FaturamentoComodatoContadorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7605FaturamentoComodatoContadorIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7605FaturamentoComodatoContadorIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOCONTADORINI",row || gx.fn.currentGridRowImpl(51),gx.O.A7605FaturamentoComodatoContadorIni,0)},c2v:function(){gx.O.A7605FaturamentoComodatoContadorIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOCOMODATOCONTADORINI",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOCONTADORFIN",gxz:"Z7606FaturamentoComodatoContadorFin",gxold:"O7606FaturamentoComodatoContadorFin",gxvar:"A7606FaturamentoComodatoContadorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7606FaturamentoComodatoContadorFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7606FaturamentoComodatoContadorFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOCONTADORFIN",row || gx.fn.currentGridRowImpl(51),gx.O.A7606FaturamentoComodatoContadorFin,0)},c2v:function(){gx.O.A7606FaturamentoComodatoContadorFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FATURAMENTOCOMODATOCONTADORFIN",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOFORMAPAGTO",gxz:"Z7607FaturamentoComodatoFormaPagto",gxold:"O7607FaturamentoComodatoFormaPagto",gxvar:"A7607FaturamentoComodatoFormaPagto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7607FaturamentoComodatoFormaPagto=Value},v2z:function(Value){gx.O.Z7607FaturamentoComodatoFormaPagto=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOFORMAPAGTO",row || gx.fn.currentGridRowImpl(51),gx.O.A7607FaturamentoComodatoFormaPagto,0)},c2v:function(){gx.O.A7607FaturamentoComodatoFormaPagto=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOCOMODATOFORMAPAGTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOVENCIMENTO",gxz:"Z7608FaturamentoComodatoVencimento",gxold:"O7608FaturamentoComodatoVencimento",gxvar:"A7608FaturamentoComodatoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOVENCIMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A7608FaturamentoComodatoVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7608FaturamentoComodatoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FATURAMENTOCOMODATOVENCIMENTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATURAMENTOCOMODATOUSUARIOALT",gxz:"Z7610FaturamentoComodatoUsuarioAlt",gxold:"O7610FaturamentoComodatoUsuarioAlt",gxvar:"A7610FaturamentoComodatoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7610FaturamentoComodatoUsuarioAlt=Value},v2z:function(Value){gx.O.Z7610FaturamentoComodatoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("FATURAMENTOCOMODATOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A7610FaturamentoComodatoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7610FaturamentoComodatoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("FATURAMENTOCOMODATOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cFaturamentoComodatoId = 0 ;
   this.ZV6cFaturamentoComodatoId = 0 ;
   this.OV6cFaturamentoComodatoId = 0 ;
   this.AV7cFaturamentoComodatoData = gx.date.nullDate() ;
   this.ZV7cFaturamentoComodatoData = gx.date.nullDate() ;
   this.OV7cFaturamentoComodatoData = gx.date.nullDate() ;
   this.AV8cFaturamentoComodatoClienteEmpId = "" ;
   this.ZV8cFaturamentoComodatoClienteEmpId = "" ;
   this.OV8cFaturamentoComodatoClienteEmpId = "" ;
   this.AV9cFaturamentoComodatoClienteId = 0 ;
   this.ZV9cFaturamentoComodatoClienteId = 0 ;
   this.OV9cFaturamentoComodatoClienteId = 0 ;
   this.AV10cFaturamentoComodatoContadorIni = 0 ;
   this.ZV10cFaturamentoComodatoContadorIni = 0 ;
   this.OV10cFaturamentoComodatoContadorIni = 0 ;
   this.AV11cFaturamentoComodatoContadorFin = 0 ;
   this.ZV11cFaturamentoComodatoContadorFin = 0 ;
   this.OV11cFaturamentoComodatoContadorFin = 0 ;
   this.AV12cFaturamentoComodatoFormaPagto = "" ;
   this.ZV12cFaturamentoComodatoFormaPagto = "" ;
   this.OV12cFaturamentoComodatoFormaPagto = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7596FaturamentoComodatoId = 0 ;
   this.O7596FaturamentoComodatoId = 0 ;
   this.Z7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.O7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.Z7598FaturamentoComodatoClienteEmpI = "" ;
   this.O7598FaturamentoComodatoClienteEmpI = "" ;
   this.Z7599FaturamentoComodatoClienteId = 0 ;
   this.O7599FaturamentoComodatoClienteId = 0 ;
   this.Z7605FaturamentoComodatoContadorIni = 0 ;
   this.O7605FaturamentoComodatoContadorIni = 0 ;
   this.Z7606FaturamentoComodatoContadorFin = 0 ;
   this.O7606FaturamentoComodatoContadorFin = 0 ;
   this.Z7607FaturamentoComodatoFormaPagto = "" ;
   this.O7607FaturamentoComodatoFormaPagto = "" ;
   this.Z7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.O7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.Z7610FaturamentoComodatoUsuarioAlt = "" ;
   this.O7610FaturamentoComodatoUsuarioAlt = "" ;
   this.AV6cFaturamentoComodatoId = 0 ;
   this.AV7cFaturamentoComodatoData = gx.date.nullDate() ;
   this.AV8cFaturamentoComodatoClienteEmpId = "" ;
   this.AV9cFaturamentoComodatoClienteId = 0 ;
   this.AV10cFaturamentoComodatoContadorIni = 0 ;
   this.AV11cFaturamentoComodatoContadorFin = 0 ;
   this.AV12cFaturamentoComodatoFormaPagto = "" ;
   this.AV13pFaturamentoComodatoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7596FaturamentoComodatoId = 0 ;
   this.A7597FaturamentoComodatoData = gx.date.nullDate() ;
   this.A7598FaturamentoComodatoClienteEmpI = "" ;
   this.A7599FaturamentoComodatoClienteId = 0 ;
   this.A7605FaturamentoComodatoContadorIni = 0 ;
   this.A7606FaturamentoComodatoContadorFin = 0 ;
   this.A7607FaturamentoComodatoFormaPagto = "" ;
   this.A7608FaturamentoComodatoVencimento = gx.date.nullDate() ;
   this.A7610FaturamentoComodatoUsuarioAlt = "" ;
   this.Events = {"e131u62_client": ["ENTER", true] ,"e141u61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoComodatoId',fld:'vCFATURAMENTOCOMODATOID'},{av:'AV7cFaturamentoComodatoData',fld:'vCFATURAMENTOCOMODATODATA'},{av:'AV8cFaturamentoComodatoClienteEmpId',fld:'vCFATURAMENTOCOMODATOCLIENTEEMPID'},{av:'AV9cFaturamentoComodatoClienteId',fld:'vCFATURAMENTOCOMODATOCLIENTEID'},{av:'AV10cFaturamentoComodatoContadorIni',fld:'vCFATURAMENTOCOMODATOCONTADORINI'},{av:'AV11cFaturamentoComodatoContadorFin',fld:'vCFATURAMENTOCOMODATOCONTADORFIN'},{av:'AV12cFaturamentoComodatoFormaPagto',fld:'vCFATURAMENTOCOMODATOFORMAPAGTO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7596FaturamentoComodatoId',fld:'FATURAMENTOCOMODATOID'}],[{av:'AV13pFaturamentoComodatoId',fld:'vPFATURAMENTOCOMODATOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoComodatoId',fld:'vCFATURAMENTOCOMODATOID'},{av:'AV7cFaturamentoComodatoData',fld:'vCFATURAMENTOCOMODATODATA'},{av:'AV8cFaturamentoComodatoClienteEmpId',fld:'vCFATURAMENTOCOMODATOCLIENTEEMPID'},{av:'AV9cFaturamentoComodatoClienteId',fld:'vCFATURAMENTOCOMODATOCLIENTEID'},{av:'AV10cFaturamentoComodatoContadorIni',fld:'vCFATURAMENTOCOMODATOCONTADORINI'},{av:'AV11cFaturamentoComodatoContadorFin',fld:'vCFATURAMENTOCOMODATOCONTADORFIN'},{av:'AV12cFaturamentoComodatoFormaPagto',fld:'vCFATURAMENTOCOMODATOFORMAPAGTO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoComodatoId',fld:'vCFATURAMENTOCOMODATOID'},{av:'AV7cFaturamentoComodatoData',fld:'vCFATURAMENTOCOMODATODATA'},{av:'AV8cFaturamentoComodatoClienteEmpId',fld:'vCFATURAMENTOCOMODATOCLIENTEEMPID'},{av:'AV9cFaturamentoComodatoClienteId',fld:'vCFATURAMENTOCOMODATOCLIENTEID'},{av:'AV10cFaturamentoComodatoContadorIni',fld:'vCFATURAMENTOCOMODATOCONTADORINI'},{av:'AV11cFaturamentoComodatoContadorFin',fld:'vCFATURAMENTOCOMODATOCONTADORFIN'},{av:'AV12cFaturamentoComodatoFormaPagto',fld:'vCFATURAMENTOCOMODATOFORMAPAGTO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoComodatoId',fld:'vCFATURAMENTOCOMODATOID'},{av:'AV7cFaturamentoComodatoData',fld:'vCFATURAMENTOCOMODATODATA'},{av:'AV8cFaturamentoComodatoClienteEmpId',fld:'vCFATURAMENTOCOMODATOCLIENTEEMPID'},{av:'AV9cFaturamentoComodatoClienteId',fld:'vCFATURAMENTOCOMODATOCLIENTEID'},{av:'AV10cFaturamentoComodatoContadorIni',fld:'vCFATURAMENTOCOMODATOCONTADORINI'},{av:'AV11cFaturamentoComodatoContadorFin',fld:'vCFATURAMENTOCOMODATOCONTADORFIN'},{av:'AV12cFaturamentoComodatoFormaPagto',fld:'vCFATURAMENTOCOMODATOFORMAPAGTO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFaturamentoComodatoId',fld:'vCFATURAMENTOCOMODATOID'},{av:'AV7cFaturamentoComodatoData',fld:'vCFATURAMENTOCOMODATODATA'},{av:'AV8cFaturamentoComodatoClienteEmpId',fld:'vCFATURAMENTOCOMODATOCLIENTEEMPID'},{av:'AV9cFaturamentoComodatoClienteId',fld:'vCFATURAMENTOCOMODATOCLIENTEID'},{av:'AV10cFaturamentoComodatoContadorIni',fld:'vCFATURAMENTOCOMODATOCONTADORINI'},{av:'AV11cFaturamentoComodatoContadorFin',fld:'vCFATURAMENTOCOMODATOCONTADORFIN'},{av:'AV12cFaturamentoComodatoFormaPagto',fld:'vCFATURAMENTOCOMODATOFORMAPAGTO'}],[]];
   this.setVCMap("AV13pFaturamentoComodatoId", "vPFATURAMENTOCOMODATOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fy0());