/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:21.14
*/
gx.evt.autoSkip = false;
gx.define('haniversarianteenviaemail', false, function () {
   this.ServerClass =  "haniversarianteenviaemail" ;
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
   };
   this.s122_client=function()
   {
      if ( (""==this.AV6Assunto) )
      {
         this.addMessage("Informe o Assunto");
         gx.fn.usrSetFocus("vASSUNTO") ;
         this.AV20Erro =  "S"  ;
      }
   };
   this.e122792_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132792_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142792_client=function()
   {
      this.executeServerEvent("'CONFIGTXTEMAIL'", false, null, false, false);
   };
   this.e172792_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,16,17,26];
   this.GXLastCtrlId =26;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV6Assunto",gxold:"OV6Assunto",gxvar:"AV6Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Assunto=Value},v2z:function(Value){gx.O.ZV6Assunto=Value},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV6Assunto,0)},c2v:function(){gx.O.AV6Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:2,grid:0};
   GXValidFnc[16]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEM",gxz:"ZV11Mensagem",gxold:"OV11Mensagem",gxvar:"AV11Mensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Mensagem=Value},v2z:function(Value){gx.O.ZV11Mensagem=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEM",gx.O.AV11Mensagem,1)},c2v:function(){gx.O.AV11Mensagem=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEM")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:2,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSNAME",gxz:"ZV29ProcessName",gxold:"OV29ProcessName",gxvar:"AV29ProcessName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProcessName=Value},v2z:function(Value){gx.O.ZV29ProcessName=Value},v2c:function(){gx.fn.setControlValue("vPROCESSNAME",gx.O.AV29ProcessName,0)},c2v:function(){gx.O.AV29ProcessName=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSNAME")},nac:gx.falseFn};
   this.AV6Assunto = "" ;
   this.ZV6Assunto = "" ;
   this.OV6Assunto = "" ;
   this.AV11Mensagem = "" ;
   this.ZV11Mensagem = "" ;
   this.OV11Mensagem = "" ;
   this.AV29ProcessName = "" ;
   this.ZV29ProcessName = "" ;
   this.OV29ProcessName = "" ;
   this.AV6Assunto = "" ;
   this.AV11Mensagem = "" ;
   this.AV29ProcessName = "" ;
   this.AV20Erro = "" ;
   this.Events = {"e122792_client": ["ENTER", true] ,"e132792_client": ["'FECHAR'", true] ,"e142792_client": ["'CONFIGTXTEMAIL'", true] ,"e172792_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV29ProcessName',fld:'vPROCESSNAME'},{av:'AV21EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV6Assunto',fld:'vASSUNTO'}],[{av:'AV30SdtAguarda',fld:'vSDTAGUARDA'},{av:'AV29ProcessName',fld:'vPROCESSNAME'},{av:'AV23OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["ENTER"] = [[{av:'Gx_time',fld:'vTIME'},{av:'AV17SdtAniversariantes',fld:'vSDTANIVERSARIANTES'},{av:'AV21EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV32CdUsuario',fld:'vCDUSUARIO'},{av:'AV6Assunto',fld:'vASSUNTO'},{av:'AV11Mensagem',fld:'vMENSAGEM'}],[{av:'AV20Erro',fld:'vERRO'},{av:'AV29ProcessName',fld:'vPROCESSNAME'},{av:'AV28Path',fld:'vPATH'},{av:'AV27FileName',fld:'vFILENAME'},{av:'AV30SdtAguarda',fld:'vSDTAGUARDA'},{av:'AV33ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV6Assunto',fld:'vASSUNTO'},{av:'AV32CdUsuario',fld:'vCDUSUARIO'},{av:'AV21EmpresaLogadaId',fld:'vEMPRESALOGADAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONFIGTXTEMAIL'"] = [[{av:'AV6Assunto',fld:'vASSUNTO'}],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new haniversarianteenviaemail());
