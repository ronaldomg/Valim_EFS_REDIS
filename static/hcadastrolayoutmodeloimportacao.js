/**@preserve  GeneXus Java 10_3_12-110051 on March 31, 2021 16:46:38.73
*/
gx.evt.autoSkip=!1;gx.define("hcadastrolayoutmodeloimportacao",!1,function(){this.ServerClass="hcadastrolayoutmodeloimportacao";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){};this.Validv_Importacaomodelo=function(){try{var n=gx.util.balloon.getNew("vIMPORTACAOMODELO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Sequenciamodeloimportacao=function(){try{var n=gx.util.balloon.getNew("vSEQUENCIAMODELOIMPORTACAO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Importacaomodeloempresaid=function(){try{var n=gx.util.balloon.getNew("vIMPORTACAOMODELOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Empresacodificacaoempresaid=function(){return gx.ajax.validSrvEvt("dyncall","validv_Empresacodificacaoempresaid",["gx.O.AV31EmpresaCodificacaoEmpresaId","gx.O.AV21CodificacaoId"],["AV21CodificacaoId"]),!0};this.Validv_Empresaclassificacaoempresaid=function(){return gx.ajax.validSrvEvt("dyncall","validv_Empresaclassificacaoempresaid",["gx.O.AV30EmpresaClassificacaoEmpresaId","gx.O.AV20ClassificacaoId"],["AV20ClassificacaoId"]),!0};this.e11xn2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e13xn2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14xn2_client=function(){this.executeServerEvent("VIMPORTACAOTABELA.CLICK",!0,null,!1,!0)};this.e15xn2_client=function(){this.executeServerEvent("VIMPORTACAOCAMPO.CLICK",!0,null,!1,!0)};this.e17xn2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,32,34,37,39,42,44,47,49,52,54,57,59,62,65,67,69,78,79,80,81,82,83,85];this.GXLastCtrlId=85;n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE4",grid:0};n[8]={fld:"TABLE5",grid:0};n[11]={fld:"TEXTBLOCK1",format:0,grid:0};n[13]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Importacaomodelo,isvalid:null,rgrid:[],fld:"vIMPORTACAOMODELO",gxz:"ZV22ImportacaoModelo",gxold:"OV22ImportacaoModelo",gxvar:"AV22ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22ImportacaoModelo=gx.num.intval(n)},v2z:function(n){gx.O.ZV22ImportacaoModelo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELO",gx.O.AV22ImportacaoModelo,0)},c2v:function(){gx.O.AV22ImportacaoModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPORTACAOMODELO",".")},nac:gx.falseFn};n[14]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOMODELODESCRICAO",gxz:"ZV23ImportacaoModeloDescricao",gxold:"OV23ImportacaoModeloDescricao",gxvar:"AV23ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23ImportacaoModeloDescricao=n},v2z:function(n){gx.O.ZV23ImportacaoModeloDescricao=n},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELODESCRICAO",gx.O.AV23ImportacaoModeloDescricao,0)},c2v:function(){gx.O.AV23ImportacaoModeloDescricao=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOMODELODESCRICAO")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK2",format:0,grid:0};n[19]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sequenciamodeloimportacao,isvalid:null,rgrid:[],fld:"vSEQUENCIAMODELOIMPORTACAO",gxz:"ZV24SequenciaModeloImportacao",gxold:"OV24SequenciaModeloImportacao",gxvar:"AV24SequenciaModeloImportacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24SequenciaModeloImportacao=gx.num.intval(n)},v2z:function(n){gx.O.ZV24SequenciaModeloImportacao=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSEQUENCIAMODELOIMPORTACAO",gx.O.AV24SequenciaModeloImportacao,0)},c2v:function(){gx.O.AV24SequenciaModeloImportacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQUENCIAMODELOIMPORTACAO",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCK3",format:0,grid:0};n[24]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOTABELA",gxz:"ZV25ImportacaoTabela",gxold:"OV25ImportacaoTabela",gxvar:"AV25ImportacaoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV25ImportacaoTabela=n},v2z:function(n){gx.O.ZV25ImportacaoTabela=n},v2c:function(){gx.fn.setComboBoxValue("vIMPORTACAOTABELA",gx.O.AV25ImportacaoTabela)},c2v:function(){gx.O.AV25ImportacaoTabela=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOTABELA")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCK4",format:0,grid:0};n[29]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOTIPOCAMPO",gxz:"ZV26ImportacaoTipoCampo",gxold:"OV26ImportacaoTipoCampo",gxvar:"AV26ImportacaoTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV26ImportacaoTipoCampo=n},v2z:function(n){gx.O.ZV26ImportacaoTipoCampo=n},v2c:function(){gx.fn.setComboBoxValue("vIMPORTACAOTIPOCAMPO",gx.O.AV26ImportacaoTipoCampo)},c2v:function(){gx.O.AV26ImportacaoTipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOTIPOCAMPO")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCK5",format:0,grid:0};n[34]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOCAMPO",gxz:"ZV18ImportacaoCampo",gxold:"OV18ImportacaoCampo",gxvar:"AV18ImportacaoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV18ImportacaoCampo=n},v2z:function(n){gx.O.ZV18ImportacaoCampo=n},v2c:function(){gx.fn.setComboBoxValue("vIMPORTACAOCAMPO",gx.O.AV18ImportacaoCampo)},c2v:function(){gx.O.AV18ImportacaoCampo=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOCAMPO")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCK6",format:0,grid:0};n[39]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOVALORCAMPO",gxz:"ZV19ImportacaoValorCampo",gxold:"OV19ImportacaoValorCampo",gxvar:"AV19ImportacaoValorCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19ImportacaoValorCampo=n},v2z:function(n){gx.O.ZV19ImportacaoValorCampo=n},v2c:function(){gx.fn.setControlValue("vIMPORTACAOVALORCAMPO",gx.O.AV19ImportacaoValorCampo,0)},c2v:function(){gx.O.AV19ImportacaoValorCampo=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOVALORCAMPO")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCK7",format:0,grid:0};n[44]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOTAMANHOCAMPO",gxz:"ZV27ImportacaoTamanhoCampo",gxold:"OV27ImportacaoTamanhoCampo",gxvar:"AV27ImportacaoTamanhoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27ImportacaoTamanhoCampo=gx.num.intval(n)},v2z:function(n){gx.O.ZV27ImportacaoTamanhoCampo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vIMPORTACAOTAMANHOCAMPO",gx.O.AV27ImportacaoTamanhoCampo,0)},c2v:function(){gx.O.AV27ImportacaoTamanhoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPORTACAOTAMANHOCAMPO",".")},nac:gx.falseFn};n[47]={fld:"TEXTBLOCK8",format:0,grid:0};n[49]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOQTDECASASDECIMAIS",gxz:"ZV28ImportacaoQtdeCasasDecimais",gxold:"OV28ImportacaoQtdeCasasDecimais",gxvar:"AV28ImportacaoQtdeCasasDecimais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28ImportacaoQtdeCasasDecimais=gx.num.intval(n)},v2z:function(n){gx.O.ZV28ImportacaoQtdeCasasDecimais=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vIMPORTACAOQTDECASASDECIMAIS",gx.O.AV28ImportacaoQtdeCasasDecimais,0)},c2v:function(){gx.O.AV28ImportacaoQtdeCasasDecimais=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPORTACAOQTDECASASDECIMAIS",".")},nac:gx.falseFn};n[52]={fld:"CLASSIFICACAOTXT",format:0,grid:0};n[54]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV20ClassificacaoId",gxold:"OV20ClassificacaoId",gxvar:"AV20ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV20ClassificacaoId=n},v2z:function(n){gx.O.ZV20ClassificacaoId=n},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV20ClassificacaoId)},c2v:function(){gx.O.AV20ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};n[57]={fld:"CODIFICACAOTXT",format:0,grid:0};n[59]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV21CodificacaoId",gxold:"OV21CodificacaoId",gxvar:"AV21CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV21CodificacaoId=n},v2z:function(n){gx.O.ZV21CodificacaoId=n},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV21CodificacaoId)},c2v:function(){gx.O.AV21CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};n[62]={fld:"TABLE1",grid:0};n[65]={fld:"TEXTBLOCK9",format:0,grid:0};n[67]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOUSUARIOALT",gxz:"ZV32ImportacaoUsuarioAlt",gxold:"OV32ImportacaoUsuarioAlt",gxvar:"AV32ImportacaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32ImportacaoUsuarioAlt=n},v2z:function(n){gx.O.ZV32ImportacaoUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vIMPORTACAOUSUARIOALT",gx.O.AV32ImportacaoUsuarioAlt,0)},c2v:function(){gx.O.AV32ImportacaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOUSUARIOALT")},nac:gx.falseFn};n[69]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAODATAHORAALT",gxz:"ZV33ImportacaoDataHoraAlt",gxold:"OV33ImportacaoDataHoraAlt",gxvar:"AV33ImportacaoDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV33ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vIMPORTACAODATAHORAALT",gx.O.AV33ImportacaoDataHoraAlt,0)},c2v:function(){gx.O.AV33ImportacaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vIMPORTACAODATAHORAALT")},nac:gx.falseFn};n[78]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPORTACAOTIPOSEPARADOR",gxz:"ZV37ImportacaoTipoSeparador",gxold:"OV37ImportacaoTipoSeparador",gxvar:"AV37ImportacaoTipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37ImportacaoTipoSeparador=n},v2z:function(n){gx.O.ZV37ImportacaoTipoSeparador=n},v2c:function(){gx.fn.setControlValue("vIMPORTACAOTIPOSEPARADOR",gx.O.AV37ImportacaoTipoSeparador,0)},c2v:function(){gx.O.AV37ImportacaoTipoSeparador=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOTIPOSEPARADOR")},nac:gx.falseFn};n[79]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Importacaomodeloempresaid,isvalid:null,rgrid:[],fld:"vIMPORTACAOMODELOEMPRESAID",gxz:"ZV29ImportacaoModeloEmpresaId",gxold:"OV29ImportacaoModeloEmpresaId",gxvar:"AV29ImportacaoModeloEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29ImportacaoModeloEmpresaId=n},v2z:function(n){gx.O.ZV29ImportacaoModeloEmpresaId=n},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELOEMPRESAID",gx.O.AV29ImportacaoModeloEmpresaId,0)},c2v:function(){gx.O.AV29ImportacaoModeloEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOMODELOEMPRESAID")},nac:gx.falseFn};n[80]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacodificacaoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACODIFICACAOEMPRESAID",gxz:"ZV31EmpresaCodificacaoEmpresaId",gxold:"OV31EmpresaCodificacaoEmpresaId",gxvar:"AV31EmpresaCodificacaoEmpresaId",ucs:[],op:[59],ip:[59,80],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31EmpresaCodificacaoEmpresaId=n},v2z:function(n){gx.O.ZV31EmpresaCodificacaoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vEMPRESACODIFICACAOEMPRESAID",gx.O.AV31EmpresaCodificacaoEmpresaId,0)},c2v:function(){gx.O.AV31EmpresaCodificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACODIFICACAOEMPRESAID")},nac:gx.falseFn};n[81]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaclassificacaoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACLASSIFICACAOEMPRESAID",gxz:"ZV30EmpresaClassificacaoEmpresaId",gxold:"OV30EmpresaClassificacaoEmpresaId",gxvar:"AV30EmpresaClassificacaoEmpresaId",ucs:[],op:[54],ip:[54,81],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30EmpresaClassificacaoEmpresaId=n},v2z:function(n){gx.O.ZV30EmpresaClassificacaoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vEMPRESACLASSIFICACAOEMPRESAID",gx.O.AV30EmpresaClassificacaoEmpresaId,0)},c2v:function(){gx.O.AV30EmpresaClassificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID")},nac:gx.falseFn};n[82]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEUNICO",gxz:"ZV36SnLoteUnico",gxold:"OV36SnLoteUnico",gxvar:"AV36SnLoteUnico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36SnLoteUnico=n},v2z:function(n){gx.O.ZV36SnLoteUnico=n},v2c:function(){gx.fn.setControlValue("vSNLOTEUNICO",gx.O.AV36SnLoteUnico,0)},c2v:function(){gx.O.AV36SnLoteUnico=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEUNICO")},nac:gx.falseFn};n[83]={lvl:0,type:"char",len:3,dec:0,sign:!0,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODE",gxz:"Gx_mode",gxold:"Gx_mode",gxvar:"Gx_mode",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.Gx_mode=n},v2z:function(n){gx.O.Gx_mode=n},v2c:function(){gx.fn.setControlValue("vMODE",gx.O.Gx_mode,0)},c2v:function(){gx.O.Gx_mode=this.val()},val:function(){return gx.fn.getControlValue("vMODE")},nac:gx.falseFn};n[85]={fld:"BTNHELP",grid:0};this.AV22ImportacaoModelo=0;this.ZV22ImportacaoModelo=0;this.OV22ImportacaoModelo=0;this.AV23ImportacaoModeloDescricao="";this.ZV23ImportacaoModeloDescricao="";this.OV23ImportacaoModeloDescricao="";this.AV24SequenciaModeloImportacao=0;this.ZV24SequenciaModeloImportacao=0;this.OV24SequenciaModeloImportacao=0;this.AV25ImportacaoTabela="";this.ZV25ImportacaoTabela="";this.OV25ImportacaoTabela="";this.AV26ImportacaoTipoCampo="";this.ZV26ImportacaoTipoCampo="";this.OV26ImportacaoTipoCampo="";this.AV18ImportacaoCampo="";this.ZV18ImportacaoCampo="";this.OV18ImportacaoCampo="";this.AV19ImportacaoValorCampo="";this.ZV19ImportacaoValorCampo="";this.OV19ImportacaoValorCampo="";this.AV27ImportacaoTamanhoCampo=0;this.ZV27ImportacaoTamanhoCampo=0;this.OV27ImportacaoTamanhoCampo=0;this.AV28ImportacaoQtdeCasasDecimais=0;this.ZV28ImportacaoQtdeCasasDecimais=0;this.OV28ImportacaoQtdeCasasDecimais=0;this.AV20ClassificacaoId="";this.ZV20ClassificacaoId="";this.OV20ClassificacaoId="";this.AV21CodificacaoId="";this.ZV21CodificacaoId="";this.OV21CodificacaoId="";this.AV32ImportacaoUsuarioAlt="";this.ZV32ImportacaoUsuarioAlt="";this.OV32ImportacaoUsuarioAlt="";this.AV33ImportacaoDataHoraAlt=gx.date.nullDate();this.ZV33ImportacaoDataHoraAlt=gx.date.nullDate();this.OV33ImportacaoDataHoraAlt=gx.date.nullDate();this.AV37ImportacaoTipoSeparador="";this.ZV37ImportacaoTipoSeparador="";this.OV37ImportacaoTipoSeparador="";this.AV29ImportacaoModeloEmpresaId="";this.ZV29ImportacaoModeloEmpresaId="";this.OV29ImportacaoModeloEmpresaId="";this.AV31EmpresaCodificacaoEmpresaId="";this.ZV31EmpresaCodificacaoEmpresaId="";this.OV31EmpresaCodificacaoEmpresaId="";this.AV30EmpresaClassificacaoEmpresaId="";this.ZV30EmpresaClassificacaoEmpresaId="";this.OV30EmpresaClassificacaoEmpresaId="";this.AV36SnLoteUnico="";this.ZV36SnLoteUnico="";this.OV36SnLoteUnico="";this.Gx_mode="";this.Gx_mode="";this.AV22ImportacaoModelo=0;this.AV23ImportacaoModeloDescricao="";this.AV24SequenciaModeloImportacao=0;this.AV25ImportacaoTabela="";this.AV26ImportacaoTipoCampo="";this.AV18ImportacaoCampo="";this.AV19ImportacaoValorCampo="";this.AV27ImportacaoTamanhoCampo=0;this.AV28ImportacaoQtdeCasasDecimais=0;this.AV20ClassificacaoId="";this.AV21CodificacaoId="";this.AV32ImportacaoUsuarioAlt="";this.AV33ImportacaoDataHoraAlt=gx.date.nullDate();this.AV37ImportacaoTipoSeparador="";this.AV29ImportacaoModeloEmpresaId="";this.AV31EmpresaCodificacaoEmpresaId="";this.AV30EmpresaClassificacaoEmpresaId="";this.AV36SnLoteUnico="";this.Gx_mode="";this.A5918SequenciaModeloImportacao=0;this.A5916ImportacaoModelo=0;this.A5915ImportacaoModeloEmpresaId="";this.A5907ImportacaoTabela="";this.A5908ImportacaoTipoCampo="";this.A5909ImportacaoCampo="";this.A5910ImportacaoValorCampo="";this.A5911ImportacaoTamanhoCampo=0;this.A5912ImportacaoQtdeCasasDecimais=0;this.A54ClassificacaoId="";this.A58CodificacaoId="";this.A5913ImportacaoUsuarioAlt="";this.A5914ImportacaoDataHoraAlt=gx.date.nullDate();this.A5924ImportacaoTipoSeparador="";this.A5917ImportacaoModeloDescricao="";this.Events={e11xn2_client:["'FECHAR'",!0],e13xn2_client:["ENTER",!0],e14xn2_client:["VIMPORTACAOTABELA.CLICK",!0],e15xn2_client:["VIMPORTACAOCAMPO.CLICK",!0],e17xn2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV22ImportacaoModelo",fld:"vIMPORTACAOMODELO",hsh:!0}],[]];this.EvtParms.ENTER=[[{av:"AV35SnErro",fld:"vSNERRO"},{av:"AV22ImportacaoModelo",fld:"vIMPORTACAOMODELO",hsh:!0},{av:"AV24SequenciaModeloImportacao",fld:"vSEQUENCIAMODELOIMPORTACAO",hsh:!0},{av:"AV25ImportacaoTabela",fld:"vIMPORTACAOTABELA"},{av:"AV26ImportacaoTipoCampo",fld:"vIMPORTACAOTIPOCAMPO"},{av:"AV18ImportacaoCampo",fld:"vIMPORTACAOCAMPO"},{av:"AV19ImportacaoValorCampo",fld:"vIMPORTACAOVALORCAMPO"},{av:"AV27ImportacaoTamanhoCampo",fld:"vIMPORTACAOTAMANHOCAMPO"},{av:"AV28ImportacaoQtdeCasasDecimais",fld:"vIMPORTACAOQTDECASASDECIMAIS"},{av:"AV20ClassificacaoId",fld:"vCLASSIFICACAOID"},{av:"AV21CodificacaoId",fld:"vCODIFICACAOID"},{av:"Gx_mode",fld:"vMODE",hsh:!0},{av:"AV29ImportacaoModeloEmpresaId",fld:"vIMPORTACAOMODELOEMPRESAID"},{av:"AV36SnLoteUnico",fld:"vSNLOTEUNICO"},{av:"AV37ImportacaoTipoSeparador",fld:"vIMPORTACAOTIPOSEPARADOR"}],[{av:"AV35SnErro",fld:"vSNERRO"},{av:"AV25ImportacaoTabela",fld:"vIMPORTACAOTABELA"},{av:"AV26ImportacaoTipoCampo",fld:"vIMPORTACAOTIPOCAMPO"},{av:"AV19ImportacaoValorCampo",fld:"vIMPORTACAOVALORCAMPO"},{av:"AV27ImportacaoTamanhoCampo",fld:"vIMPORTACAOTAMANHOCAMPO"},{av:"AV28ImportacaoQtdeCasasDecimais",fld:"vIMPORTACAOQTDECASASDECIMAIS"},{av:"AV20ClassificacaoId",fld:"vCLASSIFICACAOID"},{av:"AV21CodificacaoId",fld:"vCODIFICACAOID"},{av:"AV18ImportacaoCampo",fld:"vIMPORTACAOCAMPO"}]];this.EvtParms["VIMPORTACAOTABELA.CLICK"]=[[{av:"AV25ImportacaoTabela",fld:"vIMPORTACAOTABELA"}],[{av:"AV18ImportacaoCampo",fld:"vIMPORTACAOCAMPO"}]];this.EvtParms["VIMPORTACAOCAMPO.CLICK"]=[[{av:"AV18ImportacaoCampo",fld:"vIMPORTACAOCAMPO"},{av:"AV25ImportacaoTabela",fld:"vIMPORTACAOTABELA"}],[{av:'gx.fn.getCtrlProperty("CLASSIFICACAOTXT","Visible")',ctrl:"CLASSIFICACAOTXT",prop:"Visible"},{ctrl:"vCLASSIFICACAOID"},{av:'gx.fn.getCtrlProperty("CODIFICACAOTXT","Visible")',ctrl:"CODIFICACAOTXT",prop:"Visible"},{ctrl:"vCODIFICACAOID"},{av:"AV18ImportacaoCampo",fld:"vIMPORTACAOCAMPO"}]];this.EnterCtrl=["BTNCONFIRMAR"];this.InitStandaloneVars()});gx.setParentObj(new hcadastrolayoutmodeloimportacao)