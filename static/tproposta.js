/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:9.17
*/
gx.evt.autoSkip = false;
gx.define('tproposta', false, function () {
   this.ServerClass =  "tproposta" ;
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
   this.Valid_Propostaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROPOSTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Propostaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Propostaid",["gx.O.A8341PropostaEmpresaId", "gx.O.A8342PropostaId", 'gx.date.urlDate(gx.O.A8323PropostaData,"DMY4")', "gx.O.A8324PropostaQuantidadeParcela", "gx.num.urlDecimal(gx.O.A8325PropostaValorParcela,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8326PropostaValorTotal,\'.\',\',\')", "gx.O.A8327PropostaPeriodicidade", "gx.num.urlDecimal(gx.O.A8328PropostaValorManutencao,\'.\',\',\')", "gx.O.A8329PropostaFatorSalarioMinimo", "gx.O.A8330PropostaBonusManutencao", "gx.num.urlDecimal(gx.O.A8331PropostaValorKMRodado,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8332PropostaPCDesconto,\'.\',\',\')", "gx.O.A8333PropostaQuantidadeEmpresa", "gx.num.urlDecimal(gx.O.A8334PropostaValorHoraImplantacao,\'.\',\',\')", "gx.O.A8335PropostaContato", "gx.O.A8339PropostaUsuarioAlt", 'gx.date.urlDateTime(gx.O.A8340PropostaDataHoraAlt,"DMY4")', "gx.O.A8297ModeloPropostaId", "gx.O.A8298ModeloPropostaEmpresaId", "gx.O.A8320PropostaPessoaEmpId", "gx.O.A8321PropostaPessoaId", "gx.O.A8336PropostaVendedorEmpId", "gx.O.A8337PropostaVendedorId"],["A8320PropostaPessoaEmpId", "A8321PropostaPessoaId", "A8298ModeloPropostaEmpresaId", "A8297ModeloPropostaId", "A8323PropostaData", "A8324PropostaQuantidadeParcela", "A8325PropostaValorParcela", "A8326PropostaValorTotal", "A8327PropostaPeriodicidade", "A8328PropostaValorManutencao", "A8329PropostaFatorSalarioMinimo", "A8330PropostaBonusManutencao", "A8331PropostaValorKMRodado", "A8332PropostaPCDesconto", "A8333PropostaQuantidadeEmpresa", "A8334PropostaValorHoraImplantacao", "A8335PropostaContato", "A8336PropostaVendedorEmpId", "A8337PropostaVendedorId", "A8339PropostaUsuarioAlt", "A8340PropostaDataHoraAlt", "A8322PropostaPessoaNome", "A8291ModeloPropostaDescricao", "A8338PropostaVendedorNome", "Gx_mode", "Z8341PropostaEmpresaId", "Z8342PropostaId", "Z8320PropostaPessoaEmpId", "Z8321PropostaPessoaId", "Z8298ModeloPropostaEmpresaId", "Z8297ModeloPropostaId", "Z8323PropostaData", "Z8324PropostaQuantidadeParcela", "Z8325PropostaValorParcela", "Z8326PropostaValorTotal", "Z8327PropostaPeriodicidade", "Z8328PropostaValorManutencao", "Z8329PropostaFatorSalarioMinimo", "Z8330PropostaBonusManutencao", "Z8331PropostaValorKMRodado", "Z8332PropostaPCDesconto", "Z8333PropostaQuantidadeEmpresa", "Z8334PropostaValorHoraImplantacao", "Z8335PropostaContato", "Z8336PropostaVendedorEmpId", "Z8337PropostaVendedorId", "Z8339PropostaUsuarioAlt", "Z8340PropostaDataHoraAlt", "Z8322PropostaPessoaNome", "Z8291ModeloPropostaDescricao", "Z8338PropostaVendedorNome", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Propostapessoaempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROPOSTAPESSOAEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Propostapessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Propostapessoaid",["gx.O.A8320PropostaPessoaEmpId", "gx.O.A8321PropostaPessoaId", "gx.O.A8322PropostaPessoaNome"],["A8322PropostaPessoaNome"]);
      return true;
   }
   this.Valid_Modelopropostaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MODELOPROPOSTAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Modelopropostaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelopropostaid",["gx.O.A8297ModeloPropostaId", "gx.O.A8298ModeloPropostaEmpresaId", "gx.O.A8291ModeloPropostaDescricao"],["A8291ModeloPropostaDescricao"]);
      return true;
   }
   this.Valid_Propostavendedorempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROPOSTAVENDEDOREMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Propostavendedorid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Propostavendedorid",["gx.O.A8336PropostaVendedorEmpId", "gx.O.A8337PropostaVendedorId", "gx.O.A8338PropostaVendedorNome"],["A8338PropostaVendedorNome"]);
      return true;
   }
   this.e11bs618_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bs618_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bs618_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,141,150,152,154,155];
   this.GXLastCtrlId =155;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostaempresaid,isvalid:null,rgrid:[],fld:"PROPOSTAEMPRESAID",gxz:"Z8341PropostaEmpresaId",gxold:"O8341PropostaEmpresaId",gxvar:"A8341PropostaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8341PropostaEmpresaId=Value},v2z:function(Value){gx.O.Z8341PropostaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAEMPRESAID",gx.O.A8341PropostaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8341PropostaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostaid,isvalid:null,rgrid:[],fld:"PROPOSTAID",gxz:"Z8342PropostaId",gxold:"O8342PropostaId",gxvar:"A8342PropostaId",ucs:[],op:[125,120,30,25,40,45,140,135,115,110,105,100,95,90,85,80,75,70,65,60,55],ip:[125,120,30,25,40,45,140,135,115,110,105,100,95,90,85,80,75,70,65,60,55,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8342PropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8342PropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAID",gx.O.A8342PropostaId,0)},c2v:function(){gx.O.A8342PropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostapessoaempid,isvalid:null,rgrid:[],fld:"PROPOSTAPESSOAEMPID",gxz:"Z8320PropostaPessoaEmpId",gxold:"O8320PropostaPessoaEmpId",gxvar:"A8320PropostaPessoaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8320PropostaPessoaEmpId=Value},v2z:function(Value){gx.O.Z8320PropostaPessoaEmpId=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAPESSOAEMPID",gx.O.A8320PropostaPessoaEmpId,0)},c2v:function(){gx.O.A8320PropostaPessoaEmpId=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAPESSOAEMPID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostapessoaid,isvalid:null,rgrid:[],fld:"PROPOSTAPESSOAID",gxz:"Z8321PropostaPessoaId",gxold:"O8321PropostaPessoaId",gxvar:"A8321PropostaPessoaId",ucs:[],op:[35],ip:[35,30,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8321PropostaPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8321PropostaPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAPESSOAID",gx.O.A8321PropostaPessoaId,0)},c2v:function(){gx.O.A8321PropostaPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAPESSOANOME",gxz:"Z8322PropostaPessoaNome",gxold:"O8322PropostaPessoaNome",gxvar:"A8322PropostaPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8322PropostaPessoaNome=Value},v2z:function(Value){gx.O.Z8322PropostaPessoaNome=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAPESSOANOME",gx.O.A8322PropostaPessoaNome,0)},c2v:function(){gx.O.A8322PropostaPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaempresaid,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAEMPRESAID",gxz:"Z8298ModeloPropostaEmpresaId",gxold:"O8298ModeloPropostaEmpresaId",gxvar:"A8298ModeloPropostaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8298ModeloPropostaEmpresaId=Value},v2z:function(Value){gx.O.Z8298ModeloPropostaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAEMPRESAID",gx.O.A8298ModeloPropostaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8298ModeloPropostaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelopropostaid,isvalid:null,rgrid:[],fld:"MODELOPROPOSTAID",gxz:"Z8297ModeloPropostaId",gxold:"O8297ModeloPropostaId",gxvar:"A8297ModeloPropostaId",ucs:[],op:[50],ip:[50,40,45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8297ModeloPropostaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8297ModeloPropostaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTAID",gx.O.A8297ModeloPropostaId,0)},c2v:function(){gx.O.A8297ModeloPropostaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MODELOPROPOSTAID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPROPOSTADESCRICAO",gxz:"Z8291ModeloPropostaDescricao",gxold:"O8291ModeloPropostaDescricao",gxvar:"A8291ModeloPropostaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8291ModeloPropostaDescricao=Value},v2z:function(Value){gx.O.Z8291ModeloPropostaDescricao=Value},v2c:function(){gx.fn.setControlValue("MODELOPROPOSTADESCRICAO",gx.O.A8291ModeloPropostaDescricao,0)},c2v:function(){gx.O.A8291ModeloPropostaDescricao=this.val()},val:function(){return gx.fn.getControlValue("MODELOPROPOSTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTADATA",gxz:"Z8323PropostaData",gxold:"O8323PropostaData",gxvar:"A8323PropostaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8323PropostaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8323PropostaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTADATA",gx.O.A8323PropostaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8323PropostaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PROPOSTADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAQUANTIDADEPARCELA",gxz:"Z8324PropostaQuantidadeParcela",gxold:"O8324PropostaQuantidadeParcela",gxvar:"A8324PropostaQuantidadeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8324PropostaQuantidadeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8324PropostaQuantidadeParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAQUANTIDADEPARCELA",gx.O.A8324PropostaQuantidadeParcela,0)},c2v:function(){gx.O.A8324PropostaQuantidadeParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAQUANTIDADEPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVALORPARCELA",gxz:"Z8325PropostaValorParcela",gxold:"O8325PropostaValorParcela",gxvar:"A8325PropostaValorParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8325PropostaValorParcela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8325PropostaValorParcela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAVALORPARCELA",gx.O.A8325PropostaValorParcela,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8325PropostaValorParcela=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAVALORPARCELA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVALORTOTAL",gxz:"Z8326PropostaValorTotal",gxold:"O8326PropostaValorTotal",gxvar:"A8326PropostaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8326PropostaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8326PropostaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAVALORTOTAL",gx.O.A8326PropostaValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8326PropostaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAPERIODICIDADE",gxz:"Z8327PropostaPeriodicidade",gxold:"O8327PropostaPeriodicidade",gxvar:"A8327PropostaPeriodicidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8327PropostaPeriodicidade=Value},v2z:function(Value){gx.O.Z8327PropostaPeriodicidade=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAPERIODICIDADE",gx.O.A8327PropostaPeriodicidade,0)},c2v:function(){gx.O.A8327PropostaPeriodicidade=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAPERIODICIDADE")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVALORMANUTENCAO",gxz:"Z8328PropostaValorManutencao",gxold:"O8328PropostaValorManutencao",gxvar:"A8328PropostaValorManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8328PropostaValorManutencao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8328PropostaValorManutencao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAVALORMANUTENCAO",gx.O.A8328PropostaValorManutencao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8328PropostaValorManutencao=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAVALORMANUTENCAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAFATORSALARIOMINIMO",gxz:"Z8329PropostaFatorSalarioMinimo",gxold:"O8329PropostaFatorSalarioMinimo",gxvar:"A8329PropostaFatorSalarioMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8329PropostaFatorSalarioMinimo=Value},v2z:function(Value){gx.O.Z8329PropostaFatorSalarioMinimo=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAFATORSALARIOMINIMO",gx.O.A8329PropostaFatorSalarioMinimo,0)},c2v:function(){gx.O.A8329PropostaFatorSalarioMinimo=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAFATORSALARIOMINIMO")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTABONUSMANUTENCAO",gxz:"Z8330PropostaBonusManutencao",gxold:"O8330PropostaBonusManutencao",gxvar:"A8330PropostaBonusManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8330PropostaBonusManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8330PropostaBonusManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTABONUSMANUTENCAO",gx.O.A8330PropostaBonusManutencao,0)},c2v:function(){gx.O.A8330PropostaBonusManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTABONUSMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVALORKMRODADO",gxz:"Z8331PropostaValorKMRodado",gxold:"O8331PropostaValorKMRodado",gxvar:"A8331PropostaValorKMRodado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8331PropostaValorKMRodado=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8331PropostaValorKMRodado=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAVALORKMRODADO",gx.O.A8331PropostaValorKMRodado,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8331PropostaValorKMRodado=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAVALORKMRODADO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAPCDESCONTO",gxz:"Z8332PropostaPCDesconto",gxold:"O8332PropostaPCDesconto",gxvar:"A8332PropostaPCDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8332PropostaPCDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8332PropostaPCDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAPCDESCONTO",gx.O.A8332PropostaPCDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8332PropostaPCDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAPCDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAQUANTIDADEEMPRESA",gxz:"Z8333PropostaQuantidadeEmpresa",gxold:"O8333PropostaQuantidadeEmpresa",gxvar:"A8333PropostaQuantidadeEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8333PropostaQuantidadeEmpresa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8333PropostaQuantidadeEmpresa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAQUANTIDADEEMPRESA",gx.O.A8333PropostaQuantidadeEmpresa,0)},c2v:function(){gx.O.A8333PropostaQuantidadeEmpresa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAQUANTIDADEEMPRESA",'.')},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVALORHORAIMPLANTACAO",gxz:"Z8334PropostaValorHoraImplantacao",gxold:"O8334PropostaValorHoraImplantacao",gxvar:"A8334PropostaValorHoraImplantacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8334PropostaValorHoraImplantacao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8334PropostaValorHoraImplantacao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROPOSTAVALORHORAIMPLANTACAO",gx.O.A8334PropostaValorHoraImplantacao,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8334PropostaValorHoraImplantacao=this.val()},val:function(){return gx.fn.getDecimalValue("PROPOSTAVALORHORAIMPLANTACAO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTACONTATO",gxz:"Z8335PropostaContato",gxold:"O8335PropostaContato",gxvar:"A8335PropostaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8335PropostaContato=Value},v2z:function(Value){gx.O.Z8335PropostaContato=Value},v2c:function(){gx.fn.setControlValue("PROPOSTACONTATO",gx.O.A8335PropostaContato,0)},c2v:function(){gx.O.A8335PropostaContato=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTACONTATO")},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostavendedorempid,isvalid:null,rgrid:[],fld:"PROPOSTAVENDEDOREMPID",gxz:"Z8336PropostaVendedorEmpId",gxold:"O8336PropostaVendedorEmpId",gxvar:"A8336PropostaVendedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8336PropostaVendedorEmpId=Value},v2z:function(Value){gx.O.Z8336PropostaVendedorEmpId=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAVENDEDOREMPID",gx.O.A8336PropostaVendedorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8336PropostaVendedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAVENDEDOREMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Propostavendedorid,isvalid:null,rgrid:[],fld:"PROPOSTAVENDEDORID",gxz:"Z8337PropostaVendedorId",gxold:"O8337PropostaVendedorId",gxvar:"A8337PropostaVendedorId",ucs:[],op:[130],ip:[130,125,120],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8337PropostaVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8337PropostaVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTAVENDEDORID",gx.O.A8337PropostaVendedorId,0)},c2v:function(){gx.O.A8337PropostaVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROPOSTAVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAVENDEDORNOME",gxz:"Z8338PropostaVendedorNome",gxold:"O8338PropostaVendedorNome",gxvar:"A8338PropostaVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8338PropostaVendedorNome=Value},v2z:function(Value){gx.O.Z8338PropostaVendedorNome=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAVENDEDORNOME",gx.O.A8338PropostaVendedorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8338PropostaVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAVENDEDORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTAUSUARIOALT",gxz:"Z8339PropostaUsuarioAlt",gxold:"O8339PropostaUsuarioAlt",gxvar:"A8339PropostaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8339PropostaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8339PropostaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PROPOSTAUSUARIOALT",gx.O.A8339PropostaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8339PropostaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PROPOSTAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROPOSTADATAHORAALT",gxz:"Z8340PropostaDataHoraAlt",gxold:"O8340PropostaDataHoraAlt",gxvar:"A8340PropostaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8340PropostaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8340PropostaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROPOSTADATAHORAALT",gx.O.A8340PropostaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8340PropostaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROPOSTADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[141]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[152]={fld:"BTNHELP",grid:0};
   GXValidFnc[154]={fld:"PROMPT_8320_8321",grid:618};
   GXValidFnc[155]={fld:"PROMPT_8336_8337",grid:618};
   this.A8341PropostaEmpresaId = "" ;
   this.Z8341PropostaEmpresaId = "" ;
   this.O8341PropostaEmpresaId = "" ;
   this.A8342PropostaId = 0 ;
   this.Z8342PropostaId = 0 ;
   this.O8342PropostaId = 0 ;
   this.A8320PropostaPessoaEmpId = "" ;
   this.Z8320PropostaPessoaEmpId = "" ;
   this.O8320PropostaPessoaEmpId = "" ;
   this.A8321PropostaPessoaId = 0 ;
   this.Z8321PropostaPessoaId = 0 ;
   this.O8321PropostaPessoaId = 0 ;
   this.A8322PropostaPessoaNome = "" ;
   this.Z8322PropostaPessoaNome = "" ;
   this.O8322PropostaPessoaNome = "" ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.Z8298ModeloPropostaEmpresaId = "" ;
   this.O8298ModeloPropostaEmpresaId = "" ;
   this.A8297ModeloPropostaId = 0 ;
   this.Z8297ModeloPropostaId = 0 ;
   this.O8297ModeloPropostaId = 0 ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.Z8291ModeloPropostaDescricao = "" ;
   this.O8291ModeloPropostaDescricao = "" ;
   this.A8323PropostaData = gx.date.nullDate() ;
   this.Z8323PropostaData = gx.date.nullDate() ;
   this.O8323PropostaData = gx.date.nullDate() ;
   this.A8324PropostaQuantidadeParcela = 0 ;
   this.Z8324PropostaQuantidadeParcela = 0 ;
   this.O8324PropostaQuantidadeParcela = 0 ;
   this.A8325PropostaValorParcela = 0 ;
   this.Z8325PropostaValorParcela = 0 ;
   this.O8325PropostaValorParcela = 0 ;
   this.A8326PropostaValorTotal = 0 ;
   this.Z8326PropostaValorTotal = 0 ;
   this.O8326PropostaValorTotal = 0 ;
   this.A8327PropostaPeriodicidade = "" ;
   this.Z8327PropostaPeriodicidade = "" ;
   this.O8327PropostaPeriodicidade = "" ;
   this.A8328PropostaValorManutencao = 0 ;
   this.Z8328PropostaValorManutencao = 0 ;
   this.O8328PropostaValorManutencao = 0 ;
   this.A8329PropostaFatorSalarioMinimo = "" ;
   this.Z8329PropostaFatorSalarioMinimo = "" ;
   this.O8329PropostaFatorSalarioMinimo = "" ;
   this.A8330PropostaBonusManutencao = 0 ;
   this.Z8330PropostaBonusManutencao = 0 ;
   this.O8330PropostaBonusManutencao = 0 ;
   this.A8331PropostaValorKMRodado = 0 ;
   this.Z8331PropostaValorKMRodado = 0 ;
   this.O8331PropostaValorKMRodado = 0 ;
   this.A8332PropostaPCDesconto = 0 ;
   this.Z8332PropostaPCDesconto = 0 ;
   this.O8332PropostaPCDesconto = 0 ;
   this.A8333PropostaQuantidadeEmpresa = 0 ;
   this.Z8333PropostaQuantidadeEmpresa = 0 ;
   this.O8333PropostaQuantidadeEmpresa = 0 ;
   this.A8334PropostaValorHoraImplantacao = 0 ;
   this.Z8334PropostaValorHoraImplantacao = 0 ;
   this.O8334PropostaValorHoraImplantacao = 0 ;
   this.A8335PropostaContato = "" ;
   this.Z8335PropostaContato = "" ;
   this.O8335PropostaContato = "" ;
   this.A8336PropostaVendedorEmpId = "" ;
   this.Z8336PropostaVendedorEmpId = "" ;
   this.O8336PropostaVendedorEmpId = "" ;
   this.A8337PropostaVendedorId = 0 ;
   this.Z8337PropostaVendedorId = 0 ;
   this.O8337PropostaVendedorId = 0 ;
   this.A8338PropostaVendedorNome = "" ;
   this.Z8338PropostaVendedorNome = "" ;
   this.O8338PropostaVendedorNome = "" ;
   this.A8339PropostaUsuarioAlt = "" ;
   this.Z8339PropostaUsuarioAlt = "" ;
   this.O8339PropostaUsuarioAlt = "" ;
   this.A8340PropostaDataHoraAlt = gx.date.nullDate() ;
   this.Z8340PropostaDataHoraAlt = gx.date.nullDate() ;
   this.O8340PropostaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8341PropostaEmpresaId = "" ;
   this.A8342PropostaId = 0 ;
   this.A8320PropostaPessoaEmpId = "" ;
   this.A8321PropostaPessoaId = 0 ;
   this.A8322PropostaPessoaNome = "" ;
   this.A8298ModeloPropostaEmpresaId = "" ;
   this.A8297ModeloPropostaId = 0 ;
   this.A8291ModeloPropostaDescricao = "" ;
   this.A8323PropostaData = gx.date.nullDate() ;
   this.A8324PropostaQuantidadeParcela = 0 ;
   this.A8325PropostaValorParcela = 0 ;
   this.A8326PropostaValorTotal = 0 ;
   this.A8327PropostaPeriodicidade = "" ;
   this.A8328PropostaValorManutencao = 0 ;
   this.A8329PropostaFatorSalarioMinimo = "" ;
   this.A8330PropostaBonusManutencao = 0 ;
   this.A8331PropostaValorKMRodado = 0 ;
   this.A8332PropostaPCDesconto = 0 ;
   this.A8333PropostaQuantidadeEmpresa = 0 ;
   this.A8334PropostaValorHoraImplantacao = 0 ;
   this.A8335PropostaContato = "" ;
   this.A8336PropostaVendedorEmpId = "" ;
   this.A8337PropostaVendedorId = 0 ;
   this.A8338PropostaVendedorNome = "" ;
   this.A8339PropostaUsuarioAlt = "" ;
   this.A8340PropostaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12bs618_client": ["ENTER", true] ,"e13bs618_client": ["CANCEL", true] ,"e11bs618_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_8320_8321", [25,30]);
   this.setPrompt("PROMPT_8336_8337", [120,125]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tproposta());
