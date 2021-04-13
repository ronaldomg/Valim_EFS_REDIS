/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:20:1.56
*/
gx.evt.autoSkip = false;
gx.define('hnovaagenda', false, function () {
   this.ServerClass =  "hnovaagenda" ;
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
      this.AV8AgendaData=gx.fn.getDateValue("vAGENDADATA") ;
      this.AV5AgendaId=gx.fn.getIntegerValue("vAGENDAID",'.') ;
      this.AV11AgendaNoCompromisso=gx.fn.getIntegerValue("vAGENDANOCOMPROMISSO",'.') ;
   };
   this.e112gv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e122gv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152gv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,22,30];
   this.GXLastCtrlId =30;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDADATATELA",gxz:"ZV18AgendaDataTela",gxold:"OV18AgendaDataTela",gxvar:"AV18AgendaDataTela",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AgendaDataTela=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18AgendaDataTela=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vAGENDADATATELA",gx.O.AV18AgendaDataTela,0)},c2v:function(){gx.O.AV18AgendaDataTela=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vAGENDADATATELA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDAHORAINICIAL",gxz:"ZV10AgendaHoraInicial",gxold:"OV10AgendaHoraInicial",gxvar:"AV10AgendaHoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10AgendaHoraInicial=Value},v2z:function(Value){gx.O.ZV10AgendaHoraInicial=Value},v2c:function(){gx.fn.setControlValue("vAGENDAHORAINICIAL",gx.O.AV10AgendaHoraInicial,0)},c2v:function(){gx.O.AV10AgendaHoraInicial=this.val()},val:function(){return gx.fn.getControlValue("vAGENDAHORAINICIAL")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDAHORAFINAL",gxz:"ZV9AgendaHoraFinal",gxold:"OV9AgendaHoraFinal",gxvar:"AV9AgendaHoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9AgendaHoraFinal=Value},v2z:function(Value){gx.O.ZV9AgendaHoraFinal=Value},v2c:function(){gx.fn.setControlValue("vAGENDAHORAFINAL",gx.O.AV9AgendaHoraFinal,0)},c2v:function(){gx.O.AV9AgendaHoraFinal=this.val()},val:function(){return gx.fn.getControlValue("vAGENDAHORAFINAL")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"JS", format:2,grid:0};
   this.AV18AgendaDataTela = gx.date.nullDate() ;
   this.ZV18AgendaDataTela = gx.date.nullDate() ;
   this.OV18AgendaDataTela = gx.date.nullDate() ;
   this.AV10AgendaHoraInicial = "" ;
   this.ZV10AgendaHoraInicial = "" ;
   this.OV10AgendaHoraInicial = "" ;
   this.AV9AgendaHoraFinal = "" ;
   this.ZV9AgendaHoraFinal = "" ;
   this.OV9AgendaHoraFinal = "" ;
   this.AV18AgendaDataTela = gx.date.nullDate() ;
   this.AV10AgendaHoraInicial = "" ;
   this.AV9AgendaHoraFinal = "" ;
   this.AV8AgendaData = gx.date.nullDate() ;
   this.AV5AgendaId = 0 ;
   this.AV11AgendaNoCompromisso = 0 ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8566ProfissionalId = 0 ;
   this.A8565AgendaHoraFinal = "" ;
   this.A11710AgendaNoCompromisso = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8608ProfissionalNome = "" ;
   this.A8570AgendaId = 0 ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A8569AgendaMotivo = "" ;
   this.Events = {"e112gv2_client": ["'FECHAR'", true] ,"e122gv2_client": ["ENTER", true] ,"e152gv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7hasErro',fld:'vHASERRO'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'AV8AgendaData',fld:'vAGENDADATA',hsh:true},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'AV5AgendaId',fld:'vAGENDAID',hsh:true},{av:'AV15SdtProfissional',fld:'vSDTPROFISSIONAL'},{av:'AV18AgendaDataTela',fld:'vAGENDADATATELA'},{av:'AV10AgendaHoraInicial',fld:'vAGENDAHORAINICIAL'},{av:'AV9AgendaHoraFinal',fld:'vAGENDAHORAFINAL'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A8569AgendaMotivo',fld:'AGENDAMOTIVO'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV6AuxAgendaNoCompromisso',fld:'vAUXAGENDANOCOMPROMISSO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV19isConsisteHoras',fld:'vISCONSISTEHORAS'},{av:'AV14HoraInicialAux',fld:'vHORAINICIALAUX'},{av:'AV13HoraFinalAux',fld:'vHORAFINALAUX'},{av:'A11710AgendaNoCompromisso',fld:'AGENDANOCOMPROMISSO'},{av:'AV11AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO',hsh:true},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'}],[{av:'AV26GXV1',fld:'vGXV1'},{av:'AV16SdtProfissionalItem',fld:'vSDTPROFISSIONALITEM'},{av:'AV6AuxAgendaNoCompromisso',fld:'vAUXAGENDANOCOMPROMISSO'},{av:'AV18AgendaDataTela',fld:'vAGENDADATATELA'},{av:'AV10AgendaHoraInicial',fld:'vAGENDAHORAINICIAL'},{av:'AV9AgendaHoraFinal',fld:'vAGENDAHORAFINAL'},{av:'AV20QtdeHoraCompro',fld:'vQTDEHORACOMPRO'},{av:'AV7hasErro',fld:'vHASERRO'},{av:'AV19isConsisteHoras',fld:'vISCONSISTEHORAS'},{av:'AV14HoraInicialAux',fld:'vHORAINICIALAUX'},{av:'AV13HoraFinalAux',fld:'vHORAFINALAUX'},{av:'AV15SdtProfissional',fld:'vSDTPROFISSIONAL'},{av:'AV12DescProfissional',fld:'vDESCPROFISSIONAL'},{av:'AV17virgula',fld:'vVIRGULA'},{av:'AV29GXLvl133',fld:'vGXLVL133'},{av:'AV21HoraInicialDisp',fld:'vHORAINICIALDISP'},{av:'AV22SplitQtdeHoraCompro',fld:'vSPLITQTDEHORACOMPRO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8AgendaData", "vAGENDADATA", 0, "date");
   this.setVCMap("AV5AgendaId", "vAGENDAID", 0, "int");
   this.setVCMap("AV11AgendaNoCompromisso", "vAGENDANOCOMPROMISSO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnovaagenda());
