/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:7:0.12
*/
gx.evt.autoSkip=!1;gx.define("tfamilia",!1,function(){var n,t;this.ServerClass="tfamilia";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18FamiliaId=gx.fn.getControlValue("vFAMILIAID");this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.A2956FamiliaEmpresaId=gx.fn.getControlValue("FAMILIAEMPRESAID");this.AV19SetorEmpresaId=gx.fn.getControlValue("vSETOREMPRESAID");this.A2952SetorEmpresaId=gx.fn.getControlValue("SETOREMPRESAID");this.AV47ErrorESD=gx.fn.getControlValue("vERRORESD");this.AV48ErrorESF=gx.fn.getControlValue("vERRORESF");this.AV49ErrorECD=gx.fn.getControlValue("vERRORECD");this.AV50ErrorECF=gx.fn.getControlValue("vERRORECF");this.AV55ErrorSSD=gx.fn.getControlValue("vERRORSSD");this.AV52ErrorSSF=gx.fn.getControlValue("vERRORSSF");this.AV53ErrorSCD=gx.fn.getControlValue("vERRORSCD");this.AV54ErrorSCF=gx.fn.getControlValue("vERRORSCF");this.AV29ret=gx.fn.getIntegerValue("vRET",".");this.AV31EntD=gx.fn.getControlValue("vENTD");this.AV32EntF=gx.fn.getControlValue("vENTF");this.AV33SaiD=gx.fn.getControlValue("vSAID");this.AV34SaiF=gx.fn.getControlValue("vSAIF");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.AV21SetorId=gx.fn.getControlValue("vSETORID");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.A4426FamiliaCFOPEntDenComInscDesc=gx.fn.getControlValue("FAMILIACFOPENTDENCOMINSCDESC");this.A4428FamiliaCFOPEntDenSemInscDesc=gx.fn.getControlValue("FAMILIACFOPENTDENSEMINSCDESC");this.A4430FamiliaCFOPEntForComInscDesc=gx.fn.getControlValue("FAMILIACFOPENTFORCOMINSCDESC");this.A4432FamiliaCFOPEntForSemInscDesc=gx.fn.getControlValue("FAMILIACFOPENTFORSEMINSCDESC");this.A4434FamiliaCFOPSaiDenComInscDesc=gx.fn.getControlValue("FAMILIACFOPSAIDENCOMINSCDESC");this.A4436FamiliaCFOPSaiDenSemInscDesc=gx.fn.getControlValue("FAMILIACFOPSAIDENSEMINSCDESC");this.A4438FamiliaCFOPSaiForComInscDesc=gx.fn.getControlValue("FAMILIACFOPSAIFORCOMINSCDESC");this.A4440FamiliaCFOPSaiForSemInscDesc=gx.fn.getControlValue("FAMILIACFOPSAIFORSEMINSCDESC");this.AV60Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV59Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV26SnConsulta=gx.fn.getControlValue("vSNCONSULTA")};this.Valid_Familiaid=function(){try{var n=gx.util.balloon.getNew("FAMILIAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Familiadescricao=function(){try{var n=gx.util.balloon.getNew("FAMILIADESCRICAO");this.AnyError=0;try{this.Gx_mode=="INS"&&""==this.A2951FamiliaDescricao&&(this.A2951FamiliaDescricao=this.A2957FamiliaId)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Setorid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Setorid",["gx.O.AV19SetorEmpresaId","gx.O.A2953SetorId","gx.O.A2952SetorEmpresaId","gx.O.A2958SetorDescricao"],["A2952SetorEmpresaId","A2958SetorDescricao"]),!0};this.Valid_Familiancmcodigo=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiancmcodigo",["gx.O.A4383FamiliaNCMCodigo","gx.O.A4384FamiliaNCMDescricao","gx.O.AV41FamiliaNCMDescricao"],["A4384FamiliaNCMDescricao","AV41FamiliaNCMDescricao"]),!0};this.Valid_Familiagenerocodigo=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiagenerocodigo",["gx.O.A4385FamiliaGeneroCodigo","gx.O.A4386FamiliaGeneroDescricao","gx.O.AV42FamiliaGeneroDescricao"],["A4386FamiliaGeneroDescricao","AV42FamiliaGeneroDescricao"]),!0};this.Valid_Familiamargemmarkupcodigo=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiamargemmarkupcodigo",["gx.O.A4387FamiliaMargemMarkupCodigo","gx.O.A4388FamiliaMargemMarkupDescricao"],["A4388FamiliaMargemMarkupDescricao"]),!0};this.Valid_Familiacfopentdenseminsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopentdenseminsccod",["gx.O.A4427FamiliaCFOPEntDenSemInscCod","gx.O.AV31EntD","gx.O.A4428FamiliaCFOPEntDenSemInscDesc","gx.O.AV47ErrorESD"],["A4428FamiliaCFOPEntDenSemInscDesc","AV47ErrorESD"]),!0};this.Valid_Familiacfopentforseminsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopentforseminsccod",["gx.O.A4431FamiliaCFOPEntForSemInscCod","gx.O.AV32EntF","gx.O.A4432FamiliaCFOPEntForSemInscDesc","gx.O.AV48ErrorESF"],["A4432FamiliaCFOPEntForSemInscDesc","AV48ErrorESF"]),!0};this.Valid_Familiacfopentdencominsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopentdencominsccod",["gx.O.A4425FamiliaCFOPEntDenComInscCod","gx.O.AV31EntD","gx.O.A4426FamiliaCFOPEntDenComInscDesc","gx.O.AV49ErrorECD"],["A4426FamiliaCFOPEntDenComInscDesc","AV49ErrorECD"]),!0};this.Valid_Familiacfopentforcominsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopentforcominsccod",["gx.O.A4429FamiliaCFOPEntForComInscCod","gx.O.AV32EntF","gx.O.A4430FamiliaCFOPEntForComInscDesc","gx.O.AV50ErrorECF"],["A4430FamiliaCFOPEntForComInscDesc","AV50ErrorECF"]),!0};this.Valid_Familiacfopsaidenseminsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopsaidenseminsccod",["gx.O.A4435FamiliaCFOPSaiDenSemInscCod","gx.O.AV33SaiD","gx.O.A4436FamiliaCFOPSaiDenSemInscDesc","gx.O.AV55ErrorSSD"],["A4436FamiliaCFOPSaiDenSemInscDesc","AV55ErrorSSD"]),!0};this.Valid_Familiacfopsaiforseminsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopsaiforseminsccod",["gx.O.A4439FamiliaCFOPSaiForSemInscCod","gx.O.AV34SaiF","gx.O.A4440FamiliaCFOPSaiForSemInscDesc","gx.O.AV52ErrorSSF"],["A4440FamiliaCFOPSaiForSemInscDesc","AV52ErrorSSF"]),!0};this.Valid_Familiacfopsaidencominsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopsaidencominsccod",["gx.O.A4433FamiliaCFOPSaiDenComInscCod","gx.O.AV33SaiD","gx.O.A4434FamiliaCFOPSaiDenComInscDesc","gx.O.AV53ErrorSCD"],["A4434FamiliaCFOPSaiDenComInscDesc","AV53ErrorSCD"]),!0};this.Valid_Familiacfopsaiforcominsccod=function(){return gx.ajax.validSrvEvt("dyncall","valid_Familiacfopsaiforcominsccod",["gx.O.A4437FamiliaCFOPSaiForComInscCod","gx.O.A2957FamiliaId","gx.O.AV47ErrorESD","gx.O.A4427FamiliaCFOPEntDenSemInscCod","gx.O.AV48ErrorESF","gx.O.A4431FamiliaCFOPEntForSemInscCod","gx.O.AV49ErrorECD","gx.O.A4425FamiliaCFOPEntDenComInscCod","gx.O.AV50ErrorECF","gx.O.A4429FamiliaCFOPEntForComInscCod","gx.O.AV55ErrorSSD","gx.O.A4435FamiliaCFOPSaiDenSemInscCod","gx.O.AV52ErrorSSF","gx.O.A4439FamiliaCFOPSaiForSemInscCod","gx.O.AV53ErrorSCD","gx.O.A4433FamiliaCFOPSaiDenComInscCod","gx.O.AV54ErrorSCF","gx.O.AV34SaiF","gx.O.A4438FamiliaCFOPSaiForComInscDesc","gx.O.AV29ret"],["A4438FamiliaCFOPSaiForComInscDesc","AV29ret","AV54ErrorSCF"]),!0};this.Validv_Snalterou=function(){try{var n=gx.util.balloon.getNew("vSNALTEROU");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Familiancmdescricao=function(){try{var n=gx.util.balloon.getNew("FAMILIANCMDESCRICAO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Familiagenerodescricao=function(){try{var n=gx.util.balloon.getNew("FAMILIAGENERODESCRICAO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e126k2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e136k2_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e146k2_client=function(){this.executeServerEvent("FAMILIANCMCODIGO.ISVALID",!0,null,!1,!0)};this.e156k2_client=function(){this.executeServerEvent("FAMILIAGENEROCODIGO.ISVALID",!0,null,!1,!0)};this.e166k375_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e176k375_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,7,10,13,15,19,21,24,26,27,30,32,33,36,39,42,44,45,48,50,51,54,56,57,60,62,65,67,70,72,77,80,82,85,88,90,93,95,98,100,103,105,107,110,112,115,117,120,122,125,127,130,133,135,137,144,147,148,149,150,151,152,154,156,157,158,159,160,161,162,163,164,165,166,167,168];this.GXLastCtrlId=168;this.TABCSSContainer=gx.uc.getNew(this,6,0,"TabCss","TABCSSContainer","Tabcss");t=this.TABCSSContainer;t.setProp("Width","Width","100","str");t.setProp("Height","Height","100","str");t.addV2CFunction("AV56Tab","vTAB","SetData");t.addC2VFunction(function(n){n.ParentObject.AV56Tab=n.GetData();gx.fn.setControlValue("vTAB",n.ParentObject.AV56Tab)});t.setProp("Position","Position",1,"num");t.setProp("CookieId","Cookieid","tfamilia_tabcss","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[3]={fld:"TABLE1",grid:0};n[7]={fld:"TAB1",grid:0};n[10]={fld:"TABLE2",grid:0};n[13]={fld:"TEXTBLOCK3",format:0,grid:0};n[15]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiaid,isvalid:null,rgrid:[],fld:"FAMILIAID",gxz:"Z2957FamiliaId",gxold:"O2957FamiliaId",gxvar:"A2957FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2957FamiliaId=n},v2z:function(n){gx.O.Z2957FamiliaId=n},v2c:function(){gx.fn.setControlValue("FAMILIAID",gx.O.A2957FamiliaId,0)},c2v:function(){gx.O.A2957FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAID")},nac:function(){return!(""==this.AV18FamiliaId)}};n[19]={fld:"TEXTBLOCK4",format:0,grid:0};n[21]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiadescricao,isvalid:null,rgrid:[],fld:"FAMILIADESCRICAO",gxz:"Z2951FamiliaDescricao",gxold:"O2951FamiliaDescricao",gxvar:"A2951FamiliaDescricao",ucs:[],op:[21],ip:[21,15],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2951FamiliaDescricao=n},v2z:function(n){gx.O.Z2951FamiliaDescricao=n},v2c:function(){gx.fn.setControlValue("FAMILIADESCRICAO",gx.O.A2951FamiliaDescricao,0)},c2v:function(){gx.O.A2951FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("FAMILIADESCRICAO")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK6",format:0,grid:0};n[26]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Setorid,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[27],ip:[27,26],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2953SetorId=n},v2z:function(n){gx.O.Z2953SetorId=n},v2c:function(){gx.fn.setControlValue("SETORID",gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(){return gx.fn.getControlValue("SETORID")},nac:gx.falseFn};n[27]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2958SetorDescricao=n},v2z:function(n){gx.O.Z2958SetorDescricao=n},v2c:function(){gx.fn.setControlValue("SETORDESCRICAO",gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("SETORDESCRICAO")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK14",format:0,grid:0};n[32]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIANATUREZARECEITAID",gxz:"Z8436FamiliaNaturezaReceitaId",gxold:"O8436FamiliaNaturezaReceitaId",gxvar:"A8436FamiliaNaturezaReceitaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A8436FamiliaNaturezaReceitaId=gx.num.intval(n)},v2z:function(n){gx.O.Z8436FamiliaNaturezaReceitaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIANATUREZARECEITAID",gx.O.A8436FamiliaNaturezaReceitaId,0)},c2v:function(){gx.O.A8436FamiliaNaturezaReceitaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIANATUREZARECEITAID",".")},nac:gx.falseFn};n[33]={fld:"TAB2",grid:0};n[36]={fld:"TABLE3",grid:0};n[39]={fld:"TABLE4",grid:0};n[42]={fld:"TEXTBLOCK8",format:0,grid:0};n[44]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiancmcodigo,isvalid:"e146k2_client",rgrid:[],fld:"FAMILIANCMCODIGO",gxz:"Z4383FamiliaNCMCodigo",gxold:"O4383FamiliaNCMCodigo",gxvar:"A4383FamiliaNCMCodigo",ucs:[],op:[45,151],ip:[45,151,44],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4383FamiliaNCMCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z4383FamiliaNCMCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIANCMCODIGO",gx.O.A4383FamiliaNCMCodigo,0)},c2v:function(){gx.O.A4383FamiliaNCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIANCMCODIGO",".")},nac:gx.falseFn};n[45]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIANCMDESCRICAO",gxz:"ZV41FamiliaNCMDescricao",gxold:"OV41FamiliaNCMDescricao",gxvar:"AV41FamiliaNCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV41FamiliaNCMDescricao=n},v2z:function(n){gx.O.ZV41FamiliaNCMDescricao=n},v2c:function(){gx.fn.setControlValue("vFAMILIANCMDESCRICAO",gx.O.AV41FamiliaNCMDescricao,0)},c2v:function(){gx.O.AV41FamiliaNCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIANCMDESCRICAO")},nac:gx.falseFn};n[48]={fld:"TEXTBLOCK9",format:0,grid:0};n[50]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiagenerocodigo,isvalid:"e156k2_client",rgrid:[],fld:"FAMILIAGENEROCODIGO",gxz:"Z4385FamiliaGeneroCodigo",gxold:"O4385FamiliaGeneroCodigo",gxvar:"A4385FamiliaGeneroCodigo",ucs:[],op:[51,152],ip:[51,152,50],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4385FamiliaGeneroCodigo=n},v2z:function(n){gx.O.Z4385FamiliaGeneroCodigo=n},v2c:function(){gx.fn.setControlValue("FAMILIAGENEROCODIGO",gx.O.A4385FamiliaGeneroCodigo,0)},c2v:function(){gx.O.A4385FamiliaGeneroCodigo=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAGENEROCODIGO")},nac:gx.falseFn};n[51]={lvl:0,type:"svchar",len:160,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAGENERODESCRICAO",gxz:"ZV42FamiliaGeneroDescricao",gxold:"OV42FamiliaGeneroDescricao",gxvar:"AV42FamiliaGeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42FamiliaGeneroDescricao=n},v2z:function(n){gx.O.ZV42FamiliaGeneroDescricao=n},v2c:function(){gx.fn.setControlValue("vFAMILIAGENERODESCRICAO",gx.O.AV42FamiliaGeneroDescricao,0)},c2v:function(){gx.O.AV42FamiliaGeneroDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAGENERODESCRICAO")},nac:gx.falseFn};n[54]={fld:"TEXTBLOCK10",format:0,grid:0};n[56]={lvl:0,type:"char",len:8,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiamargemmarkupcodigo,isvalid:null,rgrid:[],fld:"FAMILIAMARGEMMARKUPCODIGO",gxz:"Z4387FamiliaMargemMarkupCodigo",gxold:"O4387FamiliaMargemMarkupCodigo",gxvar:"A4387FamiliaMargemMarkupCodigo",ucs:[],op:[57],ip:[57,56],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4387FamiliaMargemMarkupCodigo=n},v2z:function(n){gx.O.Z4387FamiliaMargemMarkupCodigo=n},v2c:function(){gx.fn.setControlValue("FAMILIAMARGEMMARKUPCODIGO",gx.O.A4387FamiliaMargemMarkupCodigo,0)},c2v:function(){gx.O.A4387FamiliaMargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAMARGEMMARKUPCODIGO")},nac:gx.falseFn};n[57]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAMARGEMMARKUPDESCRICAO",gxz:"Z4388FamiliaMargemMarkupDescricao",gxold:"O4388FamiliaMargemMarkupDescricao",gxvar:"A4388FamiliaMargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4388FamiliaMargemMarkupDescricao=n},v2z:function(n){gx.O.Z4388FamiliaMargemMarkupDescricao=n},v2c:function(){gx.fn.setControlValue("FAMILIAMARGEMMARKUPDESCRICAO",gx.O.A4388FamiliaMargemMarkupDescricao,0)},c2v:function(){gx.O.A4388FamiliaMargemMarkupDescricao=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAMARGEMMARKUPDESCRICAO")},nac:gx.falseFn};n[60]={fld:"TEXTBLOCK13",format:0,grid:0};n[62]={lvl:0,type:"decimal",len:16,dec:6,sign:!1,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAMARGEMLUCRO",gxz:"Z8407FamiliaMargemLucro",gxold:"O8407FamiliaMargemLucro",gxvar:"A8407FamiliaMargemLucro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A8407FamiliaMargemLucro=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z8407FamiliaMargemLucro=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("FAMILIAMARGEMLUCRO",gx.O.A8407FamiliaMargemLucro,6,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A8407FamiliaMargemLucro=this.val()},val:function(){return gx.fn.getDecimalValue("FAMILIAMARGEMLUCRO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[65]={fld:"TEXTBLOCK15",format:0,grid:0};n[67]={lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAPCICMSST",gxz:"Z8516FamiliaPCICMSST",gxold:"O8516FamiliaPCICMSST",gxvar:"A8516FamiliaPCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A8516FamiliaPCICMSST=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z8516FamiliaPCICMSST=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("FAMILIAPCICMSST",gx.O.A8516FamiliaPCICMSST,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A8516FamiliaPCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("FAMILIAPCICMSST",".",",")},nac:gx.falseFn};this.declareDomainHdlr(67,function(){});n[70]={fld:"TEXTBLOCK16",format:0,grid:0};n[72]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIADIFICMS",gxz:"Z8517FamiliaDifICMS",gxold:"O8517FamiliaDifICMS",gxvar:"A8517FamiliaDifICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A8517FamiliaDifICMS=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z8517FamiliaDifICMS=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("FAMILIADIFICMS",gx.O.A8517FamiliaDifICMS,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A8517FamiliaDifICMS=this.val()},val:function(){return gx.fn.getDecimalValue("FAMILIADIFICMS",".",",")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});n[77]={fld:"TABLE22",grid:0};n[80]={fld:"TEXTBLOCK97",format:0,grid:0};n[82]={fld:"TEXTBLOCK98",format:0,grid:0};n[85]={fld:"TABLE23",grid:0};n[88]={fld:"TEXTBLOCK5",format:0,grid:0};n[90]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopentdenseminsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPENTDENSEMINSCCOD",gxz:"Z4427FamiliaCFOPEntDenSemInscCod",gxold:"O4427FamiliaCFOPEntDenSemInscCod",gxvar:"A4427FamiliaCFOPEntDenSemInscCod",ucs:[],op:[],ip:[90],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4427FamiliaCFOPEntDenSemInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4427FamiliaCFOPEntDenSemInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPENTDENSEMINSCCOD",gx.O.A4427FamiliaCFOPEntDenSemInscCod,0)},c2v:function(){gx.O.A4427FamiliaCFOPEntDenSemInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPENTDENSEMINSCCOD",".")},nac:gx.falseFn};n[93]={fld:"TEXTBLOCK7",format:0,grid:0};n[95]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopentforseminsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPENTFORSEMINSCCOD",gxz:"Z4431FamiliaCFOPEntForSemInscCod",gxold:"O4431FamiliaCFOPEntForSemInscCod",gxvar:"A4431FamiliaCFOPEntForSemInscCod",ucs:[],op:[],ip:[95],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4431FamiliaCFOPEntForSemInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4431FamiliaCFOPEntForSemInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPENTFORSEMINSCCOD",gx.O.A4431FamiliaCFOPEntForSemInscCod,0)},c2v:function(){gx.O.A4431FamiliaCFOPEntForSemInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPENTFORSEMINSCCOD",".")},nac:gx.falseFn};n[98]={fld:"TEXTBLOCK11",format:0,grid:0};n[100]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopentdencominsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPENTDENCOMINSCCOD",gxz:"Z4425FamiliaCFOPEntDenComInscCod",gxold:"O4425FamiliaCFOPEntDenComInscCod",gxvar:"A4425FamiliaCFOPEntDenComInscCod",ucs:[],op:[],ip:[100],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4425FamiliaCFOPEntDenComInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4425FamiliaCFOPEntDenComInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPENTDENCOMINSCCOD",gx.O.A4425FamiliaCFOPEntDenComInscCod,0)},c2v:function(){gx.O.A4425FamiliaCFOPEntDenComInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPENTDENCOMINSCCOD",".")},nac:gx.falseFn};n[103]={fld:"TEXTBLOCK12",format:0,grid:0};n[105]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopentforcominsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPENTFORCOMINSCCOD",gxz:"Z4429FamiliaCFOPEntForComInscCod",gxold:"O4429FamiliaCFOPEntForComInscCod",gxvar:"A4429FamiliaCFOPEntForComInscCod",ucs:[],op:[],ip:[105],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4429FamiliaCFOPEntForComInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4429FamiliaCFOPEntForComInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPENTFORCOMINSCCOD",gx.O.A4429FamiliaCFOPEntForComInscCod,0)},c2v:function(){gx.O.A4429FamiliaCFOPEntForComInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPENTFORCOMINSCCOD",".")},nac:gx.falseFn};n[107]={fld:"TABLE24",grid:0};n[110]={fld:"TEXTBLOCK63",format:0,grid:0};n[112]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopsaidenseminsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPSAIDENSEMINSCCOD",gxz:"Z4435FamiliaCFOPSaiDenSemInscCod",gxold:"O4435FamiliaCFOPSaiDenSemInscCod",gxvar:"A4435FamiliaCFOPSaiDenSemInscCod",ucs:[],op:[],ip:[112],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4435FamiliaCFOPSaiDenSemInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4435FamiliaCFOPSaiDenSemInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPSAIDENSEMINSCCOD",gx.O.A4435FamiliaCFOPSaiDenSemInscCod,0)},c2v:function(){gx.O.A4435FamiliaCFOPSaiDenSemInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPSAIDENSEMINSCCOD",".")},nac:gx.falseFn};n[115]={fld:"TEXTBLOCK64",format:0,grid:0};n[117]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopsaiforseminsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPSAIFORSEMINSCCOD",gxz:"Z4439FamiliaCFOPSaiForSemInscCod",gxold:"O4439FamiliaCFOPSaiForSemInscCod",gxvar:"A4439FamiliaCFOPSaiForSemInscCod",ucs:[],op:[],ip:[117],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4439FamiliaCFOPSaiForSemInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4439FamiliaCFOPSaiForSemInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPSAIFORSEMINSCCOD",gx.O.A4439FamiliaCFOPSaiForSemInscCod,0)},c2v:function(){gx.O.A4439FamiliaCFOPSaiForSemInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPSAIFORSEMINSCCOD",".")},nac:gx.falseFn};n[120]={fld:"TEXTBLOCK65",format:0,grid:0};n[122]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopsaidencominsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPSAIDENCOMINSCCOD",gxz:"Z4433FamiliaCFOPSaiDenComInscCod",gxold:"O4433FamiliaCFOPSaiDenComInscCod",gxvar:"A4433FamiliaCFOPSaiDenComInscCod",ucs:[],op:[],ip:[122],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4433FamiliaCFOPSaiDenComInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4433FamiliaCFOPSaiDenComInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPSAIDENCOMINSCCOD",gx.O.A4433FamiliaCFOPSaiDenComInscCod,0)},c2v:function(){gx.O.A4433FamiliaCFOPSaiDenComInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPSAIDENCOMINSCCOD",".")},nac:gx.falseFn};n[125]={fld:"TEXTBLOCK66",format:0,grid:0};n[127]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Familiacfopsaiforcominsccod,isvalid:null,rgrid:[],fld:"FAMILIACFOPSAIFORCOMINSCCOD",gxz:"Z4437FamiliaCFOPSaiForComInscCod",gxold:"O4437FamiliaCFOPSaiForComInscCod",gxvar:"A4437FamiliaCFOPSaiForComInscCod",ucs:[],op:[],ip:[122,117,112,105,100,95,90,15,127],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4437FamiliaCFOPSaiForComInscCod=gx.num.intval(n)},v2z:function(n){gx.O.Z4437FamiliaCFOPSaiForComInscCod=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("FAMILIACFOPSAIFORCOMINSCCOD",gx.O.A4437FamiliaCFOPSaiForComInscCod,0)},c2v:function(){gx.O.A4437FamiliaCFOPSaiForComInscCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FAMILIACFOPSAIFORCOMINSCCOD",".")},nac:gx.falseFn};n[130]={fld:"TABLE21",grid:0};n[133]={fld:"TEXTBLOCK1",format:0,grid:0};n[135]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAUSUARIOALT",gxz:"Z2954FamiliaUsuarioAlt",gxold:"O2954FamiliaUsuarioAlt",gxvar:"A2954FamiliaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2954FamiliaUsuarioAlt=n},v2z:function(n){gx.O.Z2954FamiliaUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("FAMILIAUSUARIOALT",gx.O.A2954FamiliaUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A2954FamiliaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(135,function(){});n[137]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIADATAHORAALT",gxz:"Z2955FamiliaDataHoraAlt",gxold:"O2955FamiliaDataHoraAlt",gxvar:"A2955FamiliaDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A2955FamiliaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z2955FamiliaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("FAMILIADATAHORAALT",gx.O.A2955FamiliaDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A2955FamiliaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("FAMILIADATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(137,function(){});n[144]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snalterou,isvalid:null,rgrid:[],fld:"vSNALTEROU",gxz:"ZV20SnAlterou",gxold:"OV20SnAlterou",gxvar:"AV20SnAlterou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20SnAlterou=n},v2z:function(n){gx.O.ZV20SnAlterou=n},v2c:function(){gx.fn.setControlValue("vSNALTEROU",gx.O.AV20SnAlterou,0)},c2v:function(){gx.O.AV20SnAlterou=this.val()},val:function(){return gx.fn.getControlValue("vSNALTEROU")},nac:gx.falseFn};n[147]={fld:"JS",format:2,grid:0};n[148]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCHAR",gxz:"ZV40QtChar",gxold:"OV40QtChar",gxvar:"AV40QtChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40QtChar=gx.num.intval(n)},v2z:function(n){gx.O.ZV40QtChar=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTCHAR",gx.O.AV40QtChar,0)},c2v:function(){gx.O.AV40QtChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCHAR",".")},nac:gx.falseFn};n[149]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERROR",gxz:"ZV43Error",gxold:"OV43Error",gxvar:"AV43Error",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV43Error=n},v2z:function(n){gx.O.ZV43Error=n},v2c:function(){gx.fn.setControlValue("vERROR",gx.O.AV43Error,0)},c2v:function(){gx.O.AV43Error=this.val()},val:function(){return gx.fn.getControlValue("vERROR")},nac:gx.falseFn};n[150]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTRING",gxz:"ZV30String",gxold:"OV30String",gxvar:"AV30String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30String=n},v2z:function(n){gx.O.ZV30String=n},v2c:function(){gx.fn.setControlValue("vSTRING",gx.O.AV30String,0)},c2v:function(){gx.O.AV30String=this.val()},val:function(){return gx.fn.getControlValue("vSTRING")},nac:gx.falseFn};n[151]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Familiancmdescricao,isvalid:null,rgrid:[],fld:"FAMILIANCMDESCRICAO",gxz:"Z4384FamiliaNCMDescricao",gxold:"O4384FamiliaNCMDescricao",gxvar:"A4384FamiliaNCMDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4384FamiliaNCMDescricao=n},v2z:function(n){gx.O.Z4384FamiliaNCMDescricao=n},v2c:function(){gx.fn.setControlValue("FAMILIANCMDESCRICAO",gx.O.A4384FamiliaNCMDescricao,0)},c2v:function(){gx.O.A4384FamiliaNCMDescricao=this.val()},val:function(){return gx.fn.getControlValue("FAMILIANCMDESCRICAO")},nac:gx.falseFn};n[152]={lvl:0,type:"svchar",len:160,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Familiagenerodescricao,isvalid:null,rgrid:[],fld:"FAMILIAGENERODESCRICAO",gxz:"Z4386FamiliaGeneroDescricao",gxold:"O4386FamiliaGeneroDescricao",gxvar:"A4386FamiliaGeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A4386FamiliaGeneroDescricao=n},v2z:function(n){gx.O.Z4386FamiliaGeneroDescricao=n},v2c:function(){gx.fn.setControlValue("FAMILIAGENERODESCRICAO",gx.O.A4386FamiliaGeneroDescricao,0)},c2v:function(){gx.O.A4386FamiliaGeneroDescricao=this.val()},val:function(){return gx.fn.getControlValue("FAMILIAGENERODESCRICAO")},nac:gx.falseFn};n[154]={fld:"BTNHELP",grid:0};n[156]={fld:"PROMPT_2953",grid:375};n[157]={fld:"PROMPT_8436",grid:375};n[158]={fld:"PROMPT_4383",grid:375};n[159]={fld:"PROMPT_4385",grid:375};n[160]={fld:"PROMPT_4387",grid:375};n[161]={fld:"PROMPT_4427",grid:375};n[162]={fld:"PROMPT_4431",grid:375};n[163]={fld:"PROMPT_4425",grid:375};n[164]={fld:"PROMPT_4429",grid:375};n[165]={fld:"PROMPT_4435",grid:375};n[166]={fld:"PROMPT_4439",grid:375};n[167]={fld:"PROMPT_4433",grid:375};n[168]={fld:"PROMPT_4437",grid:375};this.A2957FamiliaId="";this.Z2957FamiliaId="";this.O2957FamiliaId="";this.A2951FamiliaDescricao="";this.Z2951FamiliaDescricao="";this.O2951FamiliaDescricao="";this.A2953SetorId="";this.Z2953SetorId="";this.O2953SetorId="";this.A2958SetorDescricao="";this.Z2958SetorDescricao="";this.O2958SetorDescricao="";this.A8436FamiliaNaturezaReceitaId=0;this.Z8436FamiliaNaturezaReceitaId=0;this.O8436FamiliaNaturezaReceitaId=0;this.A4383FamiliaNCMCodigo=0;this.Z4383FamiliaNCMCodigo=0;this.O4383FamiliaNCMCodigo=0;this.AV41FamiliaNCMDescricao="";this.ZV41FamiliaNCMDescricao="";this.OV41FamiliaNCMDescricao="";this.A4385FamiliaGeneroCodigo="";this.Z4385FamiliaGeneroCodigo="";this.O4385FamiliaGeneroCodigo="";this.AV42FamiliaGeneroDescricao="";this.ZV42FamiliaGeneroDescricao="";this.OV42FamiliaGeneroDescricao="";this.A4387FamiliaMargemMarkupCodigo="";this.Z4387FamiliaMargemMarkupCodigo="";this.O4387FamiliaMargemMarkupCodigo="";this.A4388FamiliaMargemMarkupDescricao="";this.Z4388FamiliaMargemMarkupDescricao="";this.O4388FamiliaMargemMarkupDescricao="";this.A8407FamiliaMargemLucro=0;this.Z8407FamiliaMargemLucro=0;this.O8407FamiliaMargemLucro=0;this.A8516FamiliaPCICMSST=0;this.Z8516FamiliaPCICMSST=0;this.O8516FamiliaPCICMSST=0;this.A8517FamiliaDifICMS=0;this.Z8517FamiliaDifICMS=0;this.O8517FamiliaDifICMS=0;this.A4427FamiliaCFOPEntDenSemInscCod=0;this.Z4427FamiliaCFOPEntDenSemInscCod=0;this.O4427FamiliaCFOPEntDenSemInscCod=0;this.A4431FamiliaCFOPEntForSemInscCod=0;this.Z4431FamiliaCFOPEntForSemInscCod=0;this.O4431FamiliaCFOPEntForSemInscCod=0;this.A4425FamiliaCFOPEntDenComInscCod=0;this.Z4425FamiliaCFOPEntDenComInscCod=0;this.O4425FamiliaCFOPEntDenComInscCod=0;this.A4429FamiliaCFOPEntForComInscCod=0;this.Z4429FamiliaCFOPEntForComInscCod=0;this.O4429FamiliaCFOPEntForComInscCod=0;this.A4435FamiliaCFOPSaiDenSemInscCod=0;this.Z4435FamiliaCFOPSaiDenSemInscCod=0;this.O4435FamiliaCFOPSaiDenSemInscCod=0;this.A4439FamiliaCFOPSaiForSemInscCod=0;this.Z4439FamiliaCFOPSaiForSemInscCod=0;this.O4439FamiliaCFOPSaiForSemInscCod=0;this.A4433FamiliaCFOPSaiDenComInscCod=0;this.Z4433FamiliaCFOPSaiDenComInscCod=0;this.O4433FamiliaCFOPSaiDenComInscCod=0;this.A4437FamiliaCFOPSaiForComInscCod=0;this.Z4437FamiliaCFOPSaiForComInscCod=0;this.O4437FamiliaCFOPSaiForComInscCod=0;this.A2954FamiliaUsuarioAlt="";this.Z2954FamiliaUsuarioAlt="";this.O2954FamiliaUsuarioAlt="";this.A2955FamiliaDataHoraAlt=gx.date.nullDate();this.Z2955FamiliaDataHoraAlt=gx.date.nullDate();this.O2955FamiliaDataHoraAlt=gx.date.nullDate();this.AV20SnAlterou="";this.ZV20SnAlterou="";this.OV20SnAlterou="";this.AV40QtChar=0;this.ZV40QtChar=0;this.OV40QtChar=0;this.AV43Error="";this.ZV43Error="";this.OV43Error="";this.AV30String="";this.ZV30String="";this.OV30String="";this.A4384FamiliaNCMDescricao="";this.Z4384FamiliaNCMDescricao="";this.O4384FamiliaNCMDescricao="";this.A4386FamiliaGeneroDescricao="";this.Z4386FamiliaGeneroDescricao="";this.O4386FamiliaGeneroDescricao="";this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV16Sistema="";this.AV59Pgmname="";this.AV60Pgmdesc="";this.AV11MsgErro="";this.AV17AcessoSistemaSequencia=0;this.AV14Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV19SetorEmpresaId="";this.AV21SetorId="";this.AV31EntD="";this.AV32EntF="";this.AV33SaiD="";this.AV34SaiF="";this.AV40QtChar=0;this.AV25TemMascara="";this.AV49ErrorECD="";this.AV50ErrorECF="";this.AV47ErrorESD="";this.AV48ErrorESF="";this.AV55ErrorSSD="";this.AV52ErrorSSF="";this.AV53ErrorSCD="";this.AV54ErrorSCF="";this.AV20SnAlterou="";this.AV29ret=0;this.AV18FamiliaId="";this.AV26SnConsulta="";this.A2956FamiliaEmpresaId="";this.A2957FamiliaId="";this.A2952SetorEmpresaId="";this.AV41FamiliaNCMDescricao="";this.AV42FamiliaGeneroDescricao="";this.A2954FamiliaUsuarioAlt="";this.A2955FamiliaDataHoraAlt=gx.date.nullDate();this.A2951FamiliaDescricao="";this.A2953SetorId="";this.Gx_BScreen=0;this.A2958SetorDescricao="";this.A4383FamiliaNCMCodigo=0;this.A4384FamiliaNCMDescricao="";this.A4385FamiliaGeneroCodigo="";this.A4386FamiliaGeneroDescricao="";this.A4387FamiliaMargemMarkupCodigo="";this.A4388FamiliaMargemMarkupDescricao="";this.A4427FamiliaCFOPEntDenSemInscCod=0;this.A4428FamiliaCFOPEntDenSemInscDesc="";this.A4431FamiliaCFOPEntForSemInscCod=0;this.A4432FamiliaCFOPEntForSemInscDesc="";this.A4425FamiliaCFOPEntDenComInscCod=0;this.A4426FamiliaCFOPEntDenComInscDesc="";this.A4429FamiliaCFOPEntForComInscCod=0;this.A4430FamiliaCFOPEntForComInscDesc="";this.A4435FamiliaCFOPSaiDenSemInscCod=0;this.A4436FamiliaCFOPSaiDenSemInscDesc="";this.A4439FamiliaCFOPSaiForSemInscCod=0;this.A4440FamiliaCFOPSaiForSemInscDesc="";this.A4433FamiliaCFOPSaiDenComInscCod=0;this.A4434FamiliaCFOPSaiDenComInscDesc="";this.A4437FamiliaCFOPSaiForComInscCod=0;this.A4438FamiliaCFOPSaiForComInscDesc="";this.A8407FamiliaMargemLucro=0;this.A8516FamiliaPCICMSST=0;this.A8517FamiliaDifICMS=0;this.A8436FamiliaNaturezaReceitaId=0;this.AV56Tab=[];this.Gx_mode="";this.Events={e126k2_client:["'FECHAR'",!0],e136k2_client:["AFTER TRN",!0],e146k2_client:["FAMILIANCMCODIGO.ISVALID",!0],e156k2_client:["FAMILIAGENEROCODIGO.ISVALID",!0],e166k375_client:["ENTER",!0],e176k375_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV18FamiliaId",fld:"vFAMILIAID"},{av:"Gx_mode",fld:"vMODE"},{av:"AV26SnConsulta",fld:"vSNCONSULTA"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV26SnConsulta",fld:"vSNCONSULTA"}],[]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"},{av:"AV26SnConsulta",fld:"vSNCONSULTA"},{av:"A2957FamiliaId",fld:"FAMILIAID"}],[]];this.EvtParms["FAMILIANCMCODIGO.ISVALID"]=[[{av:"A4383FamiliaNCMCodigo",fld:"FAMILIANCMCODIGO"}],[{av:"AV41FamiliaNCMDescricao",fld:"vFAMILIANCMDESCRICAO"}]];this.EvtParms["FAMILIAGENEROCODIGO.ISVALID"]=[[{av:"A4385FamiliaGeneroCodigo",fld:"FAMILIAGENEROCODIGO"}],[{av:"AV42FamiliaGeneroDescricao",fld:"vFAMILIAGENERODESCRICAO"}]];this.setPrompt("PROMPT_2953",[26]);this.setPrompt("PROMPT_8436",[32]);this.setPrompt("PROMPT_4383",[44]);this.setPrompt("PROMPT_4385",[50]);this.setPrompt("PROMPT_4387",[56]);this.setPrompt("PROMPT_4427",[90]);this.setPrompt("PROMPT_4431",[95]);this.setPrompt("PROMPT_4425",[100]);this.setPrompt("PROMPT_4429",[105]);this.setPrompt("PROMPT_4435",[112]);this.setPrompt("PROMPT_4439",[117]);this.setPrompt("PROMPT_4433",[122]);this.setPrompt("PROMPT_4437",[127]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18FamiliaId","vFAMILIAID",0,"char");this.setVCMap("AV12EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A2956FamiliaEmpresaId","FAMILIAEMPRESAID",0,"char");this.setVCMap("AV19SetorEmpresaId","vSETOREMPRESAID",0,"char");this.setVCMap("A2952SetorEmpresaId","SETOREMPRESAID",0,"char");this.setVCMap("AV47ErrorESD","vERRORESD",0,"char");this.setVCMap("AV48ErrorESF","vERRORESF",0,"char");this.setVCMap("AV49ErrorECD","vERRORECD",0,"char");this.setVCMap("AV50ErrorECF","vERRORECF",0,"char");this.setVCMap("AV55ErrorSSD","vERRORSSD",0,"char");this.setVCMap("AV52ErrorSSF","vERRORSSF",0,"char");this.setVCMap("AV53ErrorSCD","vERRORSCD",0,"char");this.setVCMap("AV54ErrorSCF","vERRORSCF",0,"char");this.setVCMap("AV29ret","vRET",0,"int");this.setVCMap("AV31EntD","vENTD",0,"char");this.setVCMap("AV32EntF","vENTF",0,"char");this.setVCMap("AV33SaiD","vSAID",0,"char");this.setVCMap("AV34SaiF","vSAIF",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("AV21SetorId","vSETORID",0,"char");this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int");this.setVCMap("A4426FamiliaCFOPEntDenComInscDesc","FAMILIACFOPENTDENCOMINSCDESC",0,"svchar");this.setVCMap("A4428FamiliaCFOPEntDenSemInscDesc","FAMILIACFOPENTDENSEMINSCDESC",0,"svchar");this.setVCMap("A4430FamiliaCFOPEntForComInscDesc","FAMILIACFOPENTFORCOMINSCDESC",0,"svchar");this.setVCMap("A4432FamiliaCFOPEntForSemInscDesc","FAMILIACFOPENTFORSEMINSCDESC",0,"svchar");this.setVCMap("A4434FamiliaCFOPSaiDenComInscDesc","FAMILIACFOPSAIDENCOMINSCDESC",0,"svchar");this.setVCMap("A4436FamiliaCFOPSaiDenSemInscDesc","FAMILIACFOPSAIDENSEMINSCDESC",0,"svchar");this.setVCMap("A4438FamiliaCFOPSaiForComInscDesc","FAMILIACFOPSAIFORCOMINSCDESC",0,"svchar");this.setVCMap("A4440FamiliaCFOPSaiForSemInscDesc","FAMILIACFOPSAIFORSEMINSCDESC",0,"svchar");this.setVCMap("AV60Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV59Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("AV26SnConsulta","vSNCONSULTA",0,"char");this.InitStandaloneVars();this.LvlOlds[375]=["O2953SetorId","O2951FamiliaDescricao","O2957FamiliaId"]});gx.setParentObj(new tfamilia)