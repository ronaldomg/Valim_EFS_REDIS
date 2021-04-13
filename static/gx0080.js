/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:23:58.96
*/
gx.evt.autoSkip = false;
gx.define('gx0080', false, function () {
   this.ServerClass =  "gx0080" ;
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
      this.AV13pEmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vPEMPRESACENTROCUSTOEMPRESAID") ;
      this.AV14pCentroCustoId=gx.fn.getControlValue("vPCENTROCUSTOID") ;
   };
   this.e131hh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0080",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(153,53,"EMPRESACENTROCUSTOEMPRESAID","Código Empresa Centro Custo","","EmpresaCentroCustoEmpresaId","char",0,"px",10,10,"left",null,[],153,"EmpresaCentroCustoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(51,54,"CENTROCUSTOID","Código Centro Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(52,55,"CENTROCUSTODESCRICAO","Descrição do Centro de Custo","Selecionar","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],52,"CentroCustoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(150,56,"CENTROCUSTOSUPERIOR","Centro de Custo Superior","","CentroCustoSuperior","svchar",0,"px",30,30,"left",null,[],150,"CentroCustoSuperior",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESACENTROCUSTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV6cEmpresaCentroCustoEmpresaId",gxold:"OV6cEmpresaCentroCustoEmpresaId",gxvar:"AV6cEmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESACENTROCUSTOEMPRESAID",gx.O.AV6cEmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCENTROCUSTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTOID",gxz:"ZV7cCentroCustoId",gxold:"OV7cCentroCustoId",gxvar:"AV7cCentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCentroCustoId=Value},v2z:function(Value){gx.O.ZV7cCentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTOID",gx.O.AV7cCentroCustoId,0)},c2v:function(){gx.O.AV7cCentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCENTROCUSTODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTODESCRICAO",gxz:"ZV8cCentroCustoDescricao",gxold:"OV8cCentroCustoDescricao",gxvar:"AV8cCentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV8cCentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTODESCRICAO",gx.O.AV8cCentroCustoDescricao,0)},c2v:function(){gx.O.AV8cCentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCENTROCUSTOSUPERIOR", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTOSUPERIOR",gxz:"ZV9cCentroCustoSuperior",gxold:"OV9cCentroCustoSuperior",gxvar:"AV9cCentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCentroCustoSuperior=Value},v2z:function(Value){gx.O.ZV9cCentroCustoSuperior=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTOSUPERIOR",gx.O.AV9cCentroCustoSuperior,0)},c2v:function(){gx.O.AV9cCentroCustoSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTOSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCENTROCUSTOFINAL", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTOFINAL",gxz:"ZV10cCentroCustoFinal",gxold:"OV10cCentroCustoFinal",gxvar:"AV10cCentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCentroCustoFinal=Value},v2z:function(Value){gx.O.ZV10cCentroCustoFinal=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTOFINAL",gx.O.AV10cCentroCustoFinal,0)},c2v:function(){gx.O.AV10cCentroCustoFinal=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTOFINAL")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCENTROCUSTONIVEL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTONIVEL",gxz:"ZV11cCentroCustoNivel",gxold:"OV11cCentroCustoNivel",gxvar:"AV11cCentroCustoNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCentroCustoNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCentroCustoNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTONIVEL",gx.O.AV11cCentroCustoNivel,0)},c2v:function(){gx.O.AV11cCentroCustoNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCENTROCUSTONIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCENTROCUSTOUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTOUSUARIOID",gxz:"ZV12cCentroCustoUsuarioId",gxold:"OV12cCentroCustoUsuarioId",gxvar:"AV12cCentroCustoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCentroCustoUsuarioId=Value},v2z:function(Value){gx.O.ZV12cCentroCustoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTOUSUARIOID",gx.O.AV12cCentroCustoUsuarioId,0)},c2v:function(){gx.O.AV12cCentroCustoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACENTROCUSTOEMPRESAID",gxz:"Z153EmpresaCentroCustoEmpresaId",gxold:"O153EmpresaCentroCustoEmpresaId",gxvar:"A153EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A153EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.Z153EmpresaCentroCustoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A153EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.A153EmpresaCentroCustoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODESCRICAO",gxz:"Z52CentroCustoDescricao",gxold:"O52CentroCustoDescricao",gxvar:"A52CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A52CentroCustoDescricao=Value},v2z:function(Value){gx.O.Z52CentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A52CentroCustoDescricao,0)},c2v:function(){gx.O.A52CentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOSUPERIOR",gxz:"Z150CentroCustoSuperior",gxold:"O150CentroCustoSuperior",gxvar:"A150CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A150CentroCustoSuperior=Value},v2z:function(Value){gx.O.Z150CentroCustoSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(51),gx.O.A150CentroCustoSuperior,0)},c2v:function(){gx.O.A150CentroCustoSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaCentroCustoEmpresaId = "" ;
   this.ZV6cEmpresaCentroCustoEmpresaId = "" ;
   this.OV6cEmpresaCentroCustoEmpresaId = "" ;
   this.AV7cCentroCustoId = "" ;
   this.ZV7cCentroCustoId = "" ;
   this.OV7cCentroCustoId = "" ;
   this.AV8cCentroCustoDescricao = "" ;
   this.ZV8cCentroCustoDescricao = "" ;
   this.OV8cCentroCustoDescricao = "" ;
   this.AV9cCentroCustoSuperior = "" ;
   this.ZV9cCentroCustoSuperior = "" ;
   this.OV9cCentroCustoSuperior = "" ;
   this.AV10cCentroCustoFinal = "" ;
   this.ZV10cCentroCustoFinal = "" ;
   this.OV10cCentroCustoFinal = "" ;
   this.AV11cCentroCustoNivel = 0 ;
   this.ZV11cCentroCustoNivel = 0 ;
   this.OV11cCentroCustoNivel = 0 ;
   this.AV12cCentroCustoUsuarioId = "" ;
   this.ZV12cCentroCustoUsuarioId = "" ;
   this.OV12cCentroCustoUsuarioId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z153EmpresaCentroCustoEmpresaId = "" ;
   this.O153EmpresaCentroCustoEmpresaId = "" ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z52CentroCustoDescricao = "" ;
   this.O52CentroCustoDescricao = "" ;
   this.Z150CentroCustoSuperior = "" ;
   this.O150CentroCustoSuperior = "" ;
   this.AV6cEmpresaCentroCustoEmpresaId = "" ;
   this.AV7cCentroCustoId = "" ;
   this.AV8cCentroCustoDescricao = "" ;
   this.AV9cCentroCustoSuperior = "" ;
   this.AV10cCentroCustoFinal = "" ;
   this.AV11cCentroCustoNivel = 0 ;
   this.AV12cCentroCustoUsuarioId = "" ;
   this.AV13pEmpresaCentroCustoEmpresaId = "" ;
   this.AV14pCentroCustoId = "" ;
   this.A768CentroCustoUsuarioId = "" ;
   this.A152CentroCustoNivel = 0 ;
   this.A151CentroCustoFinal = "" ;
   this.AV5LinkSelection = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A51CentroCustoId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.Events = {"e131hh2_client": ["ENTER", true] ,"e141hh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCentroCustoEmpresaId',fld:'vCEMPRESACENTROCUSTOEMPRESAID'},{av:'AV7cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'AV8cCentroCustoDescricao',fld:'vCCENTROCUSTODESCRICAO'},{av:'AV9cCentroCustoSuperior',fld:'vCCENTROCUSTOSUPERIOR'},{av:'AV10cCentroCustoFinal',fld:'vCCENTROCUSTOFINAL'},{av:'AV11cCentroCustoNivel',fld:'vCCENTROCUSTONIVEL'},{av:'AV12cCentroCustoUsuarioId',fld:'vCCENTROCUSTOUSUARIOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[{av:'AV13pEmpresaCentroCustoEmpresaId',fld:'vPEMPRESACENTROCUSTOEMPRESAID'},{av:'AV14pCentroCustoId',fld:'vPCENTROCUSTOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCentroCustoEmpresaId',fld:'vCEMPRESACENTROCUSTOEMPRESAID'},{av:'AV7cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'AV8cCentroCustoDescricao',fld:'vCCENTROCUSTODESCRICAO'},{av:'AV9cCentroCustoSuperior',fld:'vCCENTROCUSTOSUPERIOR'},{av:'AV10cCentroCustoFinal',fld:'vCCENTROCUSTOFINAL'},{av:'AV11cCentroCustoNivel',fld:'vCCENTROCUSTONIVEL'},{av:'AV12cCentroCustoUsuarioId',fld:'vCCENTROCUSTOUSUARIOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCentroCustoEmpresaId',fld:'vCEMPRESACENTROCUSTOEMPRESAID'},{av:'AV7cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'AV8cCentroCustoDescricao',fld:'vCCENTROCUSTODESCRICAO'},{av:'AV9cCentroCustoSuperior',fld:'vCCENTROCUSTOSUPERIOR'},{av:'AV10cCentroCustoFinal',fld:'vCCENTROCUSTOFINAL'},{av:'AV11cCentroCustoNivel',fld:'vCCENTROCUSTONIVEL'},{av:'AV12cCentroCustoUsuarioId',fld:'vCCENTROCUSTOUSUARIOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCentroCustoEmpresaId',fld:'vCEMPRESACENTROCUSTOEMPRESAID'},{av:'AV7cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'AV8cCentroCustoDescricao',fld:'vCCENTROCUSTODESCRICAO'},{av:'AV9cCentroCustoSuperior',fld:'vCCENTROCUSTOSUPERIOR'},{av:'AV10cCentroCustoFinal',fld:'vCCENTROCUSTOFINAL'},{av:'AV11cCentroCustoNivel',fld:'vCCENTROCUSTONIVEL'},{av:'AV12cCentroCustoUsuarioId',fld:'vCCENTROCUSTOUSUARIOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaCentroCustoEmpresaId',fld:'vCEMPRESACENTROCUSTOEMPRESAID'},{av:'AV7cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'AV8cCentroCustoDescricao',fld:'vCCENTROCUSTODESCRICAO'},{av:'AV9cCentroCustoSuperior',fld:'vCCENTROCUSTOSUPERIOR'},{av:'AV10cCentroCustoFinal',fld:'vCCENTROCUSTOFINAL'},{av:'AV11cCentroCustoNivel',fld:'vCCENTROCUSTONIVEL'},{av:'AV12cCentroCustoUsuarioId',fld:'vCCENTROCUSTOUSUARIOID'}],[]];
   this.setVCMap("AV13pEmpresaCentroCustoEmpresaId", "vPEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pCentroCustoId", "vPCENTROCUSTOID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0080());