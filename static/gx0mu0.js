/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:28.77
*/
gx.evt.autoSkip = false;
gx.define('gx0mu0', false, function () {
   this.ServerClass =  "gx0mu0" ;
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
      this.AV13pSaidaItemComplementoEmpId=gx.fn.getControlValue("vPSAIDAITEMCOMPLEMENTOEMPID") ;
      this.AV14pSaidaItemComplementoId=gx.fn.getIntegerValue("vPSAIDAITEMCOMPLEMENTOID",'.') ;
      this.AV15pSaidaItemComplementoSeq=gx.fn.getIntegerValue("vPSAIDAITEMCOMPLEMENTOSEQ",'.') ;
   };
   this.e132cs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142cs1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0mu0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11193,53,"SAIDAITEMCOMPLEMENTOEMPID","Emp Id","","SaidaItemComplementoEmpId","char",0,"px",10,10,"left",null,[],11193,"SaidaItemComplementoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11194,54,"SAIDAITEMCOMPLEMENTOID","Complemento Id","","SaidaItemComplementoId","int",0,"px",10,10,"right",null,[],11194,"SaidaItemComplementoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11195,55,"SAIDAITEMCOMPLEMENTOSEQ","Complemento Seq","","SaidaItemComplementoSeq","int",0,"px",6,6,"right",null,[],11195,"SaidaItemComplementoSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11198,56,"SAIDAITEMCOMPLEMENTOFPGTOEMP","FPgto Emp","","SaidaItemComplementoFPgtoEmp","char",0,"px",10,10,"left",null,[],11198,"SaidaItemComplementoFPgtoEmp",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOEMPID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOEMPID",gxz:"ZV6cSaidaItemComplementoEmpId",gxold:"OV6cSaidaItemComplementoEmpId",gxvar:"AV6cSaidaItemComplementoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaItemComplementoEmpId=Value},v2z:function(Value){gx.O.ZV6cSaidaItemComplementoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOEMPID",gx.O.AV6cSaidaItemComplementoEmpId,0)},c2v:function(){gx.O.AV6cSaidaItemComplementoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAITEMCOMPLEMENTOEMPID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOID",gxz:"ZV7cSaidaItemComplementoId",gxold:"OV7cSaidaItemComplementoId",gxvar:"AV7cSaidaItemComplementoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaItemComplementoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaItemComplementoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOID",gx.O.AV7cSaidaItemComplementoId,0)},c2v:function(){gx.O.AV7cSaidaItemComplementoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAITEMCOMPLEMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOSEQ",gxz:"ZV8cSaidaItemComplementoSeq",gxold:"OV8cSaidaItemComplementoSeq",gxvar:"AV8cSaidaItemComplementoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaItemComplementoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaItemComplementoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOSEQ",gx.O.AV8cSaidaItemComplementoSeq,0)},c2v:function(){gx.O.AV8cSaidaItemComplementoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAITEMCOMPLEMENTOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOFPGTOEMP", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOFPGTOEMP",gxz:"ZV9cSaidaItemComplementoFPgtoEmp",gxold:"OV9cSaidaItemComplementoFPgtoEmp",gxvar:"AV9cSaidaItemComplementoFPgtoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaItemComplementoFPgtoEmp=Value},v2z:function(Value){gx.O.ZV9cSaidaItemComplementoFPgtoEmp=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOFPGTOEMP",gx.O.AV9cSaidaItemComplementoFPgtoEmp,0)},c2v:function(){gx.O.AV9cSaidaItemComplementoFPgtoEmp=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAITEMCOMPLEMENTOFPGTOEMP")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOFPGTOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOFPGTOID",gxz:"ZV10cSaidaItemComplementoFPgtoId",gxold:"OV10cSaidaItemComplementoFPgtoId",gxvar:"AV10cSaidaItemComplementoFPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaItemComplementoFPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cSaidaItemComplementoFPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOFPGTOID",gx.O.AV10cSaidaItemComplementoFPgtoId,0)},c2v:function(){gx.O.AV10cSaidaItemComplementoFPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAITEMCOMPLEMENTOFPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOVALIDADE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOVALIDADE",gxz:"ZV11cSaidaItemComplementoValidade",gxold:"OV11cSaidaItemComplementoValidade",gxvar:"AV11cSaidaItemComplementoValidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSaidaItemComplementoValidade=Value},v2z:function(Value){gx.O.ZV11cSaidaItemComplementoValidade=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOVALIDADE",gx.O.AV11cSaidaItemComplementoValidade,0)},c2v:function(){gx.O.AV11cSaidaItemComplementoValidade=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAITEMCOMPLEMENTOVALIDADE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOENTREGA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAITEMCOMPLEMENTOENTREGA",gxz:"ZV12cSaidaItemComplementoEntrega",gxold:"OV12cSaidaItemComplementoEntrega",gxvar:"AV12cSaidaItemComplementoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSaidaItemComplementoEntrega=Value},v2z:function(Value){gx.O.ZV12cSaidaItemComplementoEntrega=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAITEMCOMPLEMENTOENTREGA",gx.O.AV12cSaidaItemComplementoEntrega,0)},c2v:function(){gx.O.AV12cSaidaItemComplementoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAITEMCOMPLEMENTOENTREGA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOEMPID",gxz:"Z11193SaidaItemComplementoEmpId",gxold:"O11193SaidaItemComplementoEmpId",gxvar:"A11193SaidaItemComplementoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11193SaidaItemComplementoEmpId=Value},v2z:function(Value){gx.O.Z11193SaidaItemComplementoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAITEMCOMPLEMENTOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A11193SaidaItemComplementoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11193SaidaItemComplementoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAITEMCOMPLEMENTOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOID",gxz:"Z11194SaidaItemComplementoId",gxold:"O11194SaidaItemComplementoId",gxvar:"A11194SaidaItemComplementoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11194SaidaItemComplementoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11194SaidaItemComplementoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAITEMCOMPLEMENTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A11194SaidaItemComplementoId,0)},c2v:function(){gx.O.A11194SaidaItemComplementoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAITEMCOMPLEMENTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOSEQ",gxz:"Z11195SaidaItemComplementoSeq",gxold:"O11195SaidaItemComplementoSeq",gxvar:"A11195SaidaItemComplementoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11195SaidaItemComplementoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11195SaidaItemComplementoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAITEMCOMPLEMENTOSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A11195SaidaItemComplementoSeq,0)},c2v:function(){gx.O.A11195SaidaItemComplementoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAITEMCOMPLEMENTOSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOFPGTOEMP",gxz:"Z11198SaidaItemComplementoFPgtoEmp",gxold:"O11198SaidaItemComplementoFPgtoEmp",gxvar:"A11198SaidaItemComplementoFPgtoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11198SaidaItemComplementoFPgtoEmp=Value},v2z:function(Value){gx.O.Z11198SaidaItemComplementoFPgtoEmp=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAITEMCOMPLEMENTOFPGTOEMP",row || gx.fn.currentGridRowImpl(51),gx.O.A11198SaidaItemComplementoFPgtoEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11198SaidaItemComplementoFPgtoEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAITEMCOMPLEMENTOFPGTOEMP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cSaidaItemComplementoEmpId = "" ;
   this.ZV6cSaidaItemComplementoEmpId = "" ;
   this.OV6cSaidaItemComplementoEmpId = "" ;
   this.AV7cSaidaItemComplementoId = 0 ;
   this.ZV7cSaidaItemComplementoId = 0 ;
   this.OV7cSaidaItemComplementoId = 0 ;
   this.AV8cSaidaItemComplementoSeq = 0 ;
   this.ZV8cSaidaItemComplementoSeq = 0 ;
   this.OV8cSaidaItemComplementoSeq = 0 ;
   this.AV9cSaidaItemComplementoFPgtoEmp = "" ;
   this.ZV9cSaidaItemComplementoFPgtoEmp = "" ;
   this.OV9cSaidaItemComplementoFPgtoEmp = "" ;
   this.AV10cSaidaItemComplementoFPgtoId = 0 ;
   this.ZV10cSaidaItemComplementoFPgtoId = 0 ;
   this.OV10cSaidaItemComplementoFPgtoId = 0 ;
   this.AV11cSaidaItemComplementoValidade = "" ;
   this.ZV11cSaidaItemComplementoValidade = "" ;
   this.OV11cSaidaItemComplementoValidade = "" ;
   this.AV12cSaidaItemComplementoEntrega = "" ;
   this.ZV12cSaidaItemComplementoEntrega = "" ;
   this.OV12cSaidaItemComplementoEntrega = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11193SaidaItemComplementoEmpId = "" ;
   this.O11193SaidaItemComplementoEmpId = "" ;
   this.Z11194SaidaItemComplementoId = 0 ;
   this.O11194SaidaItemComplementoId = 0 ;
   this.Z11195SaidaItemComplementoSeq = 0 ;
   this.O11195SaidaItemComplementoSeq = 0 ;
   this.Z11198SaidaItemComplementoFPgtoEmp = "" ;
   this.O11198SaidaItemComplementoFPgtoEmp = "" ;
   this.AV6cSaidaItemComplementoEmpId = "" ;
   this.AV7cSaidaItemComplementoId = 0 ;
   this.AV8cSaidaItemComplementoSeq = 0 ;
   this.AV9cSaidaItemComplementoFPgtoEmp = "" ;
   this.AV10cSaidaItemComplementoFPgtoId = 0 ;
   this.AV11cSaidaItemComplementoValidade = "" ;
   this.AV12cSaidaItemComplementoEntrega = "" ;
   this.AV13pSaidaItemComplementoEmpId = "" ;
   this.AV14pSaidaItemComplementoId = 0 ;
   this.AV15pSaidaItemComplementoSeq = 0 ;
   this.A11202SaidaItemComplementoEntrega = "" ;
   this.A11201SaidaItemComplementoValidade = "" ;
   this.A11199SaidaItemComplementoFPgtoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11193SaidaItemComplementoEmpId = "" ;
   this.A11194SaidaItemComplementoId = 0 ;
   this.A11195SaidaItemComplementoSeq = 0 ;
   this.A11198SaidaItemComplementoFPgtoEmp = "" ;
   this.Events = {"e132cs2_client": ["ENTER", true] ,"e142cs1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaItemComplementoEmpId',fld:'vCSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV7cSaidaItemComplementoId',fld:'vCSAIDAITEMCOMPLEMENTOID'},{av:'AV8cSaidaItemComplementoSeq',fld:'vCSAIDAITEMCOMPLEMENTOSEQ'},{av:'AV9cSaidaItemComplementoFPgtoEmp',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOEMP'},{av:'AV10cSaidaItemComplementoFPgtoId',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOID'},{av:'AV11cSaidaItemComplementoValidade',fld:'vCSAIDAITEMCOMPLEMENTOVALIDADE'},{av:'AV12cSaidaItemComplementoEntrega',fld:'vCSAIDAITEMCOMPLEMENTOENTREGA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11193SaidaItemComplementoEmpId',fld:'SAIDAITEMCOMPLEMENTOEMPID'},{av:'A11194SaidaItemComplementoId',fld:'SAIDAITEMCOMPLEMENTOID'},{av:'A11195SaidaItemComplementoSeq',fld:'SAIDAITEMCOMPLEMENTOSEQ'}],[{av:'AV13pSaidaItemComplementoEmpId',fld:'vPSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV14pSaidaItemComplementoId',fld:'vPSAIDAITEMCOMPLEMENTOID'},{av:'AV15pSaidaItemComplementoSeq',fld:'vPSAIDAITEMCOMPLEMENTOSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaItemComplementoEmpId',fld:'vCSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV7cSaidaItemComplementoId',fld:'vCSAIDAITEMCOMPLEMENTOID'},{av:'AV8cSaidaItemComplementoSeq',fld:'vCSAIDAITEMCOMPLEMENTOSEQ'},{av:'AV9cSaidaItemComplementoFPgtoEmp',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOEMP'},{av:'AV10cSaidaItemComplementoFPgtoId',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOID'},{av:'AV11cSaidaItemComplementoValidade',fld:'vCSAIDAITEMCOMPLEMENTOVALIDADE'},{av:'AV12cSaidaItemComplementoEntrega',fld:'vCSAIDAITEMCOMPLEMENTOENTREGA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaItemComplementoEmpId',fld:'vCSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV7cSaidaItemComplementoId',fld:'vCSAIDAITEMCOMPLEMENTOID'},{av:'AV8cSaidaItemComplementoSeq',fld:'vCSAIDAITEMCOMPLEMENTOSEQ'},{av:'AV9cSaidaItemComplementoFPgtoEmp',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOEMP'},{av:'AV10cSaidaItemComplementoFPgtoId',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOID'},{av:'AV11cSaidaItemComplementoValidade',fld:'vCSAIDAITEMCOMPLEMENTOVALIDADE'},{av:'AV12cSaidaItemComplementoEntrega',fld:'vCSAIDAITEMCOMPLEMENTOENTREGA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaItemComplementoEmpId',fld:'vCSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV7cSaidaItemComplementoId',fld:'vCSAIDAITEMCOMPLEMENTOID'},{av:'AV8cSaidaItemComplementoSeq',fld:'vCSAIDAITEMCOMPLEMENTOSEQ'},{av:'AV9cSaidaItemComplementoFPgtoEmp',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOEMP'},{av:'AV10cSaidaItemComplementoFPgtoId',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOID'},{av:'AV11cSaidaItemComplementoValidade',fld:'vCSAIDAITEMCOMPLEMENTOVALIDADE'},{av:'AV12cSaidaItemComplementoEntrega',fld:'vCSAIDAITEMCOMPLEMENTOENTREGA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaItemComplementoEmpId',fld:'vCSAIDAITEMCOMPLEMENTOEMPID'},{av:'AV7cSaidaItemComplementoId',fld:'vCSAIDAITEMCOMPLEMENTOID'},{av:'AV8cSaidaItemComplementoSeq',fld:'vCSAIDAITEMCOMPLEMENTOSEQ'},{av:'AV9cSaidaItemComplementoFPgtoEmp',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOEMP'},{av:'AV10cSaidaItemComplementoFPgtoId',fld:'vCSAIDAITEMCOMPLEMENTOFPGTOID'},{av:'AV11cSaidaItemComplementoValidade',fld:'vCSAIDAITEMCOMPLEMENTOVALIDADE'},{av:'AV12cSaidaItemComplementoEntrega',fld:'vCSAIDAITEMCOMPLEMENTOENTREGA'}],[]];
   this.setVCMap("AV13pSaidaItemComplementoEmpId", "vPSAIDAITEMCOMPLEMENTOEMPID", 0, "char");
   this.setVCMap("AV14pSaidaItemComplementoId", "vPSAIDAITEMCOMPLEMENTOID", 0, "int");
   this.setVCMap("AV15pSaidaItemComplementoSeq", "vPSAIDAITEMCOMPLEMENTOSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0mu0());