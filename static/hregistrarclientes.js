/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 18:19:14.85
*/
gx.evt.autoSkip=!1;gx.define("hregistrarclientes",!1,function(){this.ServerClass="hregistrarclientes";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Pessoaid=function(){try{var n=gx.util.balloon.getNew("vPESSOAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pessoacidadeid=function(){try{var n=gx.util.balloon.getNew("vPESSOACIDADEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e111272_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e131272_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e161272_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,36,39,41,42,45,47,50,52,54,57,59,61,63,66,68,69,72,74,76,78,80,82,85,87,89,91,96,98,101,103,106,108,110,112,122,124];this.GXLastCtrlId=124;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE7",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK1",format:0,grid:0};n[14]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV7PessoaId",gxold:"OV7PessoaId",gxvar:"AV7PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7PessoaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV7PessoaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV7PessoaId,0)},c2v:function(){gx.O.AV7PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK4",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV9PessoaRazaoSocial",gxold:"OV9PessoaRazaoSocial",gxvar:"AV9PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9PessoaRazaoSocial=n},v2z:function(n){gx.O.ZV9PessoaRazaoSocial=n},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV9PessoaRazaoSocial,0)},c2v:function(){gx.O.AV9PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCK2",format:0,grid:0};n[24]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV8PessoaFantasia",gxold:"OV8PessoaFantasia",gxvar:"AV8PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8PessoaFantasia=n},v2z:function(n){gx.O.ZV8PessoaFantasia=n},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV8PessoaFantasia,0)},c2v:function(){gx.O.AV8PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCK5",format:0,grid:0};n[29]={fld:"TABLE5",grid:0};n[32]={lvl:0,type:"char",len:14,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACPF",gxz:"ZV10PessoaCPF",gxold:"OV10PessoaCPF",gxvar:"AV10PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10PessoaCPF=n},v2z:function(n){gx.O.ZV10PessoaCPF=n},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV10PessoaCPF,0)},c2v:function(){gx.O.AV10PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};n[34]={fld:"TEXTBLOCK18",format:0,grid:0};n[36]={lvl:0,type:"char",len:18,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV11PessoaCNPJ",gxold:"OV11PessoaCNPJ",gxvar:"AV11PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11PessoaCNPJ=n},v2z:function(n){gx.O.ZV11PessoaCNPJ=n},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV11PessoaCNPJ,0)},c2v:function(){gx.O.AV11PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};n[39]={fld:"TEXTBLOCK11",format:0,grid:0};n[41]={lvl:0,type:"char",len:9,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACEP",gxz:"ZV13PessoaCEP",gxold:"OV13PessoaCEP",gxvar:"AV13PessoaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13PessoaCEP=n},v2z:function(n){gx.O.ZV13PessoaCEP=n},v2c:function(){gx.fn.setControlValue("vPESSOACEP",gx.O.AV13PessoaCEP,0)},c2v:function(){gx.O.AV13PessoaCEP=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACEP")},nac:gx.falseFn};n[42]={fld:"IMGPROMPT1",grid:0};n[45]={fld:"TEXTBLOCK8",format:0,grid:0};n[47]={fld:"TABLE4",grid:0};n[50]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV14PessoaEndereco",gxold:"OV14PessoaEndereco",gxvar:"AV14PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14PessoaEndereco=n},v2z:function(n){gx.O.ZV14PessoaEndereco=n},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV14PessoaEndereco,0)},c2v:function(){gx.O.AV14PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};n[52]={fld:"TEXTBLOCK27",format:0,grid:0};n[54]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANUMEROEND",gxz:"ZV15PessoaNumeroEnd",gxold:"OV15PessoaNumeroEnd",gxvar:"AV15PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15PessoaNumeroEnd=gx.num.intval(n)},v2z:function(n){gx.O.ZV15PessoaNumeroEnd=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV15PessoaNumeroEnd,0)},c2v:function(){gx.O.AV15PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",".")},nac:gx.falseFn};n[57]={fld:"TEXTBLOCK29",format:0,grid:0};n[59]={lvl:0,type:"svchar",len:35,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABAIRRO",gxz:"ZV17PessoaBairro",gxold:"OV17PessoaBairro",gxvar:"AV17PessoaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17PessoaBairro=n},v2z:function(n){gx.O.ZV17PessoaBairro=n},v2c:function(){gx.fn.setControlValue("vPESSOABAIRRO",gx.O.AV17PessoaBairro,0)},c2v:function(){gx.O.AV17PessoaBairro=this.val()},val:function(){return gx.fn.getControlValue("vPESSOABAIRRO")},nac:gx.falseFn};n[61]={fld:"TEXTBLOCK30",format:0,grid:0};n[63]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACOMPLEMENTO",gxz:"ZV16PessoaComplemento",gxold:"OV16PessoaComplemento",gxvar:"AV16PessoaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16PessoaComplemento=n},v2z:function(n){gx.O.ZV16PessoaComplemento=n},v2c:function(){gx.fn.setControlValue("vPESSOACOMPLEMENTO",gx.O.AV16PessoaComplemento,0)},c2v:function(){gx.O.AV16PessoaComplemento=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACOMPLEMENTO")},nac:gx.falseFn};n[66]={fld:"TEXTBLOCK38",format:0,grid:0};n[68]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoacidadeid,isvalid:null,rgrid:[],fld:"vPESSOACIDADEID",gxz:"ZV18PessoaCidadeId",gxold:"OV18PessoaCidadeId",gxvar:"AV18PessoaCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18PessoaCidadeId=gx.num.intval(n)},v2z:function(n){gx.O.ZV18PessoaCidadeId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOACIDADEID",gx.O.AV18PessoaCidadeId,0)},c2v:function(){gx.O.AV18PessoaCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOACIDADEID",".")},nac:gx.falseFn};n[69]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACIDADENOME",gxz:"ZV19PessoaCidadeNome",gxold:"OV19PessoaCidadeNome",gxvar:"AV19PessoaCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19PessoaCidadeNome=n},v2z:function(n){gx.O.ZV19PessoaCidadeNome=n},v2c:function(){gx.fn.setControlValue("vPESSOACIDADENOME",gx.O.AV19PessoaCidadeNome,0)},c2v:function(){gx.O.AV19PessoaCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACIDADENOME")},nac:gx.falseFn};n[72]={fld:"TEXTBLOCK33",format:0,grid:0};n[74]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV20PessoaTelefone",gxold:"OV20PessoaTelefone",gxvar:"AV20PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20PessoaTelefone=n},v2z:function(n){gx.O.ZV20PessoaTelefone=n},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV20PessoaTelefone,0)},c2v:function(){gx.O.AV20PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};n[76]={fld:"TEXTBLOCK34",format:0,grid:0};n[78]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFAX",gxz:"ZV21PessoaFax",gxold:"OV21PessoaFax",gxvar:"AV21PessoaFax",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21PessoaFax=n},v2z:function(n){gx.O.ZV21PessoaFax=n},v2c:function(){gx.fn.setControlValue("vPESSOAFAX",gx.O.AV21PessoaFax,0)},c2v:function(){gx.O.AV21PessoaFax=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFAX")},nac:gx.falseFn};n[80]={fld:"TEXTBLOCK35",format:0,grid:0};n[82]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACELULAR",gxz:"ZV22PessoaCelular",gxold:"OV22PessoaCelular",gxvar:"AV22PessoaCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22PessoaCelular=n},v2z:function(n){gx.O.ZV22PessoaCelular=n},v2c:function(){gx.fn.setControlValue("vPESSOACELULAR",gx.O.AV22PessoaCelular,0)},c2v:function(){gx.O.AV22PessoaCelular=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACELULAR")},nac:gx.falseFn};n[85]={fld:"TEXTBLOCK52",format:0,grid:0};n[87]={lvl:0,type:"svchar",len:35,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACONTATO",gxz:"ZV12PessoaContato",gxold:"OV12PessoaContato",gxvar:"AV12PessoaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12PessoaContato=n},v2z:function(n){gx.O.ZV12PessoaContato=n},v2c:function(){gx.fn.setControlValue("vPESSOACONTATO",gx.O.AV12PessoaContato,0)},c2v:function(){gx.O.AV12PessoaContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACONTATO")},nac:gx.falseFn};n[89]={fld:"TEXTBLOCK53",format:0,grid:0};n[91]={lvl:0,type:"svchar",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONECONTATO",gxz:"ZV23PessoaTelefoneContato",gxold:"OV23PessoaTelefoneContato",gxvar:"AV23PessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23PessoaTelefoneContato=n},v2z:function(n){gx.O.ZV23PessoaTelefoneContato=n},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONECONTATO",gx.O.AV23PessoaTelefoneContato,0)},c2v:function(){gx.O.AV23PessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONECONTATO")},nac:gx.falseFn};n[96]={fld:"TEXTBLOCK19",format:0,grid:0};n[98]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATIPOCOMODATO",gxz:"ZV30PessoaTipoComodato",gxold:"OV30PessoaTipoComodato",gxvar:"AV30PessoaTipoComodato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV30PessoaTipoComodato=n},v2z:function(n){gx.O.ZV30PessoaTipoComodato=n},v2c:function(){gx.fn.setComboBoxValue("vPESSOATIPOCOMODATO",gx.O.AV30PessoaTipoComodato)},c2v:function(){gx.O.AV30PessoaTipoComodato=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATIPOCOMODATO")},nac:gx.falseFn};n[101]={fld:"TEXTBLOCK20",format:0,grid:0};n[103]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAVALORCOMODATOFIXO",gxz:"ZV31PessoaValorComodatoFixo",gxold:"OV31PessoaValorComodatoFixo",gxvar:"AV31PessoaValorComodatoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31PessoaValorComodatoFixo=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV31PessoaValorComodatoFixo=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPESSOAVALORCOMODATOFIXO",gx.O.AV31PessoaValorComodatoFixo,2,",")},c2v:function(){gx.O.AV31PessoaValorComodatoFixo=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAVALORCOMODATOFIXO",".",",")},nac:gx.falseFn};n[106]={fld:"TEXTBLOCK21",format:0,grid:0};n[108]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAVALORCOMODATODOSE",gxz:"ZV32PessoaValorComodatoDose",gxold:"OV32PessoaValorComodatoDose",gxvar:"AV32PessoaValorComodatoDose",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32PessoaValorComodatoDose=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV32PessoaValorComodatoDose=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPESSOAVALORCOMODATODOSE",gx.O.AV32PessoaValorComodatoDose,2,",")},c2v:function(){gx.O.AV32PessoaValorComodatoDose=this.val()},val:function(){return gx.fn.getDecimalValue("vPESSOAVALORCOMODATODOSE",".",",")},nac:gx.falseFn};n[110]={fld:"TEXTBLOCK6",format:0,grid:0};n[112]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAQTDEMINIMADOSE",gxz:"ZV33PessoaQtdeMinimaDose",gxold:"OV33PessoaQtdeMinimaDose",gxvar:"AV33PessoaQtdeMinimaDose",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33PessoaQtdeMinimaDose=gx.num.intval(n)},v2z:function(n){gx.O.ZV33PessoaQtdeMinimaDose=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPESSOAQTDEMINIMADOSE",gx.O.AV33PessoaQtdeMinimaDose,0)},c2v:function(){gx.O.AV33PessoaQtdeMinimaDose=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAQTDEMINIMADOSE",".")},nac:gx.falseFn};n[122]={fld:"JS",format:2,grid:0};n[124]={fld:"BTNHELP",grid:0};this.AV7PessoaId=0;this.ZV7PessoaId=0;this.OV7PessoaId=0;this.AV9PessoaRazaoSocial="";this.ZV9PessoaRazaoSocial="";this.OV9PessoaRazaoSocial="";this.AV8PessoaFantasia="";this.ZV8PessoaFantasia="";this.OV8PessoaFantasia="";this.AV10PessoaCPF="";this.ZV10PessoaCPF="";this.OV10PessoaCPF="";this.AV11PessoaCNPJ="";this.ZV11PessoaCNPJ="";this.OV11PessoaCNPJ="";this.AV13PessoaCEP="";this.ZV13PessoaCEP="";this.OV13PessoaCEP="";this.AV14PessoaEndereco="";this.ZV14PessoaEndereco="";this.OV14PessoaEndereco="";this.AV15PessoaNumeroEnd=0;this.ZV15PessoaNumeroEnd=0;this.OV15PessoaNumeroEnd=0;this.AV17PessoaBairro="";this.ZV17PessoaBairro="";this.OV17PessoaBairro="";this.AV16PessoaComplemento="";this.ZV16PessoaComplemento="";this.OV16PessoaComplemento="";this.AV18PessoaCidadeId=0;this.ZV18PessoaCidadeId=0;this.OV18PessoaCidadeId=0;this.AV19PessoaCidadeNome="";this.ZV19PessoaCidadeNome="";this.OV19PessoaCidadeNome="";this.AV20PessoaTelefone="";this.ZV20PessoaTelefone="";this.OV20PessoaTelefone="";this.AV21PessoaFax="";this.ZV21PessoaFax="";this.OV21PessoaFax="";this.AV22PessoaCelular="";this.ZV22PessoaCelular="";this.OV22PessoaCelular="";this.AV12PessoaContato="";this.ZV12PessoaContato="";this.OV12PessoaContato="";this.AV23PessoaTelefoneContato="";this.ZV23PessoaTelefoneContato="";this.OV23PessoaTelefoneContato="";this.AV30PessoaTipoComodato="";this.ZV30PessoaTipoComodato="";this.OV30PessoaTipoComodato="";this.AV31PessoaValorComodatoFixo=0;this.ZV31PessoaValorComodatoFixo=0;this.OV31PessoaValorComodatoFixo=0;this.AV32PessoaValorComodatoDose=0;this.ZV32PessoaValorComodatoDose=0;this.OV32PessoaValorComodatoDose=0;this.AV33PessoaQtdeMinimaDose=0;this.ZV33PessoaQtdeMinimaDose=0;this.OV33PessoaQtdeMinimaDose=0;this.AV7PessoaId=0;this.AV9PessoaRazaoSocial="";this.AV8PessoaFantasia="";this.AV10PessoaCPF="";this.AV11PessoaCNPJ="";this.AV13PessoaCEP="";this.AV14PessoaEndereco="";this.AV15PessoaNumeroEnd=0;this.AV17PessoaBairro="";this.AV16PessoaComplemento="";this.AV18PessoaCidadeId=0;this.AV19PessoaCidadeNome="";this.AV20PessoaTelefone="";this.AV21PessoaFax="";this.AV22PessoaCelular="";this.AV12PessoaContato="";this.AV23PessoaTelefoneContato="";this.AV30PessoaTipoComodato="";this.AV31PessoaValorComodatoFixo=0;this.AV32PessoaValorComodatoDose=0;this.AV33PessoaQtdeMinimaDose=0;this.A227EmpresaPessoasEmpresaId="";this.A69PessoaId=0;this.A147CidadesId=0;this.A426PessoaBairro="";this.A432PessoaCelular="";this.A427PessoaCep="";this.A463PessoaCidadeId=0;this.A464PessoaCidadeNome="";this.A425PessoaComplemento="";this.A421PessoaContato="";this.A473PessoaCPF="";this.A423PessoaEndereco="";this.A71PessoaFantasia="";this.A430PessoaFax="";this.A424PessoaNumeroEnd=0;this.A7628PessoaQtdeMinimaDose=0;this.A70PessoaRazaoSocial="";this.A72PessoaTelefone="";this.A422PessoaTelefoneContato="";this.A7625PessoaTipoComodato="";this.A7627PessoaValorComodatoDose=0;this.A7626PessoaValorComodatoFixo=0;this.Gx_mode="";this.Events={e111272_client:["'FECHAR'",!0],e131272_client:["ENTER",!0],e161272_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE"}],[{av:'gx.fn.getCtrlProperty("vPESSOABAIRRO","Enabled")',ctrl:"vPESSOABAIRRO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACELULAR","Enabled")',ctrl:"vPESSOACELULAR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACEP","Enabled")',ctrl:"vPESSOACEP",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACIDADEID","Enabled")',ctrl:"vPESSOACIDADEID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACIDADENOME","Enabled")',ctrl:"vPESSOACIDADENOME",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACNPJ","Enabled")',ctrl:"vPESSOACNPJ",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACOMPLEMENTO","Enabled")',ctrl:"vPESSOACOMPLEMENTO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACONTATO","Enabled")',ctrl:"vPESSOACONTATO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOACPF","Enabled")',ctrl:"vPESSOACPF",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOAENDERECO","Enabled")',ctrl:"vPESSOAENDERECO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOAFANTASIA","Enabled")',ctrl:"vPESSOAFANTASIA",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOAFAX","Enabled")',ctrl:"vPESSOAFAX",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOANUMEROEND","Enabled")',ctrl:"vPESSOANUMEROEND",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOAQTDEMINIMADOSE","Enabled")',ctrl:"vPESSOAQTDEMINIMADOSE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOARAZAOSOCIAL","Enabled")',ctrl:"vPESSOARAZAOSOCIAL",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOATELEFONE","Enabled")',ctrl:"vPESSOATELEFONE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOATELEFONECONTATO","Enabled")',ctrl:"vPESSOATELEFONECONTATO",prop:"Enabled"},{ctrl:"vPESSOATIPOCOMODATO"},{av:'gx.fn.getCtrlProperty("vPESSOAVALORCOMODATODOSE","Enabled")',ctrl:"vPESSOAVALORCOMODATODOSE",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPESSOAVALORCOMODATOFIXO","Enabled")',ctrl:"vPESSOAVALORCOMODATOFIXO",prop:"Enabled"},{ctrl:"BUTTON1",prop:"Caption"}]];this.EvtParms["'FECHAR'"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV7PessoaId",fld:"vPESSOAID"}],[]];this.EvtParms.ENTER=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV9PessoaRazaoSocial",fld:"vPESSOARAZAOSOCIAL"},{av:"AV8PessoaFantasia",fld:"vPESSOAFANTASIA"},{av:"AV10PessoaCPF",fld:"vPESSOACPF"},{av:"AV11PessoaCNPJ",fld:"vPESSOACNPJ"},{av:"AV14PessoaEndereco",fld:"vPESSOAENDERECO"},{av:"AV15PessoaNumeroEnd",fld:"vPESSOANUMEROEND"},{av:"AV18PessoaCidadeId",fld:"vPESSOACIDADEID"},{av:"A147CidadesId",fld:"CIDADESID"},{av:"AV30PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"AV31PessoaValorComodatoFixo",fld:"vPESSOAVALORCOMODATOFIXO"},{av:"AV32PessoaValorComodatoDose",fld:"vPESSOAVALORCOMODATODOSE"},{av:"AV33PessoaQtdeMinimaDose",fld:"vPESSOAQTDEMINIMADOSE"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV34PessoaEmpresaId",fld:"vPESSOAEMPRESAID"},{av:"AV7PessoaId",fld:"vPESSOAID"},{av:"AV17PessoaBairro",fld:"vPESSOABAIRRO"},{av:"AV22PessoaCelular",fld:"vPESSOACELULAR"},{av:"AV13PessoaCEP",fld:"vPESSOACEP"},{av:"AV16PessoaComplemento",fld:"vPESSOACOMPLEMENTO"},{av:"AV12PessoaContato",fld:"vPESSOACONTATO"},{av:"AV21PessoaFax",fld:"vPESSOAFAX"},{av:"AV20PessoaTelefone",fld:"vPESSOATELEFONE"},{av:"AV23PessoaTelefoneContato",fld:"vPESSOATELEFONECONTATO"},{av:"AV40PessoaFantasiaSemAcento",fld:"vPESSOAFANTASIASEMACENTO"},{av:"AV41PessoaRazaoSocialSemAcento",fld:"vPESSOARAZAOSOCIALSEMACENTO"},{av:"AV19PessoaCidadeNome",fld:"vPESSOACIDADENOME"}],[{av:"AV37SnErro",fld:"vSNERRO"},{av:"AV8PessoaFantasia",fld:"vPESSOAFANTASIA"},{av:"AV39ErroCPF",fld:"vERROCPF"},{av:"AV38ErroCNPJ",fld:"vERROCNPJ"},{av:"AV49GXLvl135",fld:"vGXLVL135"},{av:"AV50GXLvl177",fld:"vGXLVL177"},{av:"AV7PessoaId",fld:"vPESSOAID"},{av:"AV40PessoaFantasiaSemAcento",fld:"vPESSOAFANTASIASEMACENTO"},{av:"AV41PessoaRazaoSocialSemAcento",fld:"vPESSOARAZAOSOCIALSEMACENTO"},{av:"AV17PessoaBairro",fld:"vPESSOABAIRRO"},{av:"AV22PessoaCelular",fld:"vPESSOACELULAR"},{av:"AV13PessoaCEP",fld:"vPESSOACEP"},{av:"AV18PessoaCidadeId",fld:"vPESSOACIDADEID"},{av:"AV19PessoaCidadeNome",fld:"vPESSOACIDADENOME"},{av:"AV11PessoaCNPJ",fld:"vPESSOACNPJ"},{av:"AV16PessoaComplemento",fld:"vPESSOACOMPLEMENTO"},{av:"AV12PessoaContato",fld:"vPESSOACONTATO"},{av:"AV10PessoaCPF",fld:"vPESSOACPF"},{av:"AV14PessoaEndereco",fld:"vPESSOAENDERECO"},{av:"AV21PessoaFax",fld:"vPESSOAFAX"},{av:"AV15PessoaNumeroEnd",fld:"vPESSOANUMEROEND"},{av:"AV33PessoaQtdeMinimaDose",fld:"vPESSOAQTDEMINIMADOSE"},{av:"AV9PessoaRazaoSocial",fld:"vPESSOARAZAOSOCIAL"},{av:"AV20PessoaTelefone",fld:"vPESSOATELEFONE"},{av:"AV23PessoaTelefoneContato",fld:"vPESSOATELEFONECONTATO"},{av:"AV30PessoaTipoComodato",fld:"vPESSOATIPOCOMODATO"},{av:"AV32PessoaValorComodatoDose",fld:"vPESSOAVALORCOMODATODOSE"},{av:"AV31PessoaValorComodatoFixo",fld:"vPESSOAVALORCOMODATOFIXO"}]];this.EnterCtrl=["BUTTON1"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new hregistrarclientes)