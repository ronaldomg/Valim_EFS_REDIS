/**@preserve  GeneXus Java 10_3_12-110051 on January 29, 2021 21:28:36.2
*
gx.evt.autoSkip=!1;gx.define("halterafaseos",!1,function(){this.ServerClass="halterafaseos";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV48inOrdemServicoApareSeq=gx.fn.getIntegerValue("vINORDEMSERVICOAPARESEQ",".")};this.Validv_Ordemservicoid=function(){try{var n=gx.util.balloon.getNew("vORDEMSERVICOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Profissionalid=function(){try{var n=gx.util.balloon.getNew("vPROFISSIONALID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s1711_client=function(){gx.fn.setCtrlProperty("TABLEFORM","Visible",0);this.addMessage("Suas permissões não permitem alterar a fase desta OS");this.addMessage(this.AV47MsgErro)};this.e122f22_client=function(){this.executeServerEvent("VPROFISSIONALID.ISVALID",!0,null,!1,!0)};this.e132f22_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e162f21_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,23,25,27,29,31,33,35,38,40,42,44,46,48,50,52,54,56,59,62,64,67,69,70,73,75,83,86,87,88,89,90,91,92,93,94];this.GXLastCtrlId=94;n[2]={fld:"TABLEPRINCIPAL",grid:0};n[5]={fld:"TABLE2",grid:0};n[8]={fld:"OS",format:0,grid:0};n[10]={lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV26ordemservicoid",gxold:"OV26ordemservicoid",gxvar:"AV26ordemservicoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26ordemservicoid=gx.num.intval(n)},v2z:function(n){gx.O.ZV26ordemservicoid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV26ordemservicoid,0)},c2v:function(){gx.O.AV26ordemservicoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",".")},nac:gx.falseFn};n[12]={fld:"CLIENTETIT",format:0,grid:0};n[14]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV29PessoaFantasia",gxold:"OV29PessoaFantasia",gxvar:"AV29PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PessoaFantasia=n},v2z:function(n){gx.O.ZV29PessoaFantasia=n},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV29PessoaFantasia,0)},c2v:function(){gx.O.AV29PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};n[17]={fld:"DESEQUIPAMENTO",format:0,grid:0};n[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV22AparelhoDescricao",gxold:"OV22AparelhoDescricao",gxvar:"AV22AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22AparelhoDescricao=n},v2z:function(n){gx.O.ZV22AparelhoDescricao=n},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV22AparelhoDescricao,0)},c2v:function(){gx.O.AV22AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};n[21]={fld:"CARACTIT1",format:0,grid:0};n[23]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR1",gxz:"ZV13AparelhoCaracVlr1",gxold:"OV13AparelhoCaracVlr1",gxvar:"AV13AparelhoCaracVlr1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13AparelhoCaracVlr1=n},v2z:function(n){gx.O.ZV13AparelhoCaracVlr1=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR1",gx.O.AV13AparelhoCaracVlr1,0)},c2v:function(){gx.O.AV13AparelhoCaracVlr1=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR1")},nac:gx.falseFn};n[25]={fld:"CARACTIT2",format:0,grid:0};n[27]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR2",gxz:"ZV14AparelhoCaracVlr2",gxold:"OV14AparelhoCaracVlr2",gxvar:"AV14AparelhoCaracVlr2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14AparelhoCaracVlr2=n},v2z:function(n){gx.O.ZV14AparelhoCaracVlr2=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR2",gx.O.AV14AparelhoCaracVlr2,0)},c2v:function(){gx.O.AV14AparelhoCaracVlr2=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR2")},nac:gx.falseFn};n[29]={fld:"CARACTIT3",format:0,grid:0};n[31]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR3",gxz:"ZV15AparelhoCaracVlr3",gxold:"OV15AparelhoCaracVlr3",gxvar:"AV15AparelhoCaracVlr3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15AparelhoCaracVlr3=n},v2z:function(n){gx.O.ZV15AparelhoCaracVlr3=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR3",gx.O.AV15AparelhoCaracVlr3,0)},c2v:function(){gx.O.AV15AparelhoCaracVlr3=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR3")},nac:gx.falseFn};n[33]={fld:"CARACTIT4",format:0,grid:0};n[35]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR4",gxz:"ZV16AparelhoCaracVlr4",gxold:"OV16AparelhoCaracVlr4",gxvar:"AV16AparelhoCaracVlr4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16AparelhoCaracVlr4=n},v2z:function(n){gx.O.ZV16AparelhoCaracVlr4=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR4",gx.O.AV16AparelhoCaracVlr4,0)},c2v:function(){gx.O.AV16AparelhoCaracVlr4=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR4")},nac:gx.falseFn};n[38]={fld:"CARACTIT5",format:0,grid:0};n[40]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR5",gxz:"ZV17AparelhoCaracVlr5",gxold:"OV17AparelhoCaracVlr5",gxvar:"AV17AparelhoCaracVlr5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17AparelhoCaracVlr5=n},v2z:function(n){gx.O.ZV17AparelhoCaracVlr5=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR5",gx.O.AV17AparelhoCaracVlr5,0)},c2v:function(){gx.O.AV17AparelhoCaracVlr5=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR5")},nac:gx.falseFn};n[42]={fld:"CARACTIT6",format:0,grid:0};n[44]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR6",gxz:"ZV18AparelhoCaracVlr6",gxold:"OV18AparelhoCaracVlr6",gxvar:"AV18AparelhoCaracVlr6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18AparelhoCaracVlr6=n},v2z:function(n){gx.O.ZV18AparelhoCaracVlr6=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR6",gx.O.AV18AparelhoCaracVlr6,0)},c2v:function(){gx.O.AV18AparelhoCaracVlr6=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR6")},nac:gx.falseFn};n[46]={fld:"CARACTIT7",format:0,grid:0};n[48]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR7",gxz:"ZV19AparelhoCaracVlr7",gxold:"OV19AparelhoCaracVlr7",gxvar:"AV19AparelhoCaracVlr7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19AparelhoCaracVlr7=n},v2z:function(n){gx.O.ZV19AparelhoCaracVlr7=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR7",gx.O.AV19AparelhoCaracVlr7,0)},c2v:function(){gx.O.AV19AparelhoCaracVlr7=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR7")},nac:gx.falseFn};n[50]={fld:"CARACTIT8",format:0,grid:0};n[52]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR8",gxz:"ZV20AparelhoCaracVlr8",gxold:"OV20AparelhoCaracVlr8",gxvar:"AV20AparelhoCaracVlr8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20AparelhoCaracVlr8=n},v2z:function(n){gx.O.ZV20AparelhoCaracVlr8=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR8",gx.O.AV20AparelhoCaracVlr8,0)},c2v:function(){gx.O.AV20AparelhoCaracVlr8=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR8")},nac:gx.falseFn};n[54]={fld:"CARACTIT9",format:0,grid:0};n[56]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVLR9",gxz:"ZV21AparelhoCaracVlr9",gxold:"OV21AparelhoCaracVlr9",gxvar:"AV21AparelhoCaracVlr9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21AparelhoCaracVlr9=n},v2z:function(n){gx.O.ZV21AparelhoCaracVlr9=n},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVLR9",gx.O.AV21AparelhoCaracVlr9,0)},c2v:function(){gx.O.AV21AparelhoCaracVlr9=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVLR9")},nac:gx.falseFn};n[59]={fld:"TABLEFORM",grid:0};n[62]={fld:"LBLFASE",format:0,grid:0};n[64]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEID",gxz:"ZV25ordemservicofaseid",gxold:"OV25ordemservicofaseid",gxvar:"AV25ordemservicofaseid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV25ordemservicofaseid=gx.num.intval(n)},v2z:function(n){gx.O.ZV25ordemservicofaseid=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOFASEID",gx.O.AV25ordemservicofaseid)},c2v:function(){gx.O.AV25ordemservicofaseid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASEID",".")},nac:gx.falseFn};n[67]={fld:"LBLPROFISSIONAL",format:0,grid:0};n[69]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:"e122f22_client",rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV32profissionalid",gxold:"OV32profissionalid",gxvar:"AV32profissionalid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32profissionalid=gx.num.intval(n)},v2z:function(n){gx.O.ZV32profissionalid=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV32profissionalid,0)},c2v:function(){gx.O.AV32profissionalid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",".")},nac:gx.falseFn};n[70]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV33profissionalnome",gxold:"OV33profissionalnome",gxvar:"AV33profissionalnome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33profissionalnome=n},v2z:function(n){gx.O.ZV33profissionalnome=n},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV33profissionalnome,0)},c2v:function(){gx.O.AV33profissionalnome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};n[73]={fld:"CLIENTETIT3",format:0,grid:0};n[75]={lvl:0,type:"vchar",len:1e3,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOOCORRENCIAOBS",gxz:"ZV27OrdemServicoOcorrenciaObs",gxold:"OV27OrdemServicoOcorrenciaObs",gxvar:"AV27OrdemServicoOcorrenciaObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27OrdemServicoOcorrenciaObs=n},v2z:function(n){gx.O.ZV27OrdemServicoOcorrenciaObs=n},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOOCORRENCIAOBS",gx.O.AV27OrdemServicoOcorrenciaObs,0)},c2v:function(){gx.O.AV27OrdemServicoOcorrenciaObs=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOOCORRENCIAOBS")},nac:gx.falseFn};n[83]={fld:"TABLEVARS",grid:0};n[86]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESEQUIPAMENTO",gxz:"ZV23desequipamento",gxold:"OV23desequipamento",gxvar:"AV23desequipamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23desequipamento=n},v2z:function(n){gx.O.ZV23desequipamento=n},v2c:function(){gx.fn.setControlValue("vDESEQUIPAMENTO",gx.O.AV23desequipamento,0)},c2v:function(){gx.O.AV23desequipamento=this.val()},val:function(){return gx.fn.getControlValue("vDESEQUIPAMENTO")},nac:gx.falseFn};n[87]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARESEQ",gxz:"ZV8OrdemServicoApareSeq",gxold:"OV8OrdemServicoApareSeq",gxvar:"AV8OrdemServicoApareSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8OrdemServicoApareSeq=gx.num.intval(n)},v2z:function(n){gx.O.ZV8OrdemServicoApareSeq=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARESEQ",gx.O.AV8OrdemServicoApareSeq,0)},c2v:function(){gx.O.AV8OrdemServicoApareSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARESEQ",".")},nac:gx.falseFn};n[88]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV7FilialId",gxold:"OV7FilialId",gxvar:"AV7FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7FilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV7FilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV7FilialId,0)},c2v:function(){gx.O.AV7FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[89]={lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISENTER",gxz:"ZV43isEnter",gxold:"OV43isEnter",gxvar:"AV43isEnter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){gx.O.AV43isEnter=gx.lang.booleanValue(n)},v2z:function(n){gx.O.ZV43isEnter=gx.lang.booleanValue(n)},v2c:function(){gx.fn.setCheckBoxValue("vISENTER",gx.O.AV43isEnter,!0)},c2v:function(){gx.O.AV43isEnter=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENTER")},nac:gx.falseFn,values:["true","false"]};n[90]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOPROFISSIONALID",gxz:"ZV28OrdemServicoProfissionalId",gxold:"OV28OrdemServicoProfissionalId",gxvar:"AV28OrdemServicoProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28OrdemServicoProfissionalId=gx.num.intval(n)},v2z:function(n){gx.O.ZV28OrdemServicoProfissionalId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOPROFISSIONALID",gx.O.AV28OrdemServicoProfissionalId,0)},c2v:function(){gx.O.AV28OrdemServicoProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOPROFISSIONALID",".")},nac:gx.falseFn};n[91]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOLDPROFISSIONALID",gxz:"ZV44OldProfissionalId",gxold:"OV44OldProfissionalId",gxvar:"AV44OldProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44OldProfissionalId=gx.num.intval(n)},v2z:function(n){gx.O.ZV44OldProfissionalId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vOLDPROFISSIONALID",gx.O.AV44OldProfissionalId,0)},c2v:function(){gx.O.AV44OldProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOLDPROFISSIONALID",".")},nac:gx.falseFn};n[92]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOID",gxz:"ZV38AparelhoId",gxold:"OV38AparelhoId",gxvar:"AV38AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38AparelhoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV38AparelhoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV38AparelhoId,0)},c2v:function(){gx.O.AV38AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",".")},nac:gx.falseFn};n[93]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRCOD",gxz:"ZV35usrcod",gxold:"OV35usrcod",gxvar:"AV35usrcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV35usrcod=n},v2z:function(n){gx.O.ZV35usrcod=n},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV35usrcod,0)},c2v:function(){gx.O.AV35usrcod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};n[94]={fld:"PROMPT_PROFISSIONALID",grid:0};this.AV26ordemservicoid=0;this.ZV26ordemservicoid=0;this.OV26ordemservicoid=0;this.AV29PessoaFantasia="";this.ZV29PessoaFantasia="";this.OV29PessoaFantasia="";this.AV22AparelhoDescricao="";this.ZV22AparelhoDescricao="";this.OV22AparelhoDescricao="";this.AV13AparelhoCaracVlr1="";this.ZV13AparelhoCaracVlr1="";this.OV13AparelhoCaracVlr1="";this.AV14AparelhoCaracVlr2="";this.ZV14AparelhoCaracVlr2="";this.OV14AparelhoCaracVlr2="";this.AV15AparelhoCaracVlr3="";this.ZV15AparelhoCaracVlr3="";this.OV15AparelhoCaracVlr3="";this.AV16AparelhoCaracVlr4="";this.ZV16AparelhoCaracVlr4="";this.OV16AparelhoCaracVlr4="";this.AV17AparelhoCaracVlr5="";this.ZV17AparelhoCaracVlr5="";this.OV17AparelhoCaracVlr5="";this.AV18AparelhoCaracVlr6="";this.ZV18AparelhoCaracVlr6="";this.OV18AparelhoCaracVlr6="";this.AV19AparelhoCaracVlr7="";this.ZV19AparelhoCaracVlr7="";this.OV19AparelhoCaracVlr7="";this.AV20AparelhoCaracVlr8="";this.ZV20AparelhoCaracVlr8="";this.OV20AparelhoCaracVlr8="";this.AV21AparelhoCaracVlr9="";this.ZV21AparelhoCaracVlr9="";this.OV21AparelhoCaracVlr9="";this.AV25ordemservicofaseid=0;this.ZV25ordemservicofaseid=0;this.OV25ordemservicofaseid=0;this.AV32profissionalid=0;this.ZV32profissionalid=0;this.OV32profissionalid=0;this.AV33profissionalnome="";this.ZV33profissionalnome="";this.OV33profissionalnome="";this.AV27OrdemServicoOcorrenciaObs="";this.ZV27OrdemServicoOcorrenciaObs="";this.OV27OrdemServicoOcorrenciaObs="";this.AV23desequipamento="";this.ZV23desequipamento="";this.OV23desequipamento="";this.AV8OrdemServicoApareSeq=0;this.ZV8OrdemServicoApareSeq=0;this.OV8OrdemServicoApareSeq=0;this.AV7FilialId=0;this.ZV7FilialId=0;this.OV7FilialId=0;this.AV43isEnter=!1;this.ZV43isEnter=!1;this.OV43isEnter=!1;this.AV28OrdemServicoProfissionalId=0;this.ZV28OrdemServicoProfissionalId=0;this.OV28OrdemServicoProfissionalId=0;this.AV44OldProfissionalId=0;this.ZV44OldProfissionalId=0;this.OV44OldProfissionalId=0;this.AV38AparelhoId=0;this.ZV38AparelhoId=0;this.OV38AparelhoId=0;this.AV35usrcod="";this.ZV35usrcod="";this.OV35usrcod="";this.AV26ordemservicoid=0;this.AV29PessoaFantasia="";this.AV22AparelhoDescricao="";this.AV13AparelhoCaracVlr1="";this.AV14AparelhoCaracVlr2="";this.AV15AparelhoCaracVlr3="";this.AV16AparelhoCaracVlr4="";this.AV17AparelhoCaracVlr5="";this.AV18AparelhoCaracVlr6="";this.AV19AparelhoCaracVlr7="";this.AV20AparelhoCaracVlr8="";this.AV21AparelhoCaracVlr9="";this.AV25ordemservicofaseid=0;this.AV32profissionalid=0;this.AV33profissionalnome="";this.AV27OrdemServicoOcorrenciaObs="";this.AV23desequipamento="";this.AV8OrdemServicoApareSeq=0;this.AV7FilialId=0;this.AV43isEnter=!1;this.AV28OrdemServicoProfissionalId=0;this.AV44OldProfissionalId=0;this.AV38AparelhoId=0;this.AV35usrcod="";this.AV48inOrdemServicoApareSeq=0;this.A8919OrdemServicoSituacao="";this.A8791OrdemServicoEmpresaId="";this.A8792OrdemServicoId=0;this.A9308OrdemServicoVendedorId=0;this.A8909OrdemServicoApareSeq=0;this.A8821AparelhoDescricao="";this.A8825AparelhoId=0;this.A8566ProfissionalId=0;this.A8608ProfissionalNome="";this.A8881OrdemServicoApareSNEntregue="";this.A8923OrdemServicoApareCaracVlr1="";this.A8924OrdemServicoApareCaracVlr2="";this.A8925OrdemServicoApareCaracVlr3="";this.A8926OrdemServicoApareCaracVlr4="";this.A8927OrdemServicoApareCaracVlr5="";this.A8928OrdemServicoApareCaracVlr6="";this.A8929OrdemServicoApareCaracVlr7="";this.A8930OrdemServicoApareCaracVlr8="";this.A8931OrdemServicoApareCaracVlr9="";this.A8824AparelhoEmpresaId="";this.A8882OrdemServicoApareDtPrevisao=gx.date.nullDate();this.A8883OrdemServicoApareCondRecepcao="";this.A8884OrdemServicoApareDefeDetectado="";this.A8885OrdemServicoApareDefeReclamado="";this.A8886OrdemServicoApareDefeSolucao="";this.A8887OrdemServicoApareGarantia="";this.A8729OrdemServicoEquipFabricEmpId="";this.A8730OrdemServicoEquipFabricId=0;this.A8731OrdemServicoEquipRevenEmpId="";this.A8732OrdemServicoEquipRevenId=0;this.A8888OrdemServicoApareNFGarantia=0;this.A8889OrdemServicoApareDtNFGarantia=gx.date.nullDate();this.A8891OrdemServicoApareCarac1EmpId="";this.A8892OrdemServicoApareCarac1Id=0;this.A8893OrdemServicoApareCarac2EmpId="";this.A8894OrdemServicoApareCarac2Id=0;this.A8896OrdemServicoApareCarac3Id=0;this.A8898OrdemServicoApareCarac4Id=0;this.A8900OrdemServicoApareCarac5Id=0;this.A8902OrdemServicoApareCarac6Id=0;this.A8904OrdemServicoApareCarac7Id=0;this.A8906OrdemServicoApareCarac8Id=0;this.A8908OrdemServicoApareCarac9Id=0;this.A8606OrdemServicoFaseEmpresaId="";this.A8607OrdemServicoFaseId=0;this.A8567ProfissionalEmpresaId="";this.A8833AparelhoCaracEmpresaId="";this.A8837AparelhoCaracValorId=0;this.A8832AparelhoCaracId=0;this.A8834AparelhoCaracValorConteudo="";this.A8920AparelhoCaracSituacao="";this.A8828AparelhoCaracOrdenacao=0;this.A8826AparelhoCaracDescricao="";this.A8827AparelhoCaracTipo=0;this.A71PessoaFantasia="";this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.AV47MsgErro="";this.Events={e122f22_client:["VPROFISSIONALID.ISVALID",!0],e132f22_client:["ENTER",!0],e162f21_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A8566ProfissionalId",fld:"PROFISSIONALID"},{av:"AV32profissionalid",fld:"vPROFISSIONALID"},{av:"A8567ProfissionalEmpresaId",fld:"PROFISSIONALEMPRESAID"},{av:"AV31ProfissionalEmpresaId",fld:"vPROFISSIONALEMPRESAID"},{av:"A8608ProfissionalNome",fld:"PROFISSIONALNOME"}],[{av:"AV43isEnter",fld:"vISENTER"},{av:"AV56GXLvl190",fld:"vGXLVL190"},{av:"AV33profissionalnome",fld:"vPROFISSIONALNOME"}]];this.EvtParms["VPROFISSIONALID.ISVALID"]=[[{av:"A8566ProfissionalId",fld:"PROFISSIONALID"},{av:"AV32profissionalid",fld:"vPROFISSIONALID"},{av:"A8567ProfissionalEmpresaId",fld:"PROFISSIONALEMPRESAID"},{av:"AV31ProfissionalEmpresaId",fld:"vPROFISSIONALEMPRESAID"},{av:"A8608ProfissionalNome",fld:"PROFISSIONALNOME"}],[{av:"AV56GXLvl190",fld:"vGXLVL190"},{av:"AV33profissionalnome",fld:"vPROFISSIONALNOME"}]];this.EvtParms.ENTER=[[{av:"AV32profissionalid",fld:"vPROFISSIONALID"},{av:"AV30ProAparelho",fld:"vPROAPARELHO"},{av:"AV44OldProfissionalId",fld:"vOLDPROFISSIONALID"},{av:"AV33profissionalnome",fld:"vPROFISSIONALNOME"},{av:"AV40AparelhoProfissional",fld:"vAPARELHOPROFISSIONAL"},{av:"AV10OrdemServicoEmpresaId",fld:"vORDEMSERVICOEMPRESAID"},{av:"AV26ordemservicoid",fld:"vORDEMSERVICOID",hsh:!0},{av:"AV6AparelhoEmpresaId",fld:"vAPARELHOEMPRESAID"},{av:"AV38AparelhoId",fld:"vAPARELHOID"},{av:"AV8OrdemServicoApareSeq",fld:"vORDEMSERVICOAPARESEQ"},{av:"AV37registraordemservico",fld:"vREGISTRAORDEMSERVICO"},{av:"AV27OrdemServicoOcorrenciaObs",fld:"vORDEMSERVICOOCORRENCIAOBS"},{av:"A8919OrdemServicoSituacao",fld:"ORDEMSERVICOSITUACAO"},{av:"AV35usrcod",fld:"vUSRCOD"},{av:"A8792OrdemServicoId",fld:"ORDEMSERVICOID"},{av:"A8791OrdemServicoEmpresaId",fld:"ORDEMSERVICOEMPRESAID"},{av:"A8909OrdemServicoApareSeq",fld:"ORDEMSERVICOAPARESEQ"},{av:"AV48inOrdemServicoApareSeq",fld:"vINORDEMSERVICOAPARESEQ",hsh:!0},{av:"A8825AparelhoId",fld:"APARELHOID"},{av:"A8566ProfissionalId",fld:"PROFISSIONALID"},{av:"A8608ProfissionalNome",fld:"PROFISSIONALNOME"},{av:"A8881OrdemServicoApareSNEntregue",fld:"ORDEMSERVICOAPARESNENTREGUE"},{av:"A8923OrdemServicoApareCaracVlr1",fld:"ORDEMSERVICOAPARECARACVLR1"},{av:"A8924OrdemServicoApareCaracVlr2",fld:"ORDEMSERVICOAPARECARACVLR2"},{av:"A8925OrdemServicoApareCaracVlr3",fld:"ORDEMSERVICOAPARECARACVLR3"},{av:"A8926OrdemServicoApareCaracVlr4",fld:"ORDEMSERVICOAPARECARACVLR4"},{av:"A8927OrdemServicoApareCaracVlr5",fld:"ORDEMSERVICOAPARECARACVLR5"},{av:"A8928OrdemServicoApareCaracVlr6",fld:"ORDEMSERVICOAPARECARACVLR6"},{av:"A8929OrdemServicoApareCaracVlr7",fld:"ORDEMSERVICOAPARECARACVLR7"},{av:"A8930OrdemServicoApareCaracVlr8",fld:"ORDEMSERVICOAPARECARACVLR8"},{av:"A8931OrdemServicoApareCaracVlr9",fld:"ORDEMSERVICOAPARECARACVLR9"},{av:"A8824AparelhoEmpresaId",fld:"APARELHOEMPRESAID"},{av:"A8882OrdemServicoApareDtPrevisao",fld:"ORDEMSERVICOAPAREDTPREVISAO"},{av:"A8883OrdemServicoApareCondRecepcao",fld:"ORDEMSERVICOAPARECONDRECEPCAO"},{av:"A8884OrdemServicoApareDefeDetectado",fld:"ORDEMSERVICOAPAREDEFEDETECTADO"},{av:"A8885OrdemServicoApareDefeReclamado",fld:"ORDEMSERVICOAPAREDEFERECLAMADO"},{av:"A8886OrdemServicoApareDefeSolucao",fld:"ORDEMSERVICOAPAREDEFESOLUCAO"},{av:"A8887OrdemServicoApareGarantia",fld:"ORDEMSERVICOAPAREGARANTIA"},{av:"A8729OrdemServicoEquipFabricEmpId",fld:"ORDEMSERVICOEQUIPFABRICEMPID"},{av:"A8730OrdemServicoEquipFabricId",fld:"ORDEMSERVICOEQUIPFABRICID"},{av:"A8731OrdemServicoEquipRevenEmpId",fld:"ORDEMSERVICOEQUIPREVENEMPID"},{av:"A8732OrdemServicoEquipRevenId",fld:"ORDEMSERVICOEQUIPREVENID"},{av:"A8888OrdemServicoApareNFGarantia",fld:"ORDEMSERVICOAPARENFGARANTIA"},{av:"A8889OrdemServicoApareDtNFGarantia",fld:"ORDEMSERVICOAPAREDTNFGARANTIA"},{av:"A8891OrdemServicoApareCarac1EmpId",fld:"ORDEMSERVICOAPARECARAC1EMPID"},{av:"A8892OrdemServicoApareCarac1Id",fld:"ORDEMSERVICOAPARECARAC1ID"},{av:"A8893OrdemServicoApareCarac2EmpId",fld:"ORDEMSERVICOAPARECARAC2EMPID"},{av:"A8894OrdemServicoApareCarac2Id",fld:"ORDEMSERVICOAPARECARAC2ID"},{av:"A8896OrdemServicoApareCarac3Id",fld:"ORDEMSERVICOAPARECARAC3ID"},{av:"A8898OrdemServicoApareCarac4Id",fld:"ORDEMSERVICOAPARECARAC4ID"},{av:"A8900OrdemServicoApareCarac5Id",fld:"ORDEMSERVICOAPARECARAC5ID"},{av:"A8902OrdemServicoApareCarac6Id",fld:"ORDEMSERVICOAPARECARAC6ID"},{av:"A8904OrdemServicoApareCarac7Id",fld:"ORDEMSERVICOAPARECARAC7ID"},{av:"A8906OrdemServicoApareCarac8Id",fld:"ORDEMSERVICOAPARECARAC8ID"},{av:"A8908OrdemServicoApareCarac9Id",fld:"ORDEMSERVICOAPARECARAC9ID"},{av:"A8606OrdemServicoFaseEmpresaId",fld:"ORDEMSERVICOFASEEMPRESAID"},{av:"AV43isEnter",fld:"vISENTER"},{av:"AV25ordemservicofaseid",fld:"vORDEMSERVICOFASEID"},{av:"A8607OrdemServicoFaseId",fld:"ORDEMSERVICOFASEID"},{av:"A8821AparelhoDescricao",fld:"APARELHODESCRICAO"}],[{av:"AV42AparelhoProfissionalItem",fld:"vAPARELHOPROFISSIONALITEM"},{av:"AV40AparelhoProfissional",fld:"vAPARELHOPROFISSIONAL"},{av:"AV8OrdemServicoApareSeq",fld:"vORDEMSERVICOAPARESEQ"},{av:"AV38AparelhoId",fld:"vAPARELHOID"},{av:"AV6AparelhoEmpresaId",fld:"vAPARELHOEMPRESAID"},{av:"AV26ordemservicoid",fld:"vORDEMSERVICOID",hsh:!0},{av:"AV10OrdemServicoEmpresaId",fld:"vORDEMSERVICOEMPRESAID"},{av:"AV43isEnter",fld:"vISENTER"},{av:"AV37registraordemservico",fld:"vREGISTRAORDEMSERVICO"},{av:"AV36registraordemservicoAparelho",fld:"vREGISTRAORDEMSERVICOAPARELHO"},{av:"AV11OrdemServicoSituacao",fld:"vORDEMSERVICOSITUACAO"},{av:"AV32profissionalid",fld:"vPROFISSIONALID"},{av:"AV33profissionalnome",fld:"vPROFISSIONALNOME"},{av:"AV9OrdemServicoApareSNEntregue",fld:"vORDEMSERVICOAPARESNENTREGUE"},{av:"AV13AparelhoCaracVlr1",fld:"vAPARELHOCARACVLR1"},{av:"AV14AparelhoCaracVlr2",fld:"vAPARELHOCARACVLR2"},{av:"AV15AparelhoCaracVlr3",fld:"vAPARELHOCARACVLR3"},{av:"AV16AparelhoCaracVlr4",fld:"vAPARELHOCARACVLR4"},{av:"AV17AparelhoCaracVlr5",fld:"vAPARELHOCARACVLR5"},{av:"AV18AparelhoCaracVlr6",fld:"vAPARELHOCARACVLR6"},{av:"AV19AparelhoCaracVlr7",fld:"vAPARELHOCARACVLR7"},{av:"AV20AparelhoCaracVlr8",fld:"vAPARELHOCARACVLR8"},{av:"AV21AparelhoCaracVlr9",fld:"vAPARELHOCARACVLR9"},{av:"AV25ordemservicofaseid",fld:"vORDEMSERVICOFASEID"},{av:"AV22AparelhoDescricao",fld:"vAPARELHODESCRICAO"}]];this.setPrompt("PROMPT_PROFISSIONALID",[69]);this.EnterCtrl=["BTENTER"];this.setVCMap("A8791OrdemServicoEmpresaId","ORDEMSERVICOEMPRESAID",0,"char");this.setVCMap("A8792OrdemServicoId","ORDEMSERVICOID",0,"int");this.setVCMap("AV48inOrdemServicoApareSeq","vINORDEMSERVICOAPARESEQ",0,"int");this.InitStandaloneVars()});gx.setParentObj(new halterafaseos)