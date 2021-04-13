/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:26.31
*/
gx.evt.autoSkip = false;
gx.define('gx0fw0', false, function () {
   this.ServerClass =  "gx0fw0" ;
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
      this.AV13pAuxiliarTrDvNovoEmpresaId=gx.fn.getControlValue("vPAUXILIARTRDVNOVOEMPRESAID") ;
      this.AV14pAuxiliarTrDvNovoTipo=gx.fn.getControlValue("vPAUXILIARTRDVNOVOTIPO") ;
      this.AV15pAuxiliarTrDvNovoNumero=gx.fn.getIntegerValue("vPAUXILIARTRDVNOVONUMERO",'.') ;
      this.AV16pAuxiliarTrDvNovoSeq=gx.fn.getIntegerValue("vPAUXILIARTRDVNOVOSEQ",'.') ;
   };
   this.e131u52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141u51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fw0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7544,53,"AUXILIARTRDVNOVOEMPRESAID","Auxiliar Tr Dv Novo Empresa Id","","AuxiliarTrDvNovoEmpresaId","char",0,"px",10,10,"left",null,[],7544,"AuxiliarTrDvNovoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7545,54,"AUXILIARTRDVNOVOTIPO","Auxiliar Tr Dv Novo Tipo","","AuxiliarTrDvNovoTipo","char",0,"px",1,1,"left",null,[],7545,"AuxiliarTrDvNovoTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7546,55,"AUXILIARTRDVNOVONUMERO","Auxiliar Tr Dv Novo Numero","","AuxiliarTrDvNovoNumero","int",0,"px",10,10,"right",null,[],7546,"AuxiliarTrDvNovoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7547,56,"AUXILIARTRDVNOVOSEQ","Auxiliar Tr Dv Novo Seq","","AuxiliarTrDvNovoSeq","int",0,"px",3,3,"right",null,[],7547,"AuxiliarTrDvNovoSeq",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAUXILIARTRDVNOVOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOEMPRESAID",gxz:"ZV6cAuxiliarTrDvNovoEmpresaId",gxold:"OV6cAuxiliarTrDvNovoEmpresaId",gxvar:"AV6cAuxiliarTrDvNovoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAuxiliarTrDvNovoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAuxiliarTrDvNovoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOEMPRESAID",gx.O.AV6cAuxiliarTrDvNovoEmpresaId,0)},c2v:function(){gx.O.AV6cAuxiliarTrDvNovoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAUXILIARTRDVNOVOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAUXILIARTRDVNOVOTIPO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOTIPO",gxz:"ZV7cAuxiliarTrDvNovoTipo",gxold:"OV7cAuxiliarTrDvNovoTipo",gxvar:"AV7cAuxiliarTrDvNovoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAuxiliarTrDvNovoTipo=Value},v2z:function(Value){gx.O.ZV7cAuxiliarTrDvNovoTipo=Value},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOTIPO",gx.O.AV7cAuxiliarTrDvNovoTipo,0)},c2v:function(){gx.O.AV7cAuxiliarTrDvNovoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCAUXILIARTRDVNOVOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAUXILIARTRDVNOVONUMERO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVONUMERO",gxz:"ZV8cAuxiliarTrDvNovoNumero",gxold:"OV8cAuxiliarTrDvNovoNumero",gxvar:"AV8cAuxiliarTrDvNovoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cAuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVONUMERO",gx.O.AV8cAuxiliarTrDvNovoNumero,0)},c2v:function(){gx.O.AV8cAuxiliarTrDvNovoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAUXILIARTRDVNOVONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAUXILIARTRDVNOVOSEQ", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOSEQ",gxz:"ZV9cAuxiliarTrDvNovoSeq",gxold:"OV9cAuxiliarTrDvNovoSeq",gxvar:"AV9cAuxiliarTrDvNovoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cAuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOSEQ",gx.O.AV9cAuxiliarTrDvNovoSeq,0)},c2v:function(){gx.O.AV9cAuxiliarTrDvNovoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAUXILIARTRDVNOVOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAUXILIARTRDVNOVOPRODEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOPRODEMPID",gxz:"ZV10cAuxiliarTrDvNovoProdEmpId",gxold:"OV10cAuxiliarTrDvNovoProdEmpId",gxvar:"AV10cAuxiliarTrDvNovoProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAuxiliarTrDvNovoProdEmpId=Value},v2z:function(Value){gx.O.ZV10cAuxiliarTrDvNovoProdEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOPRODEMPID",gx.O.AV10cAuxiliarTrDvNovoProdEmpId,0)},c2v:function(){gx.O.AV10cAuxiliarTrDvNovoProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAUXILIARTRDVNOVOPRODEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAUXILIARTRDVNOVOPRODID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOPRODID",gxz:"ZV11cAuxiliarTrDvNovoProdId",gxold:"OV11cAuxiliarTrDvNovoProdId",gxvar:"AV11cAuxiliarTrDvNovoProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAuxiliarTrDvNovoProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cAuxiliarTrDvNovoProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOPRODID",gx.O.AV11cAuxiliarTrDvNovoProdId,0)},c2v:function(){gx.O.AV11cAuxiliarTrDvNovoProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAUXILIARTRDVNOVOPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAUXILIARTRDVNOVOPRODLOTE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUXILIARTRDVNOVOPRODLOTE",gxz:"ZV12cAuxiliarTrDvNovoProdLote",gxold:"OV12cAuxiliarTrDvNovoProdLote",gxvar:"AV12cAuxiliarTrDvNovoProdLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAuxiliarTrDvNovoProdLote=Value},v2z:function(Value){gx.O.ZV12cAuxiliarTrDvNovoProdLote=Value},v2c:function(){gx.fn.setControlValue("vCAUXILIARTRDVNOVOPRODLOTE",gx.O.AV12cAuxiliarTrDvNovoProdLote,0)},c2v:function(){gx.O.AV12cAuxiliarTrDvNovoProdLote=this.val()},val:function(){return gx.fn.getControlValue("vCAUXILIARTRDVNOVOPRODLOTE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOEMPRESAID",gxz:"Z7544AuxiliarTrDvNovoEmpresaId",gxold:"O7544AuxiliarTrDvNovoEmpresaId",gxvar:"A7544AuxiliarTrDvNovoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7544AuxiliarTrDvNovoEmpresaId=Value},v2z:function(Value){gx.O.Z7544AuxiliarTrDvNovoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("AUXILIARTRDVNOVOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A7544AuxiliarTrDvNovoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7544AuxiliarTrDvNovoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("AUXILIARTRDVNOVOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOTIPO",gxz:"Z7545AuxiliarTrDvNovoTipo",gxold:"O7545AuxiliarTrDvNovoTipo",gxvar:"A7545AuxiliarTrDvNovoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7545AuxiliarTrDvNovoTipo=Value},v2z:function(Value){gx.O.Z7545AuxiliarTrDvNovoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("AUXILIARTRDVNOVOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A7545AuxiliarTrDvNovoTipo,0)},c2v:function(){gx.O.A7545AuxiliarTrDvNovoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("AUXILIARTRDVNOVOTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVONUMERO",gxz:"Z7546AuxiliarTrDvNovoNumero",gxold:"O7546AuxiliarTrDvNovoNumero",gxvar:"A7546AuxiliarTrDvNovoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7546AuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7546AuxiliarTrDvNovoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AUXILIARTRDVNOVONUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7546AuxiliarTrDvNovoNumero,0)},c2v:function(){gx.O.A7546AuxiliarTrDvNovoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AUXILIARTRDVNOVONUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUXILIARTRDVNOVOSEQ",gxz:"Z7547AuxiliarTrDvNovoSeq",gxold:"O7547AuxiliarTrDvNovoSeq",gxvar:"A7547AuxiliarTrDvNovoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7547AuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7547AuxiliarTrDvNovoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AUXILIARTRDVNOVOSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A7547AuxiliarTrDvNovoSeq,0)},c2v:function(){gx.O.A7547AuxiliarTrDvNovoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AUXILIARTRDVNOVOSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cAuxiliarTrDvNovoEmpresaId = "" ;
   this.ZV6cAuxiliarTrDvNovoEmpresaId = "" ;
   this.OV6cAuxiliarTrDvNovoEmpresaId = "" ;
   this.AV7cAuxiliarTrDvNovoTipo = "" ;
   this.ZV7cAuxiliarTrDvNovoTipo = "" ;
   this.OV7cAuxiliarTrDvNovoTipo = "" ;
   this.AV8cAuxiliarTrDvNovoNumero = 0 ;
   this.ZV8cAuxiliarTrDvNovoNumero = 0 ;
   this.OV8cAuxiliarTrDvNovoNumero = 0 ;
   this.AV9cAuxiliarTrDvNovoSeq = 0 ;
   this.ZV9cAuxiliarTrDvNovoSeq = 0 ;
   this.OV9cAuxiliarTrDvNovoSeq = 0 ;
   this.AV10cAuxiliarTrDvNovoProdEmpId = "" ;
   this.ZV10cAuxiliarTrDvNovoProdEmpId = "" ;
   this.OV10cAuxiliarTrDvNovoProdEmpId = "" ;
   this.AV11cAuxiliarTrDvNovoProdId = 0 ;
   this.ZV11cAuxiliarTrDvNovoProdId = 0 ;
   this.OV11cAuxiliarTrDvNovoProdId = 0 ;
   this.AV12cAuxiliarTrDvNovoProdLote = "" ;
   this.ZV12cAuxiliarTrDvNovoProdLote = "" ;
   this.OV12cAuxiliarTrDvNovoProdLote = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.O7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.Z7545AuxiliarTrDvNovoTipo = "" ;
   this.O7545AuxiliarTrDvNovoTipo = "" ;
   this.Z7546AuxiliarTrDvNovoNumero = 0 ;
   this.O7546AuxiliarTrDvNovoNumero = 0 ;
   this.Z7547AuxiliarTrDvNovoSeq = 0 ;
   this.O7547AuxiliarTrDvNovoSeq = 0 ;
   this.AV6cAuxiliarTrDvNovoEmpresaId = "" ;
   this.AV7cAuxiliarTrDvNovoTipo = "" ;
   this.AV8cAuxiliarTrDvNovoNumero = 0 ;
   this.AV9cAuxiliarTrDvNovoSeq = 0 ;
   this.AV10cAuxiliarTrDvNovoProdEmpId = "" ;
   this.AV11cAuxiliarTrDvNovoProdId = 0 ;
   this.AV12cAuxiliarTrDvNovoProdLote = "" ;
   this.AV13pAuxiliarTrDvNovoEmpresaId = "" ;
   this.AV14pAuxiliarTrDvNovoTipo = "" ;
   this.AV15pAuxiliarTrDvNovoNumero = 0 ;
   this.AV16pAuxiliarTrDvNovoSeq = 0 ;
   this.A7512AuxiliarTrDvNovoProdLote = "" ;
   this.A7511AuxiliarTrDvNovoProdId = 0 ;
   this.A7510AuxiliarTrDvNovoProdEmpId = "" ;
   this.AV5LinkSelection = "" ;
   this.A7544AuxiliarTrDvNovoEmpresaId = "" ;
   this.A7545AuxiliarTrDvNovoTipo = "" ;
   this.A7546AuxiliarTrDvNovoNumero = 0 ;
   this.A7547AuxiliarTrDvNovoSeq = 0 ;
   this.Events = {"e131u52_client": ["ENTER", true] ,"e141u51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAuxiliarTrDvNovoEmpresaId',fld:'vCAUXILIARTRDVNOVOEMPRESAID'},{av:'AV7cAuxiliarTrDvNovoTipo',fld:'vCAUXILIARTRDVNOVOTIPO'},{av:'AV8cAuxiliarTrDvNovoNumero',fld:'vCAUXILIARTRDVNOVONUMERO'},{av:'AV9cAuxiliarTrDvNovoSeq',fld:'vCAUXILIARTRDVNOVOSEQ'},{av:'AV10cAuxiliarTrDvNovoProdEmpId',fld:'vCAUXILIARTRDVNOVOPRODEMPID'},{av:'AV11cAuxiliarTrDvNovoProdId',fld:'vCAUXILIARTRDVNOVOPRODID'},{av:'AV12cAuxiliarTrDvNovoProdLote',fld:'vCAUXILIARTRDVNOVOPRODLOTE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7544AuxiliarTrDvNovoEmpresaId',fld:'AUXILIARTRDVNOVOEMPRESAID'},{av:'A7545AuxiliarTrDvNovoTipo',fld:'AUXILIARTRDVNOVOTIPO'},{av:'A7546AuxiliarTrDvNovoNumero',fld:'AUXILIARTRDVNOVONUMERO'},{av:'A7547AuxiliarTrDvNovoSeq',fld:'AUXILIARTRDVNOVOSEQ'}],[{av:'AV13pAuxiliarTrDvNovoEmpresaId',fld:'vPAUXILIARTRDVNOVOEMPRESAID'},{av:'AV14pAuxiliarTrDvNovoTipo',fld:'vPAUXILIARTRDVNOVOTIPO'},{av:'AV15pAuxiliarTrDvNovoNumero',fld:'vPAUXILIARTRDVNOVONUMERO'},{av:'AV16pAuxiliarTrDvNovoSeq',fld:'vPAUXILIARTRDVNOVOSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAuxiliarTrDvNovoEmpresaId',fld:'vCAUXILIARTRDVNOVOEMPRESAID'},{av:'AV7cAuxiliarTrDvNovoTipo',fld:'vCAUXILIARTRDVNOVOTIPO'},{av:'AV8cAuxiliarTrDvNovoNumero',fld:'vCAUXILIARTRDVNOVONUMERO'},{av:'AV9cAuxiliarTrDvNovoSeq',fld:'vCAUXILIARTRDVNOVOSEQ'},{av:'AV10cAuxiliarTrDvNovoProdEmpId',fld:'vCAUXILIARTRDVNOVOPRODEMPID'},{av:'AV11cAuxiliarTrDvNovoProdId',fld:'vCAUXILIARTRDVNOVOPRODID'},{av:'AV12cAuxiliarTrDvNovoProdLote',fld:'vCAUXILIARTRDVNOVOPRODLOTE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAuxiliarTrDvNovoEmpresaId',fld:'vCAUXILIARTRDVNOVOEMPRESAID'},{av:'AV7cAuxiliarTrDvNovoTipo',fld:'vCAUXILIARTRDVNOVOTIPO'},{av:'AV8cAuxiliarTrDvNovoNumero',fld:'vCAUXILIARTRDVNOVONUMERO'},{av:'AV9cAuxiliarTrDvNovoSeq',fld:'vCAUXILIARTRDVNOVOSEQ'},{av:'AV10cAuxiliarTrDvNovoProdEmpId',fld:'vCAUXILIARTRDVNOVOPRODEMPID'},{av:'AV11cAuxiliarTrDvNovoProdId',fld:'vCAUXILIARTRDVNOVOPRODID'},{av:'AV12cAuxiliarTrDvNovoProdLote',fld:'vCAUXILIARTRDVNOVOPRODLOTE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAuxiliarTrDvNovoEmpresaId',fld:'vCAUXILIARTRDVNOVOEMPRESAID'},{av:'AV7cAuxiliarTrDvNovoTipo',fld:'vCAUXILIARTRDVNOVOTIPO'},{av:'AV8cAuxiliarTrDvNovoNumero',fld:'vCAUXILIARTRDVNOVONUMERO'},{av:'AV9cAuxiliarTrDvNovoSeq',fld:'vCAUXILIARTRDVNOVOSEQ'},{av:'AV10cAuxiliarTrDvNovoProdEmpId',fld:'vCAUXILIARTRDVNOVOPRODEMPID'},{av:'AV11cAuxiliarTrDvNovoProdId',fld:'vCAUXILIARTRDVNOVOPRODID'},{av:'AV12cAuxiliarTrDvNovoProdLote',fld:'vCAUXILIARTRDVNOVOPRODLOTE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAuxiliarTrDvNovoEmpresaId',fld:'vCAUXILIARTRDVNOVOEMPRESAID'},{av:'AV7cAuxiliarTrDvNovoTipo',fld:'vCAUXILIARTRDVNOVOTIPO'},{av:'AV8cAuxiliarTrDvNovoNumero',fld:'vCAUXILIARTRDVNOVONUMERO'},{av:'AV9cAuxiliarTrDvNovoSeq',fld:'vCAUXILIARTRDVNOVOSEQ'},{av:'AV10cAuxiliarTrDvNovoProdEmpId',fld:'vCAUXILIARTRDVNOVOPRODEMPID'},{av:'AV11cAuxiliarTrDvNovoProdId',fld:'vCAUXILIARTRDVNOVOPRODID'},{av:'AV12cAuxiliarTrDvNovoProdLote',fld:'vCAUXILIARTRDVNOVOPRODLOTE'}],[]];
   this.setVCMap("AV13pAuxiliarTrDvNovoEmpresaId", "vPAUXILIARTRDVNOVOEMPRESAID", 0, "char");
   this.setVCMap("AV14pAuxiliarTrDvNovoTipo", "vPAUXILIARTRDVNOVOTIPO", 0, "char");
   this.setVCMap("AV15pAuxiliarTrDvNovoNumero", "vPAUXILIARTRDVNOVONUMERO", 0, "int");
   this.setVCMap("AV16pAuxiliarTrDvNovoSeq", "vPAUXILIARTRDVNOVOSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fw0());
