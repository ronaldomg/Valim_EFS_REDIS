/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:28.20
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmaniversariante', false, function () {
   this.ServerClass =  "hmodalparmaniversariante" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.e1727j1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms9",[this.AV6EmpresaLogadaId, "SEG", "SERVIDORSMTP", "PORTASMTP", "EMAILPADRAO", "NOMECONTA", "SENHAEMAIL", "ANOEMAILNIVER", "SNREQUERAUT", "SNSSL", "SNTLS"]), []);
      this.refreshOutputs([]);
   };
   this.e1227j2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1327j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1427j2_client=function()
   {
      this.executeServerEvent("'EMAIL'", false, null, false, false);
   };
   this.e1527j2_client=function()
   {
      this.executeServerEvent("'CONFIGURAçãO'", false, null, false, false);
   };
   this.e1827j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,36,38,40,43,46,49,52,62,69];
   this.GXLastCtrlId =69;
   GXValidFnc[2]={fld:"TABLE8",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPORTASMTP",gxz:"ZV14PORTASMTP",gxold:"OV14PORTASMTP",gxvar:"AV14PORTASMTP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PORTASMTP=Value},v2z:function(Value){gx.O.ZV14PORTASMTP=Value},v2c:function(){gx.fn.setControlValue("vPORTASMTP",gx.O.AV14PORTASMTP,0)},c2v:function(){gx.O.AV14PORTASMTP=this.val()},val:function(){return gx.fn.getControlValue("vPORTASMTP")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVIDORSMTP",gxz:"ZV13SERVIDORSMTP",gxold:"OV13SERVIDORSMTP",gxvar:"AV13SERVIDORSMTP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13SERVIDORSMTP=Value},v2z:function(Value){gx.O.ZV13SERVIDORSMTP=Value},v2c:function(){gx.fn.setControlValue("vSERVIDORSMTP",gx.O.AV13SERVIDORSMTP,0)},c2v:function(){gx.O.AV13SERVIDORSMTP=this.val()},val:function(){return gx.fn.getControlValue("vSERVIDORSMTP")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILPADRAO",gxz:"ZV15EMAILPADRAO",gxold:"OV15EMAILPADRAO",gxvar:"AV15EMAILPADRAO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EMAILPADRAO=Value},v2z:function(Value){gx.O.ZV15EMAILPADRAO=Value},v2c:function(){gx.fn.setControlValue("vEMAILPADRAO",gx.O.AV15EMAILPADRAO,0)},c2v:function(){gx.O.AV15EMAILPADRAO=this.val()},val:function(){return gx.fn.getControlValue("vEMAILPADRAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECONTA",gxz:"ZV16NOMECONTA",gxold:"OV16NOMECONTA",gxvar:"AV16NOMECONTA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16NOMECONTA=Value},v2z:function(Value){gx.O.ZV16NOMECONTA=Value},v2c:function(){gx.fn.setControlValue("vNOMECONTA",gx.O.AV16NOMECONTA,0)},c2v:function(){gx.O.AV16NOMECONTA=this.val()},val:function(){return gx.fn.getControlValue("vNOMECONTA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSENHAEMAIL",gxz:"ZV12SENHAEMAIL",gxold:"OV12SENHAEMAIL",gxvar:"AV12SENHAEMAIL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SENHAEMAIL=Value},v2z:function(Value){gx.O.ZV12SENHAEMAIL=Value},v2c:function(){gx.fn.setControlValue("vSENHAEMAIL",gx.O.AV12SENHAEMAIL,0)},c2v:function(){gx.O.AV12SENHAEMAIL=this.val()},val:function(){return gx.fn.getControlValue("vSENHAEMAIL")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOEMAILNIVER",gxz:"ZV20ANOEMAILNIVER",gxold:"OV20ANOEMAILNIVER",gxvar:"AV20ANOEMAILNIVER",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ANOEMAILNIVER=Value},v2z:function(Value){gx.O.ZV20ANOEMAILNIVER=Value},v2c:function(){gx.fn.setControlValue("vANOEMAILNIVER",gx.O.AV20ANOEMAILNIVER,0)},c2v:function(){gx.O.AV20ANOEMAILNIVER=this.val()},val:function(){return gx.fn.getControlValue("vANOEMAILNIVER")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE7",grid:0};
   GXValidFnc[43]={fld:"TABLE6",grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREQUERAUT",gxz:"ZV17SNREQUERAUT",gxold:"OV17SNREQUERAUT",gxvar:"AV17SNREQUERAUT",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SNREQUERAUT=Value},v2z:function(Value){gx.O.ZV17SNREQUERAUT=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNREQUERAUT",gx.O.AV17SNREQUERAUT,"S")},c2v:function(){gx.O.AV17SNREQUERAUT=this.val()},val:function(){return gx.fn.getControlValue("vSNREQUERAUT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSSL",gxz:"ZV18SNSSL",gxold:"OV18SNSSL",gxvar:"AV18SNSSL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18SNSSL=Value},v2z:function(Value){gx.O.ZV18SNSSL=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSSL",gx.O.AV18SNSSL,"S")},c2v:function(){gx.O.AV18SNSSL=this.val()},val:function(){return gx.fn.getControlValue("vSNSSL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTLS",gxz:"ZV19SNTLS",gxold:"OV19SNTLS",gxvar:"AV19SNTLS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV19SNTLS=Value},v2z:function(Value){gx.O.ZV19SNTLS=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTLS",gx.O.AV19SNTLS,"S")},c2v:function(){gx.O.AV19SNTLS=this.val()},val:function(){return gx.fn.getControlValue("vSNTLS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[62]={fld:"TABLE1",grid:0};
   GXValidFnc[69]={fld:"BTNOBS",grid:0};
   this.AV14PORTASMTP = "" ;
   this.ZV14PORTASMTP = "" ;
   this.OV14PORTASMTP = "" ;
   this.AV13SERVIDORSMTP = "" ;
   this.ZV13SERVIDORSMTP = "" ;
   this.OV13SERVIDORSMTP = "" ;
   this.AV15EMAILPADRAO = "" ;
   this.ZV15EMAILPADRAO = "" ;
   this.OV15EMAILPADRAO = "" ;
   this.AV16NOMECONTA = "" ;
   this.ZV16NOMECONTA = "" ;
   this.OV16NOMECONTA = "" ;
   this.AV12SENHAEMAIL = "" ;
   this.ZV12SENHAEMAIL = "" ;
   this.OV12SENHAEMAIL = "" ;
   this.AV20ANOEMAILNIVER = "" ;
   this.ZV20ANOEMAILNIVER = "" ;
   this.OV20ANOEMAILNIVER = "" ;
   this.AV17SNREQUERAUT = "" ;
   this.ZV17SNREQUERAUT = "" ;
   this.OV17SNREQUERAUT = "" ;
   this.AV18SNSSL = "" ;
   this.ZV18SNSSL = "" ;
   this.OV18SNSSL = "" ;
   this.AV19SNTLS = "" ;
   this.ZV19SNTLS = "" ;
   this.OV19SNTLS = "" ;
   this.AV14PORTASMTP = "" ;
   this.AV13SERVIDORSMTP = "" ;
   this.AV15EMAILPADRAO = "" ;
   this.AV16NOMECONTA = "" ;
   this.AV12SENHAEMAIL = "" ;
   this.AV20ANOEMAILNIVER = "" ;
   this.AV17SNREQUERAUT = "" ;
   this.AV18SNSSL = "" ;
   this.AV19SNTLS = "" ;
   this.A75UsuarioId = "" ;
   this.A2006UsuarioChaveEmail = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e1227j2_client": ["ENTER", true] ,"e1327j2_client": ["'FECHAR'", true] ,"e1427j2_client": ["'EMAIL'", true] ,"e1527j2_client": ["'CONFIGURAçãO'", true] ,"e1827j2_client": ["CANCEL", true] ,"e1727j1_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV13SERVIDORSMTP',fld:'vSERVIDORSMTP'},{av:'AV14PORTASMTP',fld:'vPORTASMTP'},{av:'AV15EMAILPADRAO',fld:'vEMAILPADRAO'},{av:'AV16NOMECONTA',fld:'vNOMECONTA'},{av:'AV12SENHAEMAIL',fld:'vSENHAEMAIL'},{av:'AV17SNREQUERAUT',fld:'vSNREQUERAUT'},{av:'AV18SNSSL',fld:'vSNSSL'},{av:'AV19SNTLS',fld:'vSNTLS'},{av:'AV20ANOEMAILNIVER',fld:'vANOEMAILNIVER'}],[{av:'AV13SERVIDORSMTP',fld:'vSERVIDORSMTP'},{av:'AV14PORTASMTP',fld:'vPORTASMTP'},{av:'AV15EMAILPADRAO',fld:'vEMAILPADRAO'},{av:'AV16NOMECONTA',fld:'vNOMECONTA'},{av:'AV12SENHAEMAIL',fld:'vSENHAEMAIL'},{av:'AV17SNREQUERAUT',fld:'vSNREQUERAUT'},{av:'AV18SNSSL',fld:'vSNSSL'},{av:'AV19SNTLS',fld:'vSNTLS'},{av:'AV20ANOEMAILNIVER',fld:'vANOEMAILNIVER'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.EvtParms["'EMAIL'"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A2006UsuarioChaveEmail',fld:'USUARIOCHAVEEMAIL'},{av:'AV22SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV15EMAILPADRAO',fld:'vEMAILPADRAO'},{av:'AV16NOMECONTA',fld:'vNOMECONTA'},{av:'AV13SERVIDORSMTP',fld:'vSERVIDORSMTP'},{av:'AV14PORTASMTP',fld:'vPORTASMTP'},{av:'AV12SENHAEMAIL',fld:'vSENHAEMAIL'},{av:'AV17SNREQUERAUT',fld:'vSNREQUERAUT'},{av:'AV18SNSSL',fld:'vSNSSL'},{av:'AV19SNTLS',fld:'vSNTLS'}],[{av:'AV21Chave',fld:'vCHAVE'},{av:'AV22SdtParmEmail',fld:'vSDTPARMEMAIL'}]];
   this.EvtParms["'CONFIGURAçãO'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmaniversariante());
