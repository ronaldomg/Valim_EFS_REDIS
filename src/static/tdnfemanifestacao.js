/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:35:24.66
*/
gx.evt.autoSkip = false;
gx.define('tdnfemanifestacao', false, function () {
   this.ServerClass =  "tdnfemanifestacao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Manifestacaochnfe=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Manifestacaochnfe",["gx.O.A1188FilialUFInscEstadual", "gx.O.A10933ManifestacaoCHNFE", "gx.O.A10937ManifestacaoCNPJEmissor", "gx.O.A10938ManifestacaoNome", 'gx.date.urlDateTime(gx.O.A10939ManifestacaoDtEmissao,"DMY4")', "gx.num.urlDecimal(gx.O.A10940ManifestacaoValor,\'.\',\',\')", "gx.O.A10941ManifestacaotpEvento", "gx.O.A10942ManifestacaotpEventoDesc", "gx.O.A10934DNFEManifestacaoStatus", "gx.O.A10935DNFEManifestacaoStatusDesc", 'gx.date.urlDateTime(gx.O.A10936DNFEManifestacaoStatusData,"DMY4")', "gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId"],["A1156FilialId", "A1228FilialEmpresaId", "A10937ManifestacaoCNPJEmissor", "A10938ManifestacaoNome", "A10939ManifestacaoDtEmissao", "A10940ManifestacaoValor", "A10941ManifestacaotpEvento", "A10942ManifestacaotpEventoDesc", "A10934DNFEManifestacaoStatus", "A10935DNFEManifestacaoStatusDesc", "A10936DNFEManifestacaoStatusData", "A1245FilialCNPJ", "A1188FilialUFInscEstadual", "Gx_mode", "Z10933ManifestacaoCHNFE", "Z1156FilialId", "Z1228FilialEmpresaId", "Z10937ManifestacaoCNPJEmissor", "Z10938ManifestacaoNome", "Z10939ManifestacaoDtEmissao", "Z10940ManifestacaoValor", "Z10941ManifestacaotpEvento", "Z10942ManifestacaotpEventoDesc", "Z10934DNFEManifestacaoStatus", "Z10935DNFEManifestacaoStatusDesc", "Z10936DNFEManifestacaoStatusData", "Z1245FilialCNPJ", "Z1188FilialUFInscEstadual", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialempresaid",["gx.O.A1228FilialEmpresaId", "gx.O.A1156FilialId", "gx.O.A1245FilialCNPJ", "gx.O.A1188FilialUFInscEstadual"],["A1245FilialCNPJ", "A1188FilialUFInscEstadual"]);
      return true;
   }
   this.e11fq802_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12fq802_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104];
   this.GXLastCtrlId =104;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKMANIFESTACAOCHNFE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Manifestacaochnfe,isvalid:null,rgrid:[],fld:"MANIFESTACAOCHNFE",gxz:"Z10933ManifestacaoCHNFE",gxold:"O10933ManifestacaoCHNFE",gxvar:"A10933ManifestacaoCHNFE",ucs:[],op:[44,49,104,99,94,89,84,79,74,69,64],ip:[44,49,104,99,94,89,84,79,74,69,64,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10933ManifestacaoCHNFE=Value},v2z:function(Value){gx.O.Z10933ManifestacaoCHNFE=Value},v2c:function(){gx.fn.setControlValue("MANIFESTACAOCHNFE",gx.O.A10933ManifestacaoCHNFE,0)},c2v:function(){gx.O.A10933ManifestacaoCHNFE=this.val()},val:function(){return gx.fn.getControlValue("MANIFESTACAOCHNFE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[59,54],ip:[59,54,44,49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCKFILIALCNPJ", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALCNPJ",gxz:"Z1245FilialCNPJ",gxold:"O1245FilialCNPJ",gxvar:"A1245FilialCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1245FilialCNPJ=Value},v2z:function(Value){gx.O.Z1245FilialCNPJ=Value},v2c:function(){gx.fn.setControlValue("FILIALCNPJ",gx.O.A1245FilialCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1245FilialCNPJ=this.val()},val:function(){return gx.fn.getControlValue("FILIALCNPJ")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKFILIALUFINSCESTADUAL", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FILIALUFINSCESTADUAL",gxz:"Z1188FilialUFInscEstadual",gxold:"O1188FilialUFInscEstadual",gxvar:"A1188FilialUFInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1188FilialUFInscEstadual=Value},v2z:function(Value){gx.O.Z1188FilialUFInscEstadual=Value},v2c:function(){gx.fn.setComboBoxValue("FILIALUFINSCESTADUAL",gx.O.A1188FilialUFInscEstadual)},c2v:function(){gx.O.A1188FilialUFInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("FILIALUFINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKMANIFESTACAOCNPJEMISSOR", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAOCNPJEMISSOR",gxz:"Z10937ManifestacaoCNPJEmissor",gxold:"O10937ManifestacaoCNPJEmissor",gxvar:"A10937ManifestacaoCNPJEmissor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10937ManifestacaoCNPJEmissor=Value},v2z:function(Value){gx.O.Z10937ManifestacaoCNPJEmissor=Value},v2c:function(){gx.fn.setControlValue("MANIFESTACAOCNPJEMISSOR",gx.O.A10937ManifestacaoCNPJEmissor,0)},c2v:function(){gx.O.A10937ManifestacaoCNPJEmissor=this.val()},val:function(){return gx.fn.getControlValue("MANIFESTACAOCNPJEMISSOR")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKMANIFESTACAONOME", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAONOME",gxz:"Z10938ManifestacaoNome",gxold:"O10938ManifestacaoNome",gxvar:"A10938ManifestacaoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10938ManifestacaoNome=Value},v2z:function(Value){gx.O.Z10938ManifestacaoNome=Value},v2c:function(){gx.fn.setControlValue("MANIFESTACAONOME",gx.O.A10938ManifestacaoNome,0)},c2v:function(){gx.O.A10938ManifestacaoNome=this.val()},val:function(){return gx.fn.getControlValue("MANIFESTACAONOME")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKMANIFESTACAODTEMISSAO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAODTEMISSAO",gxz:"Z10939ManifestacaoDtEmissao",gxold:"O10939ManifestacaoDtEmissao",gxvar:"A10939ManifestacaoDtEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10939ManifestacaoDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10939ManifestacaoDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MANIFESTACAODTEMISSAO",gx.O.A10939ManifestacaoDtEmissao,0)},c2v:function(){gx.O.A10939ManifestacaoDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MANIFESTACAODTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKMANIFESTACAOVALOR", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAOVALOR",gxz:"Z10940ManifestacaoValor",gxold:"O10940ManifestacaoValor",gxvar:"A10940ManifestacaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10940ManifestacaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10940ManifestacaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MANIFESTACAOVALOR",gx.O.A10940ManifestacaoValor,2,',')},c2v:function(){gx.O.A10940ManifestacaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("MANIFESTACAOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKMANIFESTACAOTPEVENTO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAOTPEVENTO",gxz:"Z10941ManifestacaotpEvento",gxold:"O10941ManifestacaotpEvento",gxvar:"A10941ManifestacaotpEvento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10941ManifestacaotpEvento=Value},v2z:function(Value){gx.O.Z10941ManifestacaotpEvento=Value},v2c:function(){gx.fn.setControlValue("MANIFESTACAOTPEVENTO",gx.O.A10941ManifestacaotpEvento,0)},c2v:function(){gx.O.A10941ManifestacaotpEvento=this.val()},val:function(){return gx.fn.getControlValue("MANIFESTACAOTPEVENTO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKMANIFESTACAOTPEVENTODESC", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MANIFESTACAOTPEVENTODESC",gxz:"Z10942ManifestacaotpEventoDesc",gxold:"O10942ManifestacaotpEventoDesc",gxvar:"A10942ManifestacaotpEventoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10942ManifestacaotpEventoDesc=Value},v2z:function(Value){gx.O.Z10942ManifestacaotpEventoDesc=Value},v2c:function(){gx.fn.setControlValue("MANIFESTACAOTPEVENTODESC",gx.O.A10942ManifestacaotpEventoDesc,0)},c2v:function(){gx.O.A10942ManifestacaotpEventoDesc=this.val()},val:function(){return gx.fn.getControlValue("MANIFESTACAOTPEVENTODESC")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKDNFEMANIFESTACAOSTATUS", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DNFEMANIFESTACAOSTATUS",gxz:"Z10934DNFEManifestacaoStatus",gxold:"O10934DNFEManifestacaoStatus",gxvar:"A10934DNFEManifestacaoStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10934DNFEManifestacaoStatus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10934DNFEManifestacaoStatus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DNFEMANIFESTACAOSTATUS",gx.O.A10934DNFEManifestacaoStatus,0)},c2v:function(){gx.O.A10934DNFEManifestacaoStatus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DNFEMANIFESTACAOSTATUS",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKDNFEMANIFESTACAOSTATUSDESC", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DNFEMANIFESTACAOSTATUSDESC",gxz:"Z10935DNFEManifestacaoStatusDesc",gxold:"O10935DNFEManifestacaoStatusDesc",gxvar:"A10935DNFEManifestacaoStatusDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10935DNFEManifestacaoStatusDesc=Value},v2z:function(Value){gx.O.Z10935DNFEManifestacaoStatusDesc=Value},v2c:function(){gx.fn.setControlValue("DNFEMANIFESTACAOSTATUSDESC",gx.O.A10935DNFEManifestacaoStatusDesc,0)},c2v:function(){gx.O.A10935DNFEManifestacaoStatusDesc=this.val()},val:function(){return gx.fn.getControlValue("DNFEMANIFESTACAOSTATUSDESC")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKDNFEMANIFESTACAOSTATUSDATA", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DNFEMANIFESTACAOSTATUSDATA",gxz:"Z10936DNFEManifestacaoStatusData",gxold:"O10936DNFEManifestacaoStatusData",gxvar:"A10936DNFEManifestacaoStatusData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10936DNFEManifestacaoStatusData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10936DNFEManifestacaoStatusData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DNFEMANIFESTACAOSTATUSDATA",gx.O.A10936DNFEManifestacaoStatusData,0)},c2v:function(){gx.O.A10936DNFEManifestacaoStatusData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DNFEMANIFESTACAOSTATUSDATA")},nac:gx.falseFn};
   this.A10933ManifestacaoCHNFE = "" ;
   this.Z10933ManifestacaoCHNFE = "" ;
   this.O10933ManifestacaoCHNFE = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.A1245FilialCNPJ = "" ;
   this.Z1245FilialCNPJ = "" ;
   this.O1245FilialCNPJ = "" ;
   this.A1188FilialUFInscEstadual = "" ;
   this.Z1188FilialUFInscEstadual = "" ;
   this.O1188FilialUFInscEstadual = "" ;
   this.A10937ManifestacaoCNPJEmissor = "" ;
   this.Z10937ManifestacaoCNPJEmissor = "" ;
   this.O10937ManifestacaoCNPJEmissor = "" ;
   this.A10938ManifestacaoNome = "" ;
   this.Z10938ManifestacaoNome = "" ;
   this.O10938ManifestacaoNome = "" ;
   this.A10939ManifestacaoDtEmissao = gx.date.nullDate() ;
   this.Z10939ManifestacaoDtEmissao = gx.date.nullDate() ;
   this.O10939ManifestacaoDtEmissao = gx.date.nullDate() ;
   this.A10940ManifestacaoValor = 0 ;
   this.Z10940ManifestacaoValor = 0 ;
   this.O10940ManifestacaoValor = 0 ;
   this.A10941ManifestacaotpEvento = "" ;
   this.Z10941ManifestacaotpEvento = "" ;
   this.O10941ManifestacaotpEvento = "" ;
   this.A10942ManifestacaotpEventoDesc = "" ;
   this.Z10942ManifestacaotpEventoDesc = "" ;
   this.O10942ManifestacaotpEventoDesc = "" ;
   this.A10934DNFEManifestacaoStatus = 0 ;
   this.Z10934DNFEManifestacaoStatus = 0 ;
   this.O10934DNFEManifestacaoStatus = 0 ;
   this.A10935DNFEManifestacaoStatusDesc = "" ;
   this.Z10935DNFEManifestacaoStatusDesc = "" ;
   this.O10935DNFEManifestacaoStatusDesc = "" ;
   this.A10936DNFEManifestacaoStatusData = gx.date.nullDate() ;
   this.Z10936DNFEManifestacaoStatusData = gx.date.nullDate() ;
   this.O10936DNFEManifestacaoStatusData = gx.date.nullDate() ;
   this.A10933ManifestacaoCHNFE = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1245FilialCNPJ = "" ;
   this.A1188FilialUFInscEstadual = "" ;
   this.A10937ManifestacaoCNPJEmissor = "" ;
   this.A10938ManifestacaoNome = "" ;
   this.A10939ManifestacaoDtEmissao = gx.date.nullDate() ;
   this.A10940ManifestacaoValor = 0 ;
   this.A10941ManifestacaotpEvento = "" ;
   this.A10942ManifestacaotpEventoDesc = "" ;
   this.A10934DNFEManifestacaoStatus = 0 ;
   this.A10935DNFEManifestacaoStatusDesc = "" ;
   this.A10936DNFEManifestacaoStatusData = gx.date.nullDate() ;
   this.Events = {"e11fq802_client": ["ENTER", true] ,"e12fq802_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdnfemanifestacao());
