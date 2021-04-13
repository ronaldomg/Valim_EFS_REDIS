/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:15:23.16
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcompromisso', false, function () {
   this.ServerClass =  "hregistrarcompromisso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV105isHabilita=gx.fn.getControlValue("vISHABILITA") ;
      this.AV20ProfissionalId=gx.fn.getIntegerValue("vPROFISSIONALID",'.') ;
      this.AV77AgendaId=gx.fn.getIntegerValue("vAGENDAID",'.') ;
      this.AV78AgendaDataParm=gx.fn.getDateValue("vAGENDADATAPARM") ;
   };
   this.Validv_Agendatipocompromissoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAGENDATIPOCOMPROMISSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vAGENDADATA","Visible", this.AV79TipoCompromisso=="U" );
      gx.fn.setCtrlProperty("TABPERIODO","Visible", this.AV79TipoCompromisso!="U" );
   };
   this.s132_client=function()
   {
      if ( this.AV109TpTela == 1 )
      {
         gx.fn.setCtrlProperty("TXTTIPO","Visible", this.Gx_mode=="INS" );
         gx.fn.setCtrlProperty("vTIPOCOMPROMISSO","Visible", this.Gx_mode=="INS" );
         gx.fn.setCtrlProperty("AVANCAR","Visible", true );
         gx.fn.setCtrlProperty("CANCELAR1","Visible", false );
         this.AV105isHabilita =  true  ;
         this.s172_client();
         gx.fn.setCtrlProperty("TAB2","Visible", this.Gx_mode=="UPD" );
         this.AV105isHabilita =  false  ;
         this.s182_client();
         gx.fn.setCtrlProperty("BTNNOVAAGENDA","Visible", this.Gx_mode=="UPD" );
         gx.fn.setCtrlProperty("BTNEXCLUIR","Visible", this.Gx_mode=="UPD" );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", false );
      }
      else if ( this.AV109TpTela == 2 )
      {
         this.AV105isHabilita =  false  ;
         this.s172_client();
         this.AV105isHabilita =  true  ;
         this.s182_client();
         gx.fn.setCtrlProperty("TAB2","Visible", true );
         gx.fn.setCtrlProperty("AVANCAR","Visible", false );
         gx.fn.setCtrlProperty("CANCELAR1","Visible", true );
         gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", true );
         gx.fn.setCtrlProperty("BTNNOVAAGENDA","Visible", this.Gx_mode=="UPD" );
         gx.fn.setCtrlProperty("BTNEXCLUIR","Visible", this.Gx_mode=="UPD" );
      }
   };
   this.s172_client=function()
   {
      gx.fn.setCtrlProperty("vTIPOCOMPROMISSO","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDADATA","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDADATAINI","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDADATAFIN","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDAHORAINICIAL","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDAHORAFINAL","Enabled", this.AV105isHabilita );
   };
   this.s182_client=function()
   {
      gx.fn.setCtrlProperty("vAGENDATIPOCOMPROMISSOID","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vPESSOAID","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("vAGENDAMOTIVO","Enabled", this.AV105isHabilita );
      gx.fn.setCtrlProperty("CTLSNMARCADO","Enabled", this.AV105isHabilita );
   };
   this.e191ct1_client=function()
   {
      this.clearMessages();
      this.s112_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vAGENDADATA","Visible")',ctrl:'vAGENDADATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERIODO","Visible")',ctrl:'TABPERIODO',prop:'Visible'}]);
   };
   this.e111ct2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121ct2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131ct2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", false, null, false, false);
   };
   this.e141ct2_client=function()
   {
      this.executeServerEvent("'NOVAAGENDA'", false, null, false, false);
   };
   this.e151ct2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e201ct2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,21,23,24,27,29,31,33,35,38,40,42,50,53,56,58,59,62,64,65,68,71,73,75,77,78,79,80,81,82,93,94,97,98,99,100,101,102,103,105,106,107];
   this.GXLastCtrlId =107;
   this.GridprofissionalContainer = new gx.grid.grid(this, 2,"WbpLvl2",76,"Gridprofissional","Gridprofissional","GridprofissionalContainer",this.CmpContext,this.IsMasterPage,"hregistrarcompromisso",[],false,1,true,true,0,false,false,false,"CollSdtProfissional.SdtProfissionalItem",0,"px","Novo registro",false,false,false,null,null,false,"AV36SdtProfissional",false,[1,1,1,1]);
   var GridprofissionalContainer = this.GridprofissionalContainer;
   GridprofissionalContainer.addCheckBox("GXV125",77,"CTLSNMARCADO","","","SnMarcado","char","S","N",null,true,false,0,"px","");
   GridprofissionalContainer.addSingleLineEdit("GXV126",78,"CTLPROFISSIONALEMPRESAID","Empresa do Profissional","","ProfissionalEmpresaId","char",0,"px",10,10,"left",null,[],"GXV126","GXV126",false,0,false,false,"Attribute",1,"");
   GridprofissionalContainer.addSingleLineEdit("GXV127",79,"CTLPROFISSIONALID","Cód.","","ProfissionalId","int",0,"px",4,4,"right",null,[],"GXV127","GXV127",true,0,false,false,"SemQuebraGrid",1,"");
   GridprofissionalContainer.addSingleLineEdit("GXV128",80,"CTLPROFISSIONALNOME","Nome do profissional","","ProfissionalNome","svchar",0,"px",40,40,"left",null,[],"GXV128","GXV128",true,0,false,false,"SemQuebraGrid",1,"");
   GridprofissionalContainer.addSingleLineEdit("GXV129",81,"CTLSEQUENCIA","Sequencia","","Sequencia","int",0,"px",4,4,"right",null,[],"GXV129","GXV129",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridprofissionalContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TAB1",grid:0};
   GXValidFnc[11]={fld:"TABLE6",grid:0};
   GXValidFnc[14]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOMPROMISSO",gxz:"ZV79TipoCompromisso",gxold:"OV79TipoCompromisso",gxvar:"AV79TipoCompromisso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV79TipoCompromisso=Value},v2z:function(Value){gx.O.ZV79TipoCompromisso=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCOMPROMISSO",gx.O.AV79TipoCompromisso)},c2v:function(){gx.O.AV79TipoCompromisso=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOMPROMISSO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDADATA",gxz:"ZV12AgendaData",gxold:"OV12AgendaData",gxvar:"AV12AgendaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12AgendaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12AgendaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vAGENDADATA",gx.O.AV12AgendaData,0)},c2v:function(){gx.O.AV12AgendaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vAGENDADATA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABPERIODO",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDADATAINI",gxz:"ZV104AgendaDataIni",gxold:"OV104AgendaDataIni",gxvar:"AV104AgendaDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104AgendaDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV104AgendaDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vAGENDADATAINI",gx.O.AV104AgendaDataIni,0)},c2v:function(){gx.O.AV104AgendaDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vAGENDADATAINI")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDADATAFIN",gxz:"ZV103AgendaDataFin",gxold:"OV103AgendaDataFin",gxvar:"AV103AgendaDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103AgendaDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV103AgendaDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vAGENDADATAFIN",gx.O.AV103AgendaDataFin,0)},c2v:function(){gx.O.AV103AgendaDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vAGENDADATAFIN")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE7",grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDAHORAINICIAL",gxz:"ZV13AgendaHoraInicial",gxold:"OV13AgendaHoraInicial",gxvar:"AV13AgendaHoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13AgendaHoraInicial=Value},v2z:function(Value){gx.O.ZV13AgendaHoraInicial=Value},v2c:function(){gx.fn.setControlValue("vAGENDAHORAINICIAL",gx.O.AV13AgendaHoraInicial,0)},c2v:function(){gx.O.AV13AgendaHoraInicial=this.val()},val:function(){return gx.fn.getControlValue("vAGENDAHORAINICIAL")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDAHORAFINAL",gxz:"ZV14AgendaHoraFinal",gxold:"OV14AgendaHoraFinal",gxvar:"AV14AgendaHoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14AgendaHoraFinal=Value},v2z:function(Value){gx.O.ZV14AgendaHoraFinal=Value},v2c:function(){gx.fn.setControlValue("vAGENDAHORAFINAL",gx.O.AV14AgendaHoraFinal,0)},c2v:function(){gx.O.AV14AgendaHoraFinal=this.val()},val:function(){return gx.fn.getControlValue("vAGENDAHORAFINAL")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TAB2",grid:0};
   GXValidFnc[53]={fld:"TABLE8545",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Agendatipocompromissoid,isvalid:null,rgrid:[],fld:"vAGENDATIPOCOMPROMISSOID",gxz:"ZV15AgendaTipoCompromissoId",gxold:"OV15AgendaTipoCompromissoId",gxvar:"AV15AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOID",gx.O.AV15AgendaTipoCompromissoId,0)},c2v:function(){gx.O.AV15AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDATIPOCOMPROMISSODESC",gxz:"ZV18AgendaTipoCompromissoDesc",gxold:"OV18AgendaTipoCompromissoDesc",gxvar:"AV18AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.ZV18AgendaTipoCompromissoDesc=Value},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSODESC",gx.O.AV18AgendaTipoCompromissoDesc,0)},c2v:function(){gx.O.AV18AgendaTipoCompromissoDesc=this.val()},val:function(){return gx.fn.getControlValue("vAGENDATIPOCOMPROMISSODESC")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV16PessoaId",gxold:"OV16PessoaId",gxvar:"AV16PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV16PessoaId,0)},c2v:function(){gx.O.AV16PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV19PessoaFantasia",gxold:"OV19PessoaFantasia",gxvar:"AV19PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaFantasia=Value},v2z:function(Value){gx.O.ZV19PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV19PessoaFantasia,0)},c2v:function(){gx.O.AV19PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TABLE3",grid:0};
   GXValidFnc[71]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDAMOTIVO",gxz:"ZV17AgendaMotivo",gxold:"OV17AgendaMotivo",gxvar:"AV17AgendaMotivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AgendaMotivo=Value},v2z:function(Value){gx.O.ZV17AgendaMotivo=Value},v2c:function(){gx.fn.setControlValue("vAGENDAMOTIVO",gx.O.AV17AgendaMotivo,0)},c2v:function(){gx.O.AV17AgendaMotivo=this.val()},val:function(){return gx.fn.getControlValue("vAGENDAMOTIVO")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[77]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:76,gxgrid:this.GridprofissionalContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV121GXV125",gxold:"OV121GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV125=Value},v2z:function(Value){gx.O.ZV121GXV125=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(76),gx.O.GXV125,"S")},c2v:function(){gx.O.GXV125=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[78]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:76,gxgrid:this.GridprofissionalContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALEMPRESAID",gxz:"ZV122GXV126",gxold:"OV122GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV126=Value},v2z:function(Value){gx.O.ZV122GXV126=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(76),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:76,gxgrid:this.GridprofissionalContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALID",gxz:"ZV123GXV127",gxold:"OV123GXV127",gxvar:"GXV127",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV127=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123GXV127=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(76),gx.O.GXV127,0)},c2v:function(){gx.O.GXV127=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPROFISSIONALID",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:76,gxgrid:this.GridprofissionalContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALNOME",gxz:"ZV124GXV128",gxold:"OV124GXV128",gxvar:"GXV128",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV128=Value},v2z:function(Value){gx.O.ZV124GXV128=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(76),gx.O.GXV128,0)},c2v:function(){gx.O.GXV128=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPROFISSIONALNOME",row || gx.fn.currentGridRowImpl(76))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:76,gxgrid:this.GridprofissionalContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQUENCIA",gxz:"ZV125GXV129",gxold:"OV125GXV129",gxvar:"GXV129",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV129=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125GXV129=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(76),gx.O.GXV129,0)},c2v:function(){gx.O.GXV129=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(76),'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[93]={fld:"JS", format:2,grid:0};
   GXValidFnc[94]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDANOCOMPROMISSO",gxz:"ZV110AgendaNoCompromisso",gxold:"OV110AgendaNoCompromisso",gxvar:"AV110AgendaNoCompromisso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110AgendaNoCompromisso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110AgendaNoCompromisso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDANOCOMPROMISSO",gx.O.AV110AgendaNoCompromisso,0)},c2v:function(){gx.O.AV110AgendaNoCompromisso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDANOCOMPROMISSO",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV64EmpresaPessoasEmpresaId",gxold:"OV64EmpresaPessoasEmpresaId",gxvar:"AV64EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV64EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV64EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV64EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACTERES",gxz:"ZV42Caracteres",gxold:"OV42Caracteres",gxvar:"AV42Caracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Caracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Caracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCARACTERES",gx.O.AV42Caracteres,0)},c2v:function(){gx.O.AV42Caracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV108Sim",gxold:"OV108Sim",gxvar:"AV108Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108Sim=Value},v2z:function(Value){gx.O.ZV108Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV108Sim,0)},c2v:function(){gx.O.AV108Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV106Nao",gxold:"OV106Nao",gxvar:"AV106Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106Nao=Value},v2z:function(Value){gx.O.ZV106Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV106Nao,0)},c2v:function(){gx.O.AV106Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV26ProfissionalEmpresaId",gxold:"OV26ProfissionalEmpresaId",gxvar:"AV26ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV26ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV26ProfissionalEmpresaId,0)},c2v:function(){gx.O.AV26ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV109TpTela",gxold:"OV109TpTela",gxvar:"AV109TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109TpTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV109TpTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV109TpTela,0)},c2v:function(){gx.O.AV109TpTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPTELA",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"BTNHELP",grid:0};
   GXValidFnc[106]={fld:"PROMPT_AGENDATIPOCOMPROMISSOID",grid:0};
   GXValidFnc[107]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV79TipoCompromisso = "" ;
   this.ZV79TipoCompromisso = "" ;
   this.OV79TipoCompromisso = "" ;
   this.AV12AgendaData = gx.date.nullDate() ;
   this.ZV12AgendaData = gx.date.nullDate() ;
   this.OV12AgendaData = gx.date.nullDate() ;
   this.AV104AgendaDataIni = gx.date.nullDate() ;
   this.ZV104AgendaDataIni = gx.date.nullDate() ;
   this.OV104AgendaDataIni = gx.date.nullDate() ;
   this.AV103AgendaDataFin = gx.date.nullDate() ;
   this.ZV103AgendaDataFin = gx.date.nullDate() ;
   this.OV103AgendaDataFin = gx.date.nullDate() ;
   this.AV13AgendaHoraInicial = "" ;
   this.ZV13AgendaHoraInicial = "" ;
   this.OV13AgendaHoraInicial = "" ;
   this.AV14AgendaHoraFinal = "" ;
   this.ZV14AgendaHoraFinal = "" ;
   this.OV14AgendaHoraFinal = "" ;
   this.AV15AgendaTipoCompromissoId = 0 ;
   this.ZV15AgendaTipoCompromissoId = 0 ;
   this.OV15AgendaTipoCompromissoId = 0 ;
   this.AV18AgendaTipoCompromissoDesc = "" ;
   this.ZV18AgendaTipoCompromissoDesc = "" ;
   this.OV18AgendaTipoCompromissoDesc = "" ;
   this.AV16PessoaId = 0 ;
   this.ZV16PessoaId = 0 ;
   this.OV16PessoaId = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.ZV19PessoaFantasia = "" ;
   this.OV19PessoaFantasia = "" ;
   this.AV17AgendaMotivo = "" ;
   this.ZV17AgendaMotivo = "" ;
   this.OV17AgendaMotivo = "" ;
   this.ZV121GXV125 = "" ;
   this.OV121GXV125 = "" ;
   this.ZV122GXV126 = "" ;
   this.OV122GXV126 = "" ;
   this.ZV123GXV127 = 0 ;
   this.OV123GXV127 = 0 ;
   this.ZV124GXV128 = "" ;
   this.OV124GXV128 = "" ;
   this.ZV125GXV129 = 0 ;
   this.OV125GXV129 = 0 ;
   this.AV110AgendaNoCompromisso = 0 ;
   this.ZV110AgendaNoCompromisso = 0 ;
   this.OV110AgendaNoCompromisso = 0 ;
   this.AV64EmpresaPessoasEmpresaId = "" ;
   this.ZV64EmpresaPessoasEmpresaId = "" ;
   this.OV64EmpresaPessoasEmpresaId = "" ;
   this.AV42Caracteres = 0 ;
   this.ZV42Caracteres = 0 ;
   this.OV42Caracteres = 0 ;
   this.AV108Sim = "" ;
   this.ZV108Sim = "" ;
   this.OV108Sim = "" ;
   this.AV106Nao = "" ;
   this.ZV106Nao = "" ;
   this.OV106Nao = "" ;
   this.AV26ProfissionalEmpresaId = "" ;
   this.ZV26ProfissionalEmpresaId = "" ;
   this.OV26ProfissionalEmpresaId = "" ;
   this.AV109TpTela = 0 ;
   this.ZV109TpTela = 0 ;
   this.OV109TpTela = 0 ;
   this.AV79TipoCompromisso = "" ;
   this.AV12AgendaData = gx.date.nullDate() ;
   this.AV104AgendaDataIni = gx.date.nullDate() ;
   this.AV103AgendaDataFin = gx.date.nullDate() ;
   this.AV13AgendaHoraInicial = "" ;
   this.AV14AgendaHoraFinal = "" ;
   this.AV15AgendaTipoCompromissoId = 0 ;
   this.AV18AgendaTipoCompromissoDesc = "" ;
   this.AV16PessoaId = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.AV17AgendaMotivo = "" ;
   this.AV110AgendaNoCompromisso = 0 ;
   this.AV64EmpresaPessoasEmpresaId = "" ;
   this.AV42Caracteres = 0 ;
   this.AV108Sim = "" ;
   this.AV106Nao = "" ;
   this.AV26ProfissionalEmpresaId = "" ;
   this.AV109TpTela = 0 ;
   this.AV20ProfissionalId = 0 ;
   this.AV77AgendaId = 0 ;
   this.AV78AgendaDataParm = gx.date.nullDate() ;
   this.GXV125 = "" ;
   this.GXV126 = "" ;
   this.GXV127 = 0 ;
   this.GXV128 = "" ;
   this.GXV129 = 0 ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8570AgendaId = 0 ;
   this.A8564AgendaHoraInicial = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A8569AgendaMotivo = "" ;
   this.A11710AgendaNoCompromisso = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.Gx_mode = "" ;
   this.AV105isHabilita = false ;
   this.Events = {"e111ct2_client": ["ENTER", true] ,"e121ct2_client": ["'FECHAR'", true] ,"e131ct2_client": ["'EXCLUIR'", true] ,"e141ct2_client": ["'NOVAAGENDA'", true] ,"e151ct2_client": ["'CANCELAR'", true] ,"e201ct2_client": ["CANCEL", true] ,"e191ct1_client": ["VTIPOCOMPROMISSO.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDPROFISSIONAL_nFirstRecordOnPage'},{av:'GRIDPROFISSIONAL_nEOF'},{av:'AV36SdtProfissional',fld:'vSDTPROFISSIONAL',grid:76},{av:'AV109TpTela',fld:'vTPTELA'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV105isHabilita',fld:'vISHABILITA'}],[{av:'gx.fn.getCtrlProperty("TXTTIPO","Visible")',ctrl:'TXTTIPO',prop:'Visible'},{ctrl:'vTIPOCOMPROMISSO'},{ctrl:'AVANCAR',prop:'Visible'},{ctrl:'CANCELAR1',prop:'Visible'},{av:'AV105isHabilita',fld:'vISHABILITA'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{ctrl:'BTNNOVAAGENDA',prop:'Visible'},{ctrl:'BTNEXCLUIR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vAGENDADATA","Enabled")',ctrl:'vAGENDADATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDADATAINI","Enabled")',ctrl:'vAGENDADATAINI',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDADATAFIN","Enabled")',ctrl:'vAGENDADATAFIN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDAHORAINICIAL","Enabled")',ctrl:'vAGENDAHORAINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDAHORAFINAL","Enabled")',ctrl:'vAGENDAHORAFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDATIPOCOMPROMISSOID","Enabled")',ctrl:'vAGENDATIPOCOMPROMISSOID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPESSOAID","Enabled")',ctrl:'vPESSOAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAGENDAMOTIVO","Enabled")',ctrl:'vAGENDAMOTIVO',prop:'Enabled'},{ctrl:'CTLSNMARCADO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV109TpTela',fld:'vTPTELA'},{av:'AV101hasErro',fld:'vHASERRO'},{av:'AV36SdtProfissional',fld:'vSDTPROFISSIONAL',grid:76},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8572AgendaTipoCompromissoDesc',fld:'AGENDATIPOCOMPROMISSODESC'},{av:'AV15AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV17AgendaMotivo',fld:'vAGENDAMOTIVO'},{av:'AV19PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV104AgendaDataIni',fld:'vAGENDADATAINI'},{av:'AV103AgendaDataFin',fld:'vAGENDADATAFIN'},{av:'AV13AgendaHoraInicial',fld:'vAGENDAHORAINICIAL'},{av:'AV14AgendaHoraFinal',fld:'vAGENDAHORAFINAL'},{av:'AV64EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV16PessoaId',fld:'vPESSOAID'},{av:'AV26ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'AV20ProfissionalId',fld:'vPROFISSIONALID',hsh:true},{av:'AV78AgendaDataParm',fld:'vAGENDADATAPARM',hsh:true},{av:'AV110AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO'},{av:'AV12AgendaData',fld:'vAGENDADATA'},{av:'AV79TipoCompromisso',fld:'vTIPOCOMPROMISSO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV113QtdeHoraCompro',fld:'vQTDEHORACOMPRO'},{av:'AV111isConsisteHoras',fld:'vISCONSISTEHORAS'},{av:'AV90HoraInicialAux',fld:'vHORAINICIALAUX'},{av:'AV89HoraFinalAux',fld:'vHORAFINALAUX'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A11710AgendaNoCompromisso',fld:'AGENDANOCOMPROMISSO'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'},{av:'AV112ProfissionalIdCollection',fld:'vPROFISSIONALIDCOLLECTION'},{av:'GRIDPROFISSIONAL_nFirstRecordOnPage'},{av:'GRIDPROFISSIONAL_nEOF'},{av:'AV105isHabilita',fld:'vISHABILITA'}],[{av:'AV113QtdeHoraCompro',fld:'vQTDEHORACOMPRO'},{av:'AV109TpTela',fld:'vTPTELA'},{av:'AV15AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV18AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV17AgendaMotivo',fld:'vAGENDAMOTIVO'},{av:'AV84DataAux',fld:'vDATAAUX'},{av:'AV110AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO'},{av:'AV129GXV2',fld:'vGXV2'},{av:'AV35SdtProfissionalItem',fld:'vSDTPROFISSIONALITEM'},{av:'AV130GXV3',fld:'vGXV3'},{av:'AV101hasErro',fld:'vHASERRO'},{av:'AV103AgendaDataFin',fld:'vAGENDADATAFIN'},{av:'AV104AgendaDataIni',fld:'vAGENDADATAINI'},{av:'AV111isConsisteHoras',fld:'vISCONSISTEHORAS'},{av:'AV90HoraInicialAux',fld:'vHORAINICIALAUX'},{av:'AV89HoraFinalAux',fld:'vHORAFINALAUX'},{av:'AV36SdtProfissional',fld:'vSDTPROFISSIONAL',grid:76},{av:'AV100hasDisponibilidade',fld:'vHASDISPONIBILIDADE'},{av:'AV102hasReg',fld:'vHASREG'},{av:'AV133GXV4',fld:'vGXV4'},{av:'AV135GXLvl417',fld:'vGXLVL417'},{av:'AV136GXLvl430',fld:'vGXLVL430'},{av:'AV19PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV107qtdeProfissional',fld:'vQTDEPROFISSIONAL'},{av:'AV112ProfissionalIdCollection',fld:'vPROFISSIONALIDCOLLECTION'},{av:'AV137GXV5',fld:'vGXV5'},{av:'AV138GXLvl466',fld:'vGXLVL466'},{av:'AV116HoraInicialDisp',fld:'vHORAINICIALDISP'},{av:'AV114SplitQtdeHoraCompro',fld:'vSPLITQTDEHORACOMPRO'},{av:'AV13AgendaHoraInicial',fld:'vAGENDAHORAINICIAL'},{av:'AV14AgendaHoraFinal',fld:'vAGENDAHORAFINAL'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12AgendaData',fld:'vAGENDADATA'},{av:'AV20ProfissionalId',fld:'vPROFISSIONALID',hsh:true}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV77AgendaId',fld:'vAGENDAID',hsh:true},{av:'AV12AgendaData',fld:'vAGENDADATA'},{av:'AV110AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO'},{av:'AV20ProfissionalId',fld:'vPROFISSIONALID',hsh:true}],[{av:'AV110AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO'}]];
   this.EvtParms["VTIPOCOMPROMISSO.CLICK"] = [[{av:'AV79TipoCompromisso',fld:'vTIPOCOMPROMISSO'}],[{av:'gx.fn.getCtrlProperty("vAGENDADATA","Visible")',ctrl:'vAGENDADATA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABPERIODO","Visible")',ctrl:'TABPERIODO',prop:'Visible'}]];
   this.EvtParms["'NOVAAGENDA'"] = [[{av:'AV12AgendaData',fld:'vAGENDADATA'},{av:'AV77AgendaId',fld:'vAGENDAID',hsh:true},{av:'AV110AgendaNoCompromisso',fld:'vAGENDANOCOMPROMISSO'}],[]];
   this.EvtParms["'CANCELAR'"] = [[],[{av:'AV109TpTela',fld:'vTPTELA'}]];
   this.setPrompt("PROMPT_AGENDATIPOCOMPROMISSOID", [58]);
   this.setPrompt("PROMPT_PESSOAID", [64]);
   this.EnterCtrl = ["AVANCAR" ,"BTNCONFIRMAR"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV105isHabilita", "vISHABILITA", 0, "boolean");
   this.setVCMap("AV20ProfissionalId", "vPROFISSIONALID", 0, "int");
   this.setVCMap("AV77AgendaId", "vAGENDAID", 0, "int");
   this.setVCMap("AV78AgendaDataParm", "vAGENDADATAPARM", 0, "date");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV105isHabilita", "vISHABILITA", 0, "boolean");
   GridprofissionalContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridprofissionalContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GridprofissionalContainer.addRefreshingVar({rfrVar:"AV105isHabilita"});
   this.addGridBCProperty("Sdtprofissional", ["SnMarcado"], this.GXValidFnc[77], "AV36SdtProfissional");
   this.addGridBCProperty("Sdtprofissional", ["ProfissionalEmpresaId"], this.GXValidFnc[78], "AV36SdtProfissional");
   this.addGridBCProperty("Sdtprofissional", ["ProfissionalId"], this.GXValidFnc[79], "AV36SdtProfissional");
   this.addGridBCProperty("Sdtprofissional", ["ProfissionalNome"], this.GXValidFnc[80], "AV36SdtProfissional");
   this.addGridBCProperty("Sdtprofissional", ["Sequencia"], this.GXValidFnc[81], "AV36SdtProfissional");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcompromisso());
