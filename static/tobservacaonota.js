/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:8:11.32
*/
gx.evt.autoSkip=!1;gx.define("tobservacaonota",!1,function(){this.ServerClass="tobservacaonota";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18ObservacaoNotaId=gx.fn.getIntegerValue("vOBSERVACAONOTAID",".");this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.A3701ObservacaoNotaEmpresaId=gx.fn.getControlValue("OBSERVACAONOTAEMPRESAID");this.A3691ObservacaoNotaProdutoEmpId=gx.fn.getControlValue("OBSERVACAONOTAPRODUTOEMPID");this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU");this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD");this.A3694ObservacaoNotaProdutoDescRes=gx.fn.getControlValue("OBSERVACAONOTAPRODUTODESCRES");this.AV48Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Observacaonotaid=function(){try{var n=gx.util.balloon.getNew("OBSERVACAONOTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Observacaonotaprodutoid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Observacaonotaprodutoid",["gx.O.AV19ObservacaoNotaProdutoEmpId","gx.O.A3692ObservacaoNotaProdutoId","gx.O.A3691ObservacaoNotaProdutoEmpId","gx.O.A3693ObservacaoNotaProdutoDesc","gx.O.A3694ObservacaoNotaProdutoDescRes"],["A3691ObservacaoNotaProdutoEmpId","A3693ObservacaoNotaProdutoDesc","A3694ObservacaoNotaProdutoDescRes"]),!0};this.Valid_Observacaonotacfopcodigo=function(){return gx.ajax.validSrvEvt("dyncall","valid_Observacaonotacfopcodigo",["gx.O.A3695ObservacaoNotaCFOPCodigo","gx.O.A3696ObservacaoNotaCFOPDescricao"],["A3696ObservacaoNotaCFOPDescricao"]),!0};this.Valid_Observacaonotauf=function(){try{var n=gx.util.balloon.getNew("OBSERVACAONOTAUF");if(this.AnyError=0,!(this.A3697ObservacaoNotaUF==""||this.A3697ObservacaoNotaUF=="AC"||this.A3697ObservacaoNotaUF=="AL"||this.A3697ObservacaoNotaUF=="AP"||this.A3697ObservacaoNotaUF=="AM"||this.A3697ObservacaoNotaUF=="BA"||this.A3697ObservacaoNotaUF=="CE"||this.A3697ObservacaoNotaUF=="DF"||this.A3697ObservacaoNotaUF=="ES"||this.A3697ObservacaoNotaUF=="GO"||this.A3697ObservacaoNotaUF=="MA"||this.A3697ObservacaoNotaUF=="MT"||this.A3697ObservacaoNotaUF=="MS"||this.A3697ObservacaoNotaUF=="MG"||this.A3697ObservacaoNotaUF=="PA"||this.A3697ObservacaoNotaUF=="PB"||this.A3697ObservacaoNotaUF=="PR"||this.A3697ObservacaoNotaUF=="PE"||this.A3697ObservacaoNotaUF=="PI"||this.A3697ObservacaoNotaUF=="RJ"||this.A3697ObservacaoNotaUF=="RN"||this.A3697ObservacaoNotaUF=="RS"||this.A3697ObservacaoNotaUF=="RO"||this.A3697ObservacaoNotaUF=="RR"||this.A3697ObservacaoNotaUF=="SC"||this.A3697ObservacaoNotaUF=="SP"||this.A3697ObservacaoNotaUF=="SE"||this.A3697ObservacaoNotaUF=="TO"||this.A3697ObservacaoNotaUF=="EX"))try{n.setError("Campo UF da Observação fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Observacaonotaobs=function(){try{var n=gx.util.balloon.getNew("OBSERVACAONOTAOBS");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Snvenda=function(){try{var n=gx.util.balloon.getNew("vSNVENDA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Observacaonotaprodutoempid=function(){try{var n=gx.util.balloon.getNew("vOBSERVACAONOTAPRODUTOEMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Numaux=function(){try{var n=gx.util.balloon.getNew("vNUMAUX");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Charaux=function(){try{var n=gx.util.balloon.getNew("vCHARAUX");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Dataaux=function(){try{var n=gx.util.balloon.getNew("vDATAAUX");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e12732_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e13732_client=function(){this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e1473394_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1573394_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,17,19,20,21,24,26,27,30,32,35,37,40,43,45,47,54,55,58,59,61,62,63,64,65,66,67,68,69,71,73];this.GXLastCtrlId=73;n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TABLE2",grid:0};n[9]={fld:"TABLE3",grid:0};n[12]={fld:"TEXTBLOCK7",format:0,grid:0};n[14]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Observacaonotaid,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAID",gxz:"Z3702ObservacaoNotaId",gxold:"O3702ObservacaoNotaId",gxvar:"A3702ObservacaoNotaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3702ObservacaoNotaId=gx.num.intval(n)},v2z:function(n){gx.O.Z3702ObservacaoNotaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTAID",gx.O.A3702ObservacaoNotaId,0)},c2v:function(){gx.O.A3702ObservacaoNotaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBSERVACAONOTAID",".")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCK9",format:0,grid:0};n[19]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Observacaonotaprodutoid,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAPRODUTOID",gxz:"Z3692ObservacaoNotaProdutoId",gxold:"O3692ObservacaoNotaProdutoId",gxvar:"A3692ObservacaoNotaProdutoId",ucs:[],op:[21],ip:[21,19,59],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3692ObservacaoNotaProdutoId=gx.num.intval(n)},v2z:function(n){gx.O.Z3692ObservacaoNotaProdutoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTAPRODUTOID",gx.O.A3692ObservacaoNotaProdutoId,0)},c2v:function(){gx.O.A3692ObservacaoNotaProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBSERVACAONOTAPRODUTOID",".")},nac:gx.falseFn};n[20]={fld:"PROMPTPROD",grid:0};n[21]={lvl:0,type:"svchar",len:120,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAPRODUTODESC",gxz:"Z3693ObservacaoNotaProdutoDesc",gxold:"O3693ObservacaoNotaProdutoDesc",gxvar:"A3693ObservacaoNotaProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3693ObservacaoNotaProdutoDesc=n},v2z:function(n){gx.O.Z3693ObservacaoNotaProdutoDesc=n},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTAPRODUTODESC",gx.O.A3693ObservacaoNotaProdutoDesc,0)},c2v:function(){gx.O.A3693ObservacaoNotaProdutoDesc=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAONOTAPRODUTODESC")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK8",format:0,grid:0};n[26]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Observacaonotacfopcodigo,isvalid:null,rgrid:[],fld:"OBSERVACAONOTACFOPCODIGO",gxz:"Z3695ObservacaoNotaCFOPCodigo",gxold:"O3695ObservacaoNotaCFOPCodigo",gxvar:"A3695ObservacaoNotaCFOPCodigo",ucs:[],op:[27],ip:[27,26],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3695ObservacaoNotaCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z3695ObservacaoNotaCFOPCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTACFOPCODIGO",gx.O.A3695ObservacaoNotaCFOPCodigo,0)},c2v:function(){gx.O.A3695ObservacaoNotaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBSERVACAONOTACFOPCODIGO",".")},nac:gx.falseFn};n[27]={lvl:0,type:"svchar",len:340,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTACFOPDESCRICAO",gxz:"Z3696ObservacaoNotaCFOPDescricao",gxold:"O3696ObservacaoNotaCFOPDescricao",gxvar:"A3696ObservacaoNotaCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3696ObservacaoNotaCFOPDescricao=n},v2z:function(n){gx.O.Z3696ObservacaoNotaCFOPDescricao=n},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTACFOPDESCRICAO",gx.O.A3696ObservacaoNotaCFOPDescricao,0)},c2v:function(){gx.O.A3696ObservacaoNotaCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAONOTACFOPDESCRICAO")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK10",format:0,grid:0};n[32]={lvl:0,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Observacaonotauf,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAUF",gxz:"Z3697ObservacaoNotaUF",gxold:"O3697ObservacaoNotaUF",gxvar:"A3697ObservacaoNotaUF",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.A3697ObservacaoNotaUF=n},v2z:function(n){gx.O.Z3697ObservacaoNotaUF=n},v2c:function(){gx.fn.setComboBoxValue("OBSERVACAONOTAUF",gx.O.A3697ObservacaoNotaUF);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3697ObservacaoNotaUF=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAONOTAUF")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[35]={fld:"TEXTBLOCK11",format:0,grid:0};n[37]={lvl:0,type:"vchar",len:3e3,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:this.Valid_Observacaonotaobs,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAOBS",gxz:"Z3698ObservacaoNotaObs",gxold:"O3698ObservacaoNotaObs",gxvar:"A3698ObservacaoNotaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3698ObservacaoNotaObs=n},v2z:function(n){gx.O.Z3698ObservacaoNotaObs=n},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTAOBS",gx.O.A3698ObservacaoNotaObs,0)},c2v:function(){gx.O.A3698ObservacaoNotaObs=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAONOTAOBS")},nac:gx.falseFn};n[40]={fld:"TABLE4",grid:0};n[43]={fld:"TEXTBLOCK1",format:0,grid:0};n[45]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAUSUARIOALT",gxz:"Z3699ObservacaoNotaUsuarioAlt",gxold:"O3699ObservacaoNotaUsuarioAlt",gxvar:"A3699ObservacaoNotaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3699ObservacaoNotaUsuarioAlt=n},v2z:function(n){gx.O.Z3699ObservacaoNotaUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTAUSUARIOALT",gx.O.A3699ObservacaoNotaUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3699ObservacaoNotaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBSERVACAONOTAUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[47]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTADATAHORAALT",gxz:"Z3700ObservacaoNotaDataHoraAlt",gxold:"O3700ObservacaoNotaDataHoraAlt",gxvar:"A3700ObservacaoNotaDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("OBSERVACAONOTADATAHORAALT",gx.O.A3700ObservacaoNotaDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBSERVACAONOTADATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[54]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Snvenda,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV36SNVenda",gxold:"OV36SNVenda",gxvar:"AV36SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36SNVenda=n},v2z:function(n){gx.O.ZV36SNVenda=n},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV36SNVenda,0)},c2v:function(){gx.O.AV36SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};n[55]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV29LoteProdutoCombinacao",gxold:"OV29LoteProdutoCombinacao",gxvar:"AV29LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29LoteProdutoCombinacao=n},v2z:function(n){gx.O.ZV29LoteProdutoCombinacao=n},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV29LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV29LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};n[58]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[59]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Observacaonotaprodutoempid,isvalid:null,rgrid:[],fld:"vOBSERVACAONOTAPRODUTOEMPID",gxz:"ZV19ObservacaoNotaProdutoEmpId",gxold:"OV19ObservacaoNotaProdutoEmpId",gxvar:"AV19ObservacaoNotaProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19ObservacaoNotaProdutoEmpId=n},v2z:function(n){gx.O.ZV19ObservacaoNotaProdutoEmpId=n},v2c:function(){gx.fn.setControlValue("vOBSERVACAONOTAPRODUTOEMPID",gx.O.AV19ObservacaoNotaProdutoEmpId,0)},c2v:function(){gx.O.AV19ObservacaoNotaProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAONOTAPRODUTOEMPID")},nac:gx.falseFn};n[61]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV24QtdeCaracter",gxold:"OV24QtdeCaracter",gxvar:"AV24QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24QtdeCaracter=gx.num.intval(n)},v2z:function(n){gx.O.ZV24QtdeCaracter=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV24QtdeCaracter,0)},c2v:function(){gx.O.AV24QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",".")},nac:gx.falseFn};n[62]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAROUT",gxz:"ZV40CharOut",gxold:"OV40CharOut",gxvar:"AV40CharOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40CharOut=n},v2z:function(n){gx.O.ZV40CharOut=n},v2c:function(){gx.fn.setControlValue("vCHAROUT",gx.O.AV40CharOut,0)},c2v:function(){gx.O.AV40CharOut=this.val()},val:function(){return gx.fn.getControlValue("vCHAROUT")},nac:gx.falseFn};n[63]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTOUT",gxz:"ZV43IntOut",gxold:"OV43IntOut",gxvar:"AV43IntOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV43IntOut=gx.num.intval(n)},v2z:function(n){gx.O.ZV43IntOut=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTOUT",gx.O.AV43IntOut,0)},c2v:function(){gx.O.AV43IntOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTOUT",".")},nac:gx.falseFn};n[64]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Numaux,isvalid:null,rgrid:[],fld:"vNUMAUX",gxz:"ZV44NumAux",gxold:"OV44NumAux",gxvar:"AV44NumAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44NumAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV44NumAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vNUMAUX",gx.O.AV44NumAux,0)},c2v:function(){gx.O.AV44NumAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMAUX",".")},nac:gx.falseFn};n[65]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Charaux,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV32CharAux",gxold:"OV32CharAux",gxvar:"AV32CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32CharAux=n},v2z:function(n){gx.O.ZV32CharAux=n},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV32CharAux,0)},c2v:function(){gx.O.AV32CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};n[66]={lvl:0,type:"date",len:8,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Dataaux,isvalid:null,rgrid:[],fld:"vDATAAUX",gxz:"ZV41DataAux",gxold:"OV41DataAux",gxvar:"AV41DataAux",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV41DataAux=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV41DataAux=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vDATAAUX",gx.O.AV41DataAux,0)},c2v:function(){gx.O.AV41DataAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAAUX")},nac:gx.falseFn};n[67]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOOUT",gxz:"ZV46SubGrupoOut",gxold:"OV46SubGrupoOut",gxvar:"AV46SubGrupoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV46SubGrupoOut=gx.num.intval(n)},v2z:function(n){gx.O.ZV46SubGrupoOut=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOOUT",gx.O.AV46SubGrupoOut,0)},c2v:function(){gx.O.AV46SubGrupoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOOUT",".")},nac:gx.falseFn};n[68]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOOUT",gxz:"ZV42GrupoOut",gxold:"OV42GrupoOut",gxvar:"AV42GrupoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42GrupoOut=gx.num.intval(n)},v2z:function(n){gx.O.ZV42GrupoOut=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vGRUPOOUT",gx.O.AV42GrupoOut,0)},c2v:function(){gx.O.AV42GrupoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOOUT",".")},nac:gx.falseFn};n[69]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOOUT",gxz:"ZV45ProdutoCodigoOut",gxold:"OV45ProdutoCodigoOut",gxvar:"AV45ProdutoCodigoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV45ProdutoCodigoOut=gx.num.intval(n)},v2z:function(n){gx.O.ZV45ProdutoCodigoOut=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOOUT",gx.O.AV45ProdutoCodigoOut,0)},c2v:function(){gx.O.AV45ProdutoCodigoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOOUT",".")},nac:gx.falseFn};n[71]={fld:"BTNHELP",grid:0};n[73]={fld:"PROMPT_3695",grid:394};this.A3702ObservacaoNotaId=0;this.Z3702ObservacaoNotaId=0;this.O3702ObservacaoNotaId=0;this.A3692ObservacaoNotaProdutoId=0;this.Z3692ObservacaoNotaProdutoId=0;this.O3692ObservacaoNotaProdutoId=0;this.A3693ObservacaoNotaProdutoDesc="";this.Z3693ObservacaoNotaProdutoDesc="";this.O3693ObservacaoNotaProdutoDesc="";this.A3695ObservacaoNotaCFOPCodigo=0;this.Z3695ObservacaoNotaCFOPCodigo=0;this.O3695ObservacaoNotaCFOPCodigo=0;this.A3696ObservacaoNotaCFOPDescricao="";this.Z3696ObservacaoNotaCFOPDescricao="";this.O3696ObservacaoNotaCFOPDescricao="";this.A3697ObservacaoNotaUF="";this.Z3697ObservacaoNotaUF="";this.O3697ObservacaoNotaUF="";this.A3698ObservacaoNotaObs="";this.Z3698ObservacaoNotaObs="";this.O3698ObservacaoNotaObs="";this.A3699ObservacaoNotaUsuarioAlt="";this.Z3699ObservacaoNotaUsuarioAlt="";this.O3699ObservacaoNotaUsuarioAlt="";this.A3700ObservacaoNotaDataHoraAlt=gx.date.nullDate();this.Z3700ObservacaoNotaDataHoraAlt=gx.date.nullDate();this.O3700ObservacaoNotaDataHoraAlt=gx.date.nullDate();this.AV36SNVenda="";this.ZV36SNVenda="";this.OV36SNVenda="";this.AV29LoteProdutoCombinacao="";this.ZV29LoteProdutoCombinacao="";this.OV29LoteProdutoCombinacao="";this.AV17AcessoSistemaSequencia=0;this.ZV17AcessoSistemaSequencia=0;this.OV17AcessoSistemaSequencia=0;this.AV19ObservacaoNotaProdutoEmpId="";this.ZV19ObservacaoNotaProdutoEmpId="";this.OV19ObservacaoNotaProdutoEmpId="";this.AV24QtdeCaracter=0;this.ZV24QtdeCaracter=0;this.OV24QtdeCaracter=0;this.AV40CharOut="";this.ZV40CharOut="";this.OV40CharOut="";this.AV43IntOut=0;this.ZV43IntOut=0;this.OV43IntOut=0;this.AV44NumAux=0;this.ZV44NumAux=0;this.OV44NumAux=0;this.AV32CharAux="";this.ZV32CharAux="";this.OV32CharAux="";this.AV41DataAux=gx.date.nullDate();this.ZV41DataAux=gx.date.nullDate();this.OV41DataAux=gx.date.nullDate();this.AV46SubGrupoOut=0;this.ZV46SubGrupoOut=0;this.OV46SubGrupoOut=0;this.AV42GrupoOut=0;this.ZV42GrupoOut=0;this.OV42GrupoOut=0;this.AV45ProdutoCodigoOut=0;this.ZV45ProdutoCodigoOut=0;this.OV45ProdutoCodigoOut=0;this.AV7UsrCod="";this.AV10EmpresaLogadaId="";this.AV16Sistema="";this.AV47Pgmname="";this.AV48Pgmdesc="";this.AV11MsgErro="";this.AV17AcessoSistemaSequencia=0;this.AV14Modulo="";this.AV8Logon={};this.AV13Tabela="";this.AV12EmpresaPadrao="";this.AV19ObservacaoNotaProdutoEmpId="";this.AV32CharAux="";this.AV44NumAux=0;this.AV41DataAux=gx.date.nullDate();this.AV36SNVenda="";this.AV42GrupoOut=0;this.AV46SubGrupoOut=0;this.AV45ProdutoCodigoOut=0;this.AV29LoteProdutoCombinacao="";this.AV40CharOut="";this.AV43IntOut=0;this.AV20SnAlterou="";this.AV18ObservacaoNotaId=0;this.A3701ObservacaoNotaEmpresaId="";this.A3702ObservacaoNotaId=0;this.A3691ObservacaoNotaProdutoEmpId="";this.A3699ObservacaoNotaUsuarioAlt="";this.A3700ObservacaoNotaDataHoraAlt=gx.date.nullDate();this.A3692ObservacaoNotaProdutoId=0;this.A3693ObservacaoNotaProdutoDesc="";this.A3694ObservacaoNotaProdutoDescRes="";this.A3695ObservacaoNotaCFOPCodigo=0;this.A3696ObservacaoNotaCFOPDescricao="";this.A3697ObservacaoNotaUF="";this.A3698ObservacaoNotaObs="";this.Gx_mode="";this.Events={e12732_client:["'FECHAR'",!0],e13732_client:["AFTER TRN",!0],e1473394_client:["ENTER",!0],e1573394_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"AV18ObservacaoNotaId",fld:"vOBSERVACAONOTAID"},{av:"Gx_mode",fld:"vMODE"}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV17AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.setPrompt("PROMPTPROD",[19]);this.setPrompt("PROMPT_3695",[26]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV18ObservacaoNotaId","vOBSERVACAONOTAID",0,"int");this.setVCMap("AV12EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A3701ObservacaoNotaEmpresaId","OBSERVACAONOTAEMPRESAID",0,"char");this.setVCMap("A3691ObservacaoNotaProdutoEmpId","OBSERVACAONOTAPRODUTOEMPID",0,"char");this.setVCMap("AV20SnAlterou","vSNALTEROU",0,"char");this.setVCMap("AV7UsrCod","vUSRCOD",0,"char");this.setVCMap("A3694ObservacaoNotaProdutoDescRes","OBSERVACAONOTAPRODUTODESCRES",0,"svchar");this.setVCMap("AV48Pgmdesc","vPGMDESC",0,"char");this.setVCMap("AV47Pgmname","vPGMNAME",0,"char");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars();this.LvlOlds[394]=["O3698ObservacaoNotaObs","O3697ObservacaoNotaUF","O3695ObservacaoNotaCFOPCodigo","O3692ObservacaoNotaProdutoId","O3702ObservacaoNotaId"]});gx.setParentObj(new tobservacaonota)