/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:43.44
*/
gx.evt.autoSkip = false;
gx.define('gx0kg0', false, function () {
   this.ServerClass =  "gx0kg0" ;
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
      this.AV13pAcessosClubeIdSessao=gx.fn.getControlValue("vPACESSOSCLUBEIDSESSAO") ;
      this.AV14pAcessosClubeUsuariioId=gx.fn.getControlValue("vPACESSOSCLUBEUSUARIIOID") ;
      this.AV15pAcessosClubeAcessoId=gx.fn.getIntegerValue("vPACESSOSCLUBEACESSOID",'.') ;
   };
   this.e1322z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1422z1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kg0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9867,53,"ACESSOSCLUBEIDSESSAO","Id Sessao","","AcessosClubeIdSessao","svchar",0,"px",40,40,"left",null,[],9867,"AcessosClubeIdSessao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9868,54,"ACESSOSCLUBEUSUARIIOID","Usuariio Id","","AcessosClubeUsuariioId","char",0,"px",12,12,"left",null,[],9868,"AcessosClubeUsuariioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9869,55,"ACESSOSCLUBEACESSOID","Acesso Id","","AcessosClubeAcessoId","int",0,"px",10,10,"right",null,[],9869,"AcessosClubeAcessoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9873,56,"ACESSOSCLUBEDATAHORAENTRADA","Hora Entrada","Selecionar","AcessosClubeDataHoraEntrada","dtime",0,"px",16,16,"right",null,[],9873,"AcessosClubeDataHoraEntrada",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKACESSOSCLUBEIDSESSAO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEIDSESSAO",gxz:"ZV6cAcessosClubeIdSessao",gxold:"OV6cAcessosClubeIdSessao",gxvar:"AV6cAcessosClubeIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAcessosClubeIdSessao=Value},v2z:function(Value){gx.O.ZV6cAcessosClubeIdSessao=Value},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEIDSESSAO",gx.O.AV6cAcessosClubeIdSessao,0)},c2v:function(){gx.O.AV6cAcessosClubeIdSessao=this.val()},val:function(){return gx.fn.getControlValue("vCACESSOSCLUBEIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKACESSOSCLUBEUSUARIIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEUSUARIIOID",gxz:"ZV7cAcessosClubeUsuariioId",gxold:"OV7cAcessosClubeUsuariioId",gxvar:"AV7cAcessosClubeUsuariioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAcessosClubeUsuariioId=Value},v2z:function(Value){gx.O.ZV7cAcessosClubeUsuariioId=Value},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEUSUARIIOID",gx.O.AV7cAcessosClubeUsuariioId,0)},c2v:function(){gx.O.AV7cAcessosClubeUsuariioId=this.val()},val:function(){return gx.fn.getControlValue("vCACESSOSCLUBEUSUARIIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKACESSOSCLUBEACESSOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEACESSOID",gxz:"ZV8cAcessosClubeAcessoId",gxold:"OV8cAcessosClubeAcessoId",gxvar:"AV8cAcessosClubeAcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAcessosClubeAcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cAcessosClubeAcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEACESSOID",gx.O.AV8cAcessosClubeAcessoId,0)},c2v:function(){gx.O.AV8cAcessosClubeAcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCACESSOSCLUBEACESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKACESSOSCLUBEDATAHORAENTRADA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEDATAHORAENTRADA",gxz:"ZV9cAcessosClubeDataHoraEntrada",gxold:"OV9cAcessosClubeDataHoraEntrada",gxvar:"AV9cAcessosClubeDataHoraEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cAcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEDATAHORAENTRADA",gx.O.AV9cAcessosClubeDataHoraEntrada,0)},c2v:function(){gx.O.AV9cAcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCACESSOSCLUBEDATAHORAENTRADA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKACESSOSCLUBEDATAHORASAIDA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEDATAHORASAIDA",gxz:"ZV10cAcessosClubeDataHoraSaida",gxold:"OV10cAcessosClubeDataHoraSaida",gxvar:"AV10cAcessosClubeDataHoraSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cAcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEDATAHORASAIDA",gx.O.AV10cAcessosClubeDataHoraSaida,0)},c2v:function(){gx.O.AV10cAcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCACESSOSCLUBEDATAHORASAIDA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKACESSOSCLUBETITULARID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBETITULARID",gxz:"ZV11cAcessosClubeTitularId",gxold:"OV11cAcessosClubeTitularId",gxvar:"AV11cAcessosClubeTitularId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAcessosClubeTitularId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cAcessosClubeTitularId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBETITULARID",gx.O.AV11cAcessosClubeTitularId,0)},c2v:function(){gx.O.AV11cAcessosClubeTitularId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCACESSOSCLUBETITULARID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKACESSOSCLUBEDEPENDENTEID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOSCLUBEDEPENDENTEID",gxz:"ZV12cAcessosClubeDependenteId",gxold:"OV12cAcessosClubeDependenteId",gxvar:"AV12cAcessosClubeDependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAcessosClubeDependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cAcessosClubeDependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCACESSOSCLUBEDEPENDENTEID",gx.O.AV12cAcessosClubeDependenteId,0)},c2v:function(){gx.O.AV12cAcessosClubeDependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCACESSOSCLUBEDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEIDSESSAO",gxz:"Z9867AcessosClubeIdSessao",gxold:"O9867AcessosClubeIdSessao",gxvar:"A9867AcessosClubeIdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9867AcessosClubeIdSessao=Value},v2z:function(Value){gx.O.Z9867AcessosClubeIdSessao=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEIDSESSAO",row || gx.fn.currentGridRowImpl(51),gx.O.A9867AcessosClubeIdSessao,0)},c2v:function(){gx.O.A9867AcessosClubeIdSessao=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSCLUBEIDSESSAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEUSUARIIOID",gxz:"Z9868AcessosClubeUsuariioId",gxold:"O9868AcessosClubeUsuariioId",gxvar:"A9868AcessosClubeUsuariioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9868AcessosClubeUsuariioId=Value},v2z:function(Value){gx.O.Z9868AcessosClubeUsuariioId=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEUSUARIIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A9868AcessosClubeUsuariioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9868AcessosClubeUsuariioId=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSCLUBEUSUARIIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEACESSOID",gxz:"Z9869AcessosClubeAcessoId",gxold:"O9869AcessosClubeAcessoId",gxvar:"A9869AcessosClubeAcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9869AcessosClubeAcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEACESSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A9869AcessosClubeAcessoId,0)},c2v:function(){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACESSOSCLUBEACESSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDATAHORAENTRADA",gxz:"Z9873AcessosClubeDataHoraEntrada",gxold:"O9873AcessosClubeDataHoraEntrada",gxvar:"A9873AcessosClubeDataHoraEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEDATAHORAENTRADA",row || gx.fn.currentGridRowImpl(51),gx.O.A9873AcessosClubeDataHoraEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOSCLUBEDATAHORAENTRADA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cAcessosClubeIdSessao = "" ;
   this.ZV6cAcessosClubeIdSessao = "" ;
   this.OV6cAcessosClubeIdSessao = "" ;
   this.AV7cAcessosClubeUsuariioId = "" ;
   this.ZV7cAcessosClubeUsuariioId = "" ;
   this.OV7cAcessosClubeUsuariioId = "" ;
   this.AV8cAcessosClubeAcessoId = 0 ;
   this.ZV8cAcessosClubeAcessoId = 0 ;
   this.OV8cAcessosClubeAcessoId = 0 ;
   this.AV9cAcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.ZV9cAcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.OV9cAcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.AV10cAcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.ZV10cAcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.OV10cAcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.AV11cAcessosClubeTitularId = 0 ;
   this.ZV11cAcessosClubeTitularId = 0 ;
   this.OV11cAcessosClubeTitularId = 0 ;
   this.AV12cAcessosClubeDependenteId = 0 ;
   this.ZV12cAcessosClubeDependenteId = 0 ;
   this.OV12cAcessosClubeDependenteId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9867AcessosClubeIdSessao = "" ;
   this.O9867AcessosClubeIdSessao = "" ;
   this.Z9868AcessosClubeUsuariioId = "" ;
   this.O9868AcessosClubeUsuariioId = "" ;
   this.Z9869AcessosClubeAcessoId = 0 ;
   this.O9869AcessosClubeAcessoId = 0 ;
   this.Z9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.O9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.AV6cAcessosClubeIdSessao = "" ;
   this.AV7cAcessosClubeUsuariioId = "" ;
   this.AV8cAcessosClubeAcessoId = 0 ;
   this.AV9cAcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.AV10cAcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.AV11cAcessosClubeTitularId = 0 ;
   this.AV12cAcessosClubeDependenteId = 0 ;
   this.AV13pAcessosClubeIdSessao = "" ;
   this.AV14pAcessosClubeUsuariioId = "" ;
   this.AV15pAcessosClubeAcessoId = 0 ;
   this.A9876AcessosClubeDependenteId = 0 ;
   this.A9875AcessosClubeTitularId = 0 ;
   this.A9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A9867AcessosClubeIdSessao = "" ;
   this.A9868AcessosClubeUsuariioId = "" ;
   this.A9869AcessosClubeAcessoId = 0 ;
   this.A9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.Events = {"e1322z2_client": ["ENTER", true] ,"e1422z1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcessosClubeIdSessao',fld:'vCACESSOSCLUBEIDSESSAO'},{av:'AV7cAcessosClubeUsuariioId',fld:'vCACESSOSCLUBEUSUARIIOID'},{av:'AV8cAcessosClubeAcessoId',fld:'vCACESSOSCLUBEACESSOID'},{av:'AV9cAcessosClubeDataHoraEntrada',fld:'vCACESSOSCLUBEDATAHORAENTRADA'},{av:'AV10cAcessosClubeDataHoraSaida',fld:'vCACESSOSCLUBEDATAHORASAIDA'},{av:'AV11cAcessosClubeTitularId',fld:'vCACESSOSCLUBETITULARID'},{av:'AV12cAcessosClubeDependenteId',fld:'vCACESSOSCLUBEDEPENDENTEID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9867AcessosClubeIdSessao',fld:'ACESSOSCLUBEIDSESSAO'},{av:'A9868AcessosClubeUsuariioId',fld:'ACESSOSCLUBEUSUARIIOID'},{av:'A9869AcessosClubeAcessoId',fld:'ACESSOSCLUBEACESSOID'}],[{av:'AV13pAcessosClubeIdSessao',fld:'vPACESSOSCLUBEIDSESSAO'},{av:'AV14pAcessosClubeUsuariioId',fld:'vPACESSOSCLUBEUSUARIIOID'},{av:'AV15pAcessosClubeAcessoId',fld:'vPACESSOSCLUBEACESSOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcessosClubeIdSessao',fld:'vCACESSOSCLUBEIDSESSAO'},{av:'AV7cAcessosClubeUsuariioId',fld:'vCACESSOSCLUBEUSUARIIOID'},{av:'AV8cAcessosClubeAcessoId',fld:'vCACESSOSCLUBEACESSOID'},{av:'AV9cAcessosClubeDataHoraEntrada',fld:'vCACESSOSCLUBEDATAHORAENTRADA'},{av:'AV10cAcessosClubeDataHoraSaida',fld:'vCACESSOSCLUBEDATAHORASAIDA'},{av:'AV11cAcessosClubeTitularId',fld:'vCACESSOSCLUBETITULARID'},{av:'AV12cAcessosClubeDependenteId',fld:'vCACESSOSCLUBEDEPENDENTEID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcessosClubeIdSessao',fld:'vCACESSOSCLUBEIDSESSAO'},{av:'AV7cAcessosClubeUsuariioId',fld:'vCACESSOSCLUBEUSUARIIOID'},{av:'AV8cAcessosClubeAcessoId',fld:'vCACESSOSCLUBEACESSOID'},{av:'AV9cAcessosClubeDataHoraEntrada',fld:'vCACESSOSCLUBEDATAHORAENTRADA'},{av:'AV10cAcessosClubeDataHoraSaida',fld:'vCACESSOSCLUBEDATAHORASAIDA'},{av:'AV11cAcessosClubeTitularId',fld:'vCACESSOSCLUBETITULARID'},{av:'AV12cAcessosClubeDependenteId',fld:'vCACESSOSCLUBEDEPENDENTEID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcessosClubeIdSessao',fld:'vCACESSOSCLUBEIDSESSAO'},{av:'AV7cAcessosClubeUsuariioId',fld:'vCACESSOSCLUBEUSUARIIOID'},{av:'AV8cAcessosClubeAcessoId',fld:'vCACESSOSCLUBEACESSOID'},{av:'AV9cAcessosClubeDataHoraEntrada',fld:'vCACESSOSCLUBEDATAHORAENTRADA'},{av:'AV10cAcessosClubeDataHoraSaida',fld:'vCACESSOSCLUBEDATAHORASAIDA'},{av:'AV11cAcessosClubeTitularId',fld:'vCACESSOSCLUBETITULARID'},{av:'AV12cAcessosClubeDependenteId',fld:'vCACESSOSCLUBEDEPENDENTEID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAcessosClubeIdSessao',fld:'vCACESSOSCLUBEIDSESSAO'},{av:'AV7cAcessosClubeUsuariioId',fld:'vCACESSOSCLUBEUSUARIIOID'},{av:'AV8cAcessosClubeAcessoId',fld:'vCACESSOSCLUBEACESSOID'},{av:'AV9cAcessosClubeDataHoraEntrada',fld:'vCACESSOSCLUBEDATAHORAENTRADA'},{av:'AV10cAcessosClubeDataHoraSaida',fld:'vCACESSOSCLUBEDATAHORASAIDA'},{av:'AV11cAcessosClubeTitularId',fld:'vCACESSOSCLUBETITULARID'},{av:'AV12cAcessosClubeDependenteId',fld:'vCACESSOSCLUBEDEPENDENTEID'}],[]];
   this.setVCMap("AV13pAcessosClubeIdSessao", "vPACESSOSCLUBEIDSESSAO", 0, "svchar");
   this.setVCMap("AV14pAcessosClubeUsuariioId", "vPACESSOSCLUBEUSUARIIOID", 0, "char");
   this.setVCMap("AV15pAcessosClubeAcessoId", "vPACESSOSCLUBEACESSOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kg0());
