/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:32.31
*/
gx.evt.autoSkip = false;
gx.define('hhistoricopedidoecommerce', false, function () {
   this.ServerClass =  "hhistoricopedidoecommerce" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV13EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A8607OrdemServicoFaseId=gx.fn.getIntegerValue("ORDEMSERVICOFASEID",'.') ;
      this.A8600OrdemServicoFaseDescricao=gx.fn.getControlValue("ORDEMSERVICOFASEDESCRICAO") ;
   };
   this.e172gh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e182gh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, arguments[0], false, false);
   };
   this.e112gh2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e122gh2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e132gh2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e142gh2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e152gh2_client=function()
   {
      this.executeServerEvent("'ATUALIZA'", true, null, false, false);
   };
   this.e212gh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,15,17,19,22,24,26,28,30,32,37,41,42,50,53,55,57,59,61,63,64,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricopedidoecommerce",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9939,41,"SAIDAFASEDATAHORA","Data/Hora","","SaidaFaseDataHora","dtime",0,"px",16,16,"right",null,[],9939,"SaidaFaseDataHora",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9940,42,"SAIDAFASEOBSERVACAO","Status","","SaidaFaseObservacao","vchar",0,"px",2097152,80,"left",null,[],9940,"SaidaFaseObservacao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCOD",gxz:"ZV9Cod",gxold:"OV9Cod",gxvar:"AV9Cod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Cod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Cod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOD",gx.O.AV9Cod,0)},c2v:function(){gx.O.AV9Cod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOD",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXT7", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTE",gxz:"ZV7Cliente",gxold:"OV7Cliente",gxvar:"AV7Cliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Cliente=Value},v2z:function(Value){gx.O.ZV7Cliente=Value},v2c:function(){gx.fn.setControlValue("vCLIENTE",gx.O.AV7Cliente,0)},c2v:function(){gx.O.AV7Cliente=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTE")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFANTASIA",gxz:"ZV8ClienteFantasia",gxold:"OV8ClienteFantasia",gxvar:"AV8ClienteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8ClienteFantasia=Value},v2z:function(Value){gx.O.ZV8ClienteFantasia=Value},v2c:function(){gx.fn.setControlValue("vCLIENTEFANTASIA",gx.O.AV8ClienteFantasia,0)},c2v:function(){gx.O.AV8ClienteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXT9", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTAL",gxz:"ZV20Total",gxold:"OV20Total",gxvar:"AV20Total",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Total=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20Total=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAL",gx.O.AV20Total,2,',')},c2v:function(){gx.O.AV20Total=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXT3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPEDIDO",gxz:"ZV11DataPedido",gxold:"OV11DataPedido",gxvar:"AV11DataPedido",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11DataPedido=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11DataPedido=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPEDIDO",gx.O.AV11DataPedido,0)},c2v:function(){gx.O.AV11DataPedido=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPEDIDO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXT8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTENTREGA",gxz:"ZV12DtEntrega",gxold:"OV12DtEntrega",gxvar:"AV12DtEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DtEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DtEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTENTREGA",gx.O.AV12DtEntrega,0)},c2v:function(){gx.O.AV12DtEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTENTREGA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXT10", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFASE",gxz:"ZV14Fase",gxold:"OV14Fase",gxvar:"AV14Fase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Fase=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Fase=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vFASE",gx.O.AV14Fase)},c2v:function(){gx.O.AV14Fase=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFASE",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE1",grid:0};
   GXValidFnc[41]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEDATAHORA",gxz:"Z9939SaidaFaseDataHora",gxold:"O9939SaidaFaseDataHora",gxvar:"A9939SaidaFaseDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9939SaidaFaseDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAFASEDATAHORA",row || gx.fn.currentGridRowImpl(40),gx.O.A9939SaidaFaseDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDAFASEDATAHORA",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"vchar",len:2097152,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEOBSERVACAO",gxz:"Z9940SaidaFaseObservacao",gxold:"O9940SaidaFaseObservacao",gxvar:"A9940SaidaFaseObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9940SaidaFaseObservacao=Value},v2z:function(Value){gx.O.Z9940SaidaFaseObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAFASEOBSERVACAO",row || gx.fn.currentGridRowImpl(40),gx.O.A9940SaidaFaseObservacao,0)},c2v:function(){gx.O.A9940SaidaFaseObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAFASEOBSERVACAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE14",grid:0};
   GXValidFnc[53]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[61]={fld:"BTNATUALIZA",grid:0};
   GXValidFnc[63]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV24Pagina,0)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV9Cod = 0 ;
   this.ZV9Cod = 0 ;
   this.OV9Cod = 0 ;
   this.AV7Cliente = "" ;
   this.ZV7Cliente = "" ;
   this.OV7Cliente = "" ;
   this.AV8ClienteFantasia = "" ;
   this.ZV8ClienteFantasia = "" ;
   this.OV8ClienteFantasia = "" ;
   this.AV20Total = 0 ;
   this.ZV20Total = 0 ;
   this.OV20Total = 0 ;
   this.AV11DataPedido = gx.date.nullDate() ;
   this.ZV11DataPedido = gx.date.nullDate() ;
   this.OV11DataPedido = gx.date.nullDate() ;
   this.AV12DtEntrega = gx.date.nullDate() ;
   this.ZV12DtEntrega = gx.date.nullDate() ;
   this.OV12DtEntrega = gx.date.nullDate() ;
   this.AV14Fase = 0 ;
   this.ZV14Fase = 0 ;
   this.OV14Fase = 0 ;
   this.Z9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.O9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.Z9940SaidaFaseObservacao = "" ;
   this.O9940SaidaFaseObservacao = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV9Cod = 0 ;
   this.AV7Cliente = "" ;
   this.AV8ClienteFantasia = "" ;
   this.AV20Total = 0 ;
   this.AV11DataPedido = gx.date.nullDate() ;
   this.AV12DtEntrega = gx.date.nullDate() ;
   this.AV14Fase = 0 ;
   this.AV24Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A9936SaidaFaseSeq = 0 ;
   this.A9939SaidaFaseDataHora = gx.date.nullDate() ;
   this.A9940SaidaFaseObservacao = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.AV13EmpresaLogadaId = "" ;
   this.Events = {"e172gh2_client": ["ENTER", true] ,"e182gh2_client": ["'FECHAR'", true] ,"e112gh2_client": ["'PRIMEIRO'", true] ,"e122gh2_client": ["'ANTERIOR'", true] ,"e132gh2_client": ["'PROXIMO'", true] ,"e142gh2_client": ["'ULTIMO'", true] ,"e152gh2_client": ["'ATUALIZA'", true] ,"e212gh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV29NumPagina',fld:'vNUMPAGINA'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV14Fase',fld:'vFASE'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV14Fase',fld:'vFASE'},{av:'AV12DtEntrega',fld:'vDTENTREGA'},{av:'AV11DataPedido',fld:'vDATAPEDIDO'},{av:'AV20Total',fld:'vTOTAL'},{av:'AV7Cliente',fld:'vCLIENTE'}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV14Fase',fld:'vFASE'},{av:'AV12DtEntrega',fld:'vDTENTREGA'},{av:'AV11DataPedido',fld:'vDATAPEDIDO'},{av:'AV20Total',fld:'vTOTAL'},{av:'AV7Cliente',fld:'vCLIENTE'}],[]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV9Cod',fld:'vCOD',hsh:true},{av:'AV24Pagina',fld:'vPAGINA'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV13EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   this.setVCMap("AV13EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A8607OrdemServicoFaseId", "ORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("A8600OrdemServicoFaseDescricao", "ORDEMSERVICOFASEDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV13EmpresaLogadaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar({rfrVar:"A8607OrdemServicoFaseId"});
   GridContainer.addRefreshingVar({rfrVar:"A8600OrdemServicoFaseDescricao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricopedidoecommerce());
