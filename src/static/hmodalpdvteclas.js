/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:43:54.27
*/
gx.evt.autoSkip = false;
gx.define('hmodalpdvteclas', false, function () {
   this.ServerClass =  "hmodalpdvteclas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV14Random=gx.fn.getIntegerValue("vRANDOM",'.') ;
   };
   this.e841361_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e851361_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e831361_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e821361_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e121362_client=function()
   {
      this.executeServerEvent("'F2'", false, null, false, false);
   };
   this.e131362_client=function()
   {
      this.executeServerEvent("'F3'", false, null, false, false);
   };
   this.e141362_client=function()
   {
      this.executeServerEvent("'F4'", false, null, false, false);
   };
   this.e151362_client=function()
   {
      this.executeServerEvent("'F5'", false, null, false, false);
   };
   this.e161362_client=function()
   {
      this.executeServerEvent("'F6'", false, null, false, false);
   };
   this.e171362_client=function()
   {
      this.executeServerEvent("'F7'", false, null, false, false);
   };
   this.e181362_client=function()
   {
      this.executeServerEvent("'F8'", false, null, false, false);
   };
   this.e191362_client=function()
   {
      this.executeServerEvent("'F9'", false, null, false, false);
   };
   this.e201362_client=function()
   {
      this.executeServerEvent("'F10'", false, null, false, false);
   };
   this.e211362_client=function()
   {
      this.executeServerEvent("'F11'", false, null, false, false);
   };
   this.e221362_client=function()
   {
      this.executeServerEvent("'F12'", false, null, false, false);
   };
   this.e231362_client=function()
   {
      this.executeServerEvent("'ASPAS'", false, null, false, false);
   };
   this.e241362_client=function()
   {
      this.executeServerEvent("'TECLA1'", false, null, false, false);
   };
   this.e251362_client=function()
   {
      this.executeServerEvent("'TECLA2'", false, null, false, false);
   };
   this.e261362_client=function()
   {
      this.executeServerEvent("'TECLA3'", false, null, false, false);
   };
   this.e271362_client=function()
   {
      this.executeServerEvent("'TECLA4'", false, null, false, false);
   };
   this.e281362_client=function()
   {
      this.executeServerEvent("'TECLA5'", false, null, false, false);
   };
   this.e291362_client=function()
   {
      this.executeServerEvent("'TECLA6'", false, null, false, false);
   };
   this.e301362_client=function()
   {
      this.executeServerEvent("'TECLA7'", false, null, false, false);
   };
   this.e311362_client=function()
   {
      this.executeServerEvent("'TECLA8'", false, null, false, false);
   };
   this.e321362_client=function()
   {
      this.executeServerEvent("'TECLA9'", false, null, false, false);
   };
   this.e331362_client=function()
   {
      this.executeServerEvent("'TECLA0'", false, null, false, false);
   };
   this.e341362_client=function()
   {
      this.executeServerEvent("'MENOS'", false, null, false, false);
   };
   this.e351362_client=function()
   {
      this.executeServerEvent("'MAIS'", false, null, false, false);
   };
   this.e361362_client=function()
   {
      this.executeServerEvent("'TECLAQ'", false, null, false, false);
   };
   this.e371362_client=function()
   {
      this.executeServerEvent("'TECLAW'", false, null, false, false);
   };
   this.e381362_client=function()
   {
      this.executeServerEvent("'TECLAE'", false, null, false, false);
   };
   this.e391362_client=function()
   {
      this.executeServerEvent("'TECLAR'", false, null, false, false);
   };
   this.e401362_client=function()
   {
      this.executeServerEvent("'TECLAT'", false, null, false, false);
   };
   this.e411362_client=function()
   {
      this.executeServerEvent("'TECLAY'", false, null, false, false);
   };
   this.e421362_client=function()
   {
      this.executeServerEvent("'TECLAU'", false, null, false, false);
   };
   this.e431362_client=function()
   {
      this.executeServerEvent("'TECLAI'", false, null, false, false);
   };
   this.e441362_client=function()
   {
      this.executeServerEvent("'TECLAO'", false, null, false, false);
   };
   this.e451362_client=function()
   {
      this.executeServerEvent("'TECLAP'", false, null, false, false);
   };
   this.e461362_client=function()
   {
      this.executeServerEvent("'COL1'", false, null, false, false);
   };
   this.e471362_client=function()
   {
      this.executeServerEvent("'COL2'", false, null, false, false);
   };
   this.e481362_client=function()
   {
      this.executeServerEvent("'BARRAI'", false, null, false, false);
   };
   this.e491362_client=function()
   {
      this.executeServerEvent("'CAPSLOCK'", false, null, false, false);
   };
   this.e501362_client=function()
   {
      this.executeServerEvent("'TECLAA'", false, null, false, false);
   };
   this.e511362_client=function()
   {
      this.executeServerEvent("'TECLAS'", false, null, false, false);
   };
   this.e521362_client=function()
   {
      this.executeServerEvent("'TECLAD'", false, null, false, false);
   };
   this.e531362_client=function()
   {
      this.executeServerEvent("'TECLAF'", false, null, false, false);
   };
   this.e541362_client=function()
   {
      this.executeServerEvent("'TECLAG'", false, null, false, false);
   };
   this.e551362_client=function()
   {
      this.executeServerEvent("'TECLAH'", false, null, false, false);
   };
   this.e561362_client=function()
   {
      this.executeServerEvent("'TECLAJ'", false, null, false, false);
   };
   this.e571362_client=function()
   {
      this.executeServerEvent("'TECLAK'", false, null, false, false);
   };
   this.e581362_client=function()
   {
      this.executeServerEvent("'TECLAL'", false, null, false, false);
   };
   this.e591362_client=function()
   {
      this.executeServerEvent("'PVIRGULA'", false, null, false, false);
   };
   this.e601362_client=function()
   {
      this.executeServerEvent("'AGUDO'", false, null, false, false);
   };
   this.e611362_client=function()
   {
      this.executeServerEvent("'ENTER'", false, null, false, false);
   };
   this.e621362_client=function()
   {
      this.executeServerEvent("'SHIFTLEFT'", false, null, false, false);
   };
   this.e631362_client=function()
   {
      this.executeServerEvent("'TECLAZ'", false, null, false, false);
   };
   this.e641362_client=function()
   {
      this.executeServerEvent("'TECLAX'", false, null, false, false);
   };
   this.e651362_client=function()
   {
      this.executeServerEvent("'TECLAC'", false, null, false, false);
   };
   this.e661362_client=function()
   {
      this.executeServerEvent("'TECLAV'", false, null, false, false);
   };
   this.e671362_client=function()
   {
      this.executeServerEvent("'TECLAB'", false, null, false, false);
   };
   this.e681362_client=function()
   {
      this.executeServerEvent("'TECLAN'", false, null, false, false);
   };
   this.e691362_client=function()
   {
      this.executeServerEvent("'TECLAM'", false, null, false, false);
   };
   this.e701362_client=function()
   {
      this.executeServerEvent("'VIRGULA'", false, null, false, false);
   };
   this.e711362_client=function()
   {
      this.executeServerEvent("'PONTO'", false, null, false, false);
   };
   this.e721362_client=function()
   {
      this.executeServerEvent("'BARRA'", false, null, false, false);
   };
   this.e731362_client=function()
   {
      this.executeServerEvent("'SHIFTRIGHT'", false, null, false, false);
   };
   this.e741362_client=function()
   {
      this.executeServerEvent("'CTRLLEFT'", false, null, false, false);
   };
   this.e751362_client=function()
   {
      this.executeServerEvent("'ALT'", false, null, false, false);
   };
   this.e761362_client=function()
   {
      this.executeServerEvent("'ESPACO'", false, null, false, false);
   };
   this.e771362_client=function()
   {
      this.executeServerEvent("'ALTGR'", false, null, false, false);
   };
   this.e781362_client=function()
   {
      this.executeServerEvent("'CTRLRIGHT'", false, null, false, false);
   };
   this.e791362_client=function()
   {
      this.executeServerEvent("'ASTERISCO'", false, null, false, false);
   };
   this.e801362_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e861362_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e871361_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,42,74,104,132,160,176,179,184,186,189,191,192,193,194];
   this.GXLastCtrlId =194;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[74]={fld:"TABLE6",grid:0};
   GXValidFnc[104]={fld:"TABLE7",grid:0};
   GXValidFnc[132]={fld:"TABLE4",grid:0};
   GXValidFnc[160]={fld:"TABLE8",grid:0};
   GXValidFnc[176]={fld:"TABLE9",grid:0};
   GXValidFnc[179]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[184]={fld:"NAOPERM",grid:0};
   GXValidFnc[186]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[189]={fld:"NAOPERM1",grid:0};
   GXValidFnc[191]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTEUDO",gxz:"ZV13Conteudo",gxold:"OV13Conteudo",gxvar:"AV13Conteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Conteudo=Value},v2z:function(Value){gx.O.ZV13Conteudo=Value},v2c:function(){gx.fn.setControlValue("vCONTEUDO",gx.O.AV13Conteudo,0)},c2v:function(){gx.O.AV13Conteudo=this.val()},val:function(){return gx.fn.getControlValue("vCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[193]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTNAMEATT",gxz:"ZV8IntNameAtt",gxold:"OV8IntNameAtt",gxvar:"AV8IntNameAtt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8IntNameAtt=Value},v2z:function(Value){gx.O.ZV8IntNameAtt=Value},v2c:function(){gx.fn.setControlValue("vINTNAMEATT",gx.O.AV8IntNameAtt,0)},c2v:function(){gx.O.AV8IntNameAtt=this.val()},val:function(){return gx.fn.getControlValue("vINTNAMEATT")},nac:gx.falseFn};
   GXValidFnc[194]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTNAMEVAR",gxz:"ZV9IntNameVar",gxold:"OV9IntNameVar",gxvar:"AV9IntNameVar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9IntNameVar=Value},v2z:function(Value){gx.O.ZV9IntNameVar=Value},v2c:function(){gx.fn.setControlValue("vINTNAMEVAR",gx.O.AV9IntNameVar,0)},c2v:function(){gx.O.AV9IntNameVar=this.val()},val:function(){return gx.fn.getControlValue("vINTNAMEVAR")},nac:gx.falseFn};
   this.AV13Conteudo = "" ;
   this.ZV13Conteudo = "" ;
   this.OV13Conteudo = "" ;
   this.AV8IntNameAtt = "" ;
   this.ZV8IntNameAtt = "" ;
   this.OV8IntNameAtt = "" ;
   this.AV9IntNameVar = "" ;
   this.ZV9IntNameVar = "" ;
   this.OV9IntNameVar = "" ;
   this.AV13Conteudo = "" ;
   this.AV8IntNameAtt = "" ;
   this.AV9IntNameVar = "" ;
   this.AV14Random = 0 ;
   this.A8031FormaPagtoTeclaConfiguracao = "" ;
   this.Events = {"e121362_client": ["'F2'", true] ,"e131362_client": ["'F3'", true] ,"e141362_client": ["'F4'", true] ,"e151362_client": ["'F5'", true] ,"e161362_client": ["'F6'", true] ,"e171362_client": ["'F7'", true] ,"e181362_client": ["'F8'", true] ,"e191362_client": ["'F9'", true] ,"e201362_client": ["'F10'", true] ,"e211362_client": ["'F11'", true] ,"e221362_client": ["'F12'", true] ,"e231362_client": ["'ASPAS'", true] ,"e241362_client": ["'TECLA1'", true] ,"e251362_client": ["'TECLA2'", true] ,"e261362_client": ["'TECLA3'", true] ,"e271362_client": ["'TECLA4'", true] ,"e281362_client": ["'TECLA5'", true] ,"e291362_client": ["'TECLA6'", true] ,"e301362_client": ["'TECLA7'", true] ,"e311362_client": ["'TECLA8'", true] ,"e321362_client": ["'TECLA9'", true] ,"e331362_client": ["'TECLA0'", true] ,"e341362_client": ["'MENOS'", true] ,"e351362_client": ["'MAIS'", true] ,"e361362_client": ["'TECLAQ'", true] ,"e371362_client": ["'TECLAW'", true] ,"e381362_client": ["'TECLAE'", true] ,"e391362_client": ["'TECLAR'", true] ,"e401362_client": ["'TECLAT'", true] ,"e411362_client": ["'TECLAY'", true] ,"e421362_client": ["'TECLAU'", true] ,"e431362_client": ["'TECLAI'", true] ,"e441362_client": ["'TECLAO'", true] ,"e451362_client": ["'TECLAP'", true] ,"e461362_client": ["'COL1'", true] ,"e471362_client": ["'COL2'", true] ,"e481362_client": ["'BARRAI'", true] ,"e491362_client": ["'CAPSLOCK'", true] ,"e501362_client": ["'TECLAA'", true] ,"e511362_client": ["'TECLAS'", true] ,"e521362_client": ["'TECLAD'", true] ,"e531362_client": ["'TECLAF'", true] ,"e541362_client": ["'TECLAG'", true] ,"e551362_client": ["'TECLAH'", true] ,"e561362_client": ["'TECLAJ'", true] ,"e571362_client": ["'TECLAK'", true] ,"e581362_client": ["'TECLAL'", true] ,"e591362_client": ["'PVIRGULA'", true] ,"e601362_client": ["'AGUDO'", true] ,"e611362_client": ["'ENTER'", true] ,"e621362_client": ["'SHIFTLEFT'", true] ,"e631362_client": ["'TECLAZ'", true] ,"e641362_client": ["'TECLAX'", true] ,"e651362_client": ["'TECLAC'", true] ,"e661362_client": ["'TECLAV'", true] ,"e671362_client": ["'TECLAB'", true] ,"e681362_client": ["'TECLAN'", true] ,"e691362_client": ["'TECLAM'", true] ,"e701362_client": ["'VIRGULA'", true] ,"e711362_client": ["'PONTO'", true] ,"e721362_client": ["'BARRA'", true] ,"e731362_client": ["'SHIFTRIGHT'", true] ,"e741362_client": ["'CTRLLEFT'", true] ,"e751362_client": ["'ALT'", true] ,"e761362_client": ["'ESPACO'", true] ,"e771362_client": ["'ALTGR'", true] ,"e781362_client": ["'CTRLRIGHT'", true] ,"e791362_client": ["'ASTERISCO'", true] ,"e801362_client": ["'FECHAR'", true] ,"e861362_client": ["ENTER", true] ,"e871361_client": ["CANCEL", true] ,"e841361_client": ["'ESC'", false] ,"e851361_client": ["'F1'", false] ,"e831361_client": ["'BKSPACE'", false] ,"e821361_client": ["'TAB'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'ESC'"] = [[],[]];
   this.EvtParms["'F1'"] = [[],[]];
   this.EvtParms["'F2'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F3'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F4'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F5'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F6'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F7'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F8'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F9'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F10'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F11'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'F12'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ASPAS'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA1'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA2'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA3'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA4'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA5'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA6'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA7'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA8'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA9'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLA0'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'MENOS'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'MAIS'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'BKSPACE'"] = [[],[]];
   this.EvtParms["'TAB'"] = [[],[]];
   this.EvtParms["'TECLAQ'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAW'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAE'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAR'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAY'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAU'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAI'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAO'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAP'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'COL1'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'COL2'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'BARRAI'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'CAPSLOCK'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAA'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAS'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAD'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAF'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAG'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAH'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAJ'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAK'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAL'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'PVIRGULA'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'AGUDO'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ENTER'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'SHIFTLEFT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAZ'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAX'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAC'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAV'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAB'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAN'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'TECLAM'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'VIRGULA'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'PONTO'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'BARRA'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'SHIFTRIGHT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'CTRLLEFT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ALT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ESPACO'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ALTGR'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'CTRLRIGHT'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'ASTERISCO'"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'A8031FormaPagtoTeclaConfiguracao',fld:'FORMAPAGTOTECLACONFIGURACAO'},{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true}],[{av:'AV10ValorAscII',fld:'vVALORASCII'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV13Conteudo',fld:'vCONTEUDO',hsh:true},{av:'AV14Random',fld:'vRANDOM',hsh:true},{av:'AV10ValorAscII',fld:'vVALORASCII'}],[{av:'AV11SNFechar',fld:'vSNFECHAR'},{av:'AV12NomeSessao',fld:'vNOMESESSAO'},{av:'AV8IntNameAtt',fld:'vINTNAMEATT'},{av:'AV9IntNameVar',fld:'vINTNAMEVAR'}]];
   this.setVCMap("AV14Random", "vRANDOM", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalpdvteclas());
