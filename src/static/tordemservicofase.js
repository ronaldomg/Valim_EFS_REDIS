/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:51.39
*/
gx.evt.autoSkip = false;
gx.define('tordemservicofase', false, function () {
   this.ServerClass =  "tordemservicofase" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV18OrdemServicoFaseId=gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.') ;
      this.AV19OrdemServicoFaseEmpresaId=gx.fn.getControlValue("vORDEMSERVICOFASEEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV22SnMsgErro=gx.fn.getControlValue("vSNMSGERRO") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV26OrdemServicoFaseCorLetraIn=gx.fn.getIntegerValue("vORDEMSERVICOFASECORLETRAIN",'.') ;
   };
   this.Valid_Ordemservicofaseid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofaseempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASEDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8600OrdemServicoFaseDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofaseobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASEOBSERVACAO");
         this.AnyError  = 0;
         if ( (""==this.A8601OrdemServicoFaseObservacao) )
         {
            try {
               gxballoon.setError("Informe uma Observação");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasecorletra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASECORLETRA");
         this.AnyError  = 0;
         if ( (0==this.A8602OrdemServicoFaseCorLetra) && (0==this.AV21OrdemServicoFaseCorLetra) )
         {
            try {
               gxballoon.setError("Informe uma Cor");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicofasecorletra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOFASECORLETRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasesnfechar=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASESNFECHAR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasesnbaixaestoque=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASESNBAIXAESTOQUE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasesnexigeproduto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASESNEXIGEPRODUTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasesnexigeservico=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASESNEXIGESERVICO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicofasesituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOFASESITUACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("IMAGE1","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE2","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE3","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE4","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE5","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE6","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE7","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE8","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE9","Enabled", 0 );
      gx.fn.setCtrlProperty("IMAGE10","Enabled", 0 );
   };
   this.e12cc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cc2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cc2_client=function()
   {
      this.executeServerEvent("IMAGE1.CLICK", true, null, false, true);
   };
   this.e15cc2_client=function()
   {
      this.executeServerEvent("IMAGE2.CLICK", true, null, false, true);
   };
   this.e16cc2_client=function()
   {
      this.executeServerEvent("IMAGE3.CLICK", true, null, false, true);
   };
   this.e17cc2_client=function()
   {
      this.executeServerEvent("IMAGE4.CLICK", true, null, false, true);
   };
   this.e18cc2_client=function()
   {
      this.executeServerEvent("IMAGE5.CLICK", true, null, false, true);
   };
   this.e19cc2_client=function()
   {
      this.executeServerEvent("IMAGE6.CLICK", true, null, false, true);
   };
   this.e20cc2_client=function()
   {
      this.executeServerEvent("IMAGE7.CLICK", true, null, false, true);
   };
   this.e21cc2_client=function()
   {
      this.executeServerEvent("IMAGE8.CLICK", true, null, false, true);
   };
   this.e22cc2_client=function()
   {
      this.executeServerEvent("IMAGE9.CLICK", true, null, false, true);
   };
   this.e23cc2_client=function()
   {
      this.executeServerEvent("IMAGE10.CLICK", true, null, false, true);
   };
   this.e24cc639_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e25cc639_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,18,20,23,25,28,30,33,36,38,41,43,46,48,51,53,56,58,61,63,66,68,71,73,76,78,81,82,83,87,91,95,99,103,106,109,111,113,122,124];
   this.GXLastCtrlId =124;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofaseid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEID",gxz:"Z8607OrdemServicoFaseId",gxold:"O8607OrdemServicoFaseId",gxvar:"A8607OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8607OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8607OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEID",gx.O.A8607OrdemServicoFaseId,0)},c2v:function(){gx.O.A8607OrdemServicoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofaseempresaid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEEMPRESAID",gxz:"Z8606OrdemServicoFaseEmpresaId",gxold:"O8606OrdemServicoFaseEmpresaId",gxvar:"A8606OrdemServicoFaseEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8606OrdemServicoFaseEmpresaId=Value},v2z:function(Value){gx.O.Z8606OrdemServicoFaseEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEEMPRESAID",gx.O.A8606OrdemServicoFaseEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8606OrdemServicoFaseEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASEEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasedescricao,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDESCRICAO",gxz:"Z8600OrdemServicoFaseDescricao",gxold:"O8600OrdemServicoFaseDescricao",gxvar:"A8600OrdemServicoFaseDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8600OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.Z8600OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEDESCRICAO",gx.O.A8600OrdemServicoFaseDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8600OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofaseobservacao,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEOBSERVACAO",gxz:"Z8601OrdemServicoFaseObservacao",gxold:"O8601OrdemServicoFaseObservacao",gxvar:"A8601OrdemServicoFaseObservacao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8601OrdemServicoFaseObservacao=Value},v2z:function(Value){gx.O.Z8601OrdemServicoFaseObservacao=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEOBSERVACAO",gx.O.A8601OrdemServicoFaseObservacao,0)},c2v:function(){gx.O.A8601OrdemServicoFaseObservacao=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASEOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABCOR1",grid:0};
   GXValidFnc[36]={fld:"IMAGE1",grid:0};
   GXValidFnc[38]={fld:"TABCOR2",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"TABCOR3",grid:0};
   GXValidFnc[46]={fld:"IMAGE3",grid:0};
   GXValidFnc[48]={fld:"TABCOR4",grid:0};
   GXValidFnc[51]={fld:"IMAGE4",grid:0};
   GXValidFnc[53]={fld:"TABCOR5",grid:0};
   GXValidFnc[56]={fld:"IMAGE5",grid:0};
   GXValidFnc[58]={fld:"TABCOR6",grid:0};
   GXValidFnc[61]={fld:"IMAGE6",grid:0};
   GXValidFnc[63]={fld:"TABCOR7",grid:0};
   GXValidFnc[66]={fld:"IMAGE7",grid:0};
   GXValidFnc[68]={fld:"TABCOR8",grid:0};
   GXValidFnc[71]={fld:"IMAGE8",grid:0};
   GXValidFnc[73]={fld:"TABCOR9",grid:0};
   GXValidFnc[76]={fld:"IMAGE9",grid:0};
   GXValidFnc[78]={fld:"TABCOR10",grid:0};
   GXValidFnc[81]={fld:"IMAGE10",grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasecorletra,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASECORLETRA",gxz:"Z8602OrdemServicoFaseCorLetra",gxold:"O8602OrdemServicoFaseCorLetra",gxvar:"A8602OrdemServicoFaseCorLetra",ucs:[],op:[83,82],ip:[83,82],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8602OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8602OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASECORLETRA",gx.O.A8602OrdemServicoFaseCorLetra,0)},c2v:function(){gx.O.A8602OrdemServicoFaseCorLetra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ORDEMSERVICOFASECORLETRA",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicofasecorletra,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASECORLETRA",gxz:"ZV21OrdemServicoFaseCorLetra",gxold:"OV21OrdemServicoFaseCorLetra",gxvar:"AV21OrdemServicoFaseCorLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21OrdemServicoFaseCorLetra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASECORLETRA",gx.O.AV21OrdemServicoFaseCorLetra,0)},c2v:function(){gx.O.AV21OrdemServicoFaseCorLetra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASECORLETRA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasesnfechar,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASESNFECHAR",gxz:"Z8603OrdemServicoFaseSNFechar",gxold:"O8603OrdemServicoFaseSNFechar",gxvar:"A8603OrdemServicoFaseSNFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8603OrdemServicoFaseSNFechar=Value},v2z:function(Value){gx.O.Z8603OrdemServicoFaseSNFechar=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOFASESNFECHAR",gx.O.A8603OrdemServicoFaseSNFechar,"S")},c2v:function(){gx.O.A8603OrdemServicoFaseSNFechar=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASESNFECHAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[91]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasesnbaixaestoque,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASESNBAIXAESTOQUE",gxz:"Z8805OrdemServicoFaseSNBaixaEstoque",gxold:"O8805OrdemServicoFaseSNBaixaEstoque",gxvar:"A8805OrdemServicoFaseSNBaixaEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8805OrdemServicoFaseSNBaixaEstoque=Value},v2z:function(Value){gx.O.Z8805OrdemServicoFaseSNBaixaEstoque=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOFASESNBAIXAESTOQUE",gx.O.A8805OrdemServicoFaseSNBaixaEstoque,"S")},c2v:function(){gx.O.A8805OrdemServicoFaseSNBaixaEstoque=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASESNBAIXAESTOQUE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasesnexigeproduto,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASESNEXIGEPRODUTO",gxz:"Z8806OrdemServicoFaseSNExigeProduto",gxold:"O8806OrdemServicoFaseSNExigeProduto",gxvar:"A8806OrdemServicoFaseSNExigeProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8806OrdemServicoFaseSNExigeProduto=Value},v2z:function(Value){gx.O.Z8806OrdemServicoFaseSNExigeProduto=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOFASESNEXIGEPRODUTO",gx.O.A8806OrdemServicoFaseSNExigeProduto,"S")},c2v:function(){gx.O.A8806OrdemServicoFaseSNExigeProduto=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASESNEXIGEPRODUTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[99]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasesnexigeservico,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASESNEXIGESERVICO",gxz:"Z8807OrdemServicoFaseSNExigeServico",gxold:"O8807OrdemServicoFaseSNExigeServico",gxvar:"A8807OrdemServicoFaseSNExigeServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A8807OrdemServicoFaseSNExigeServico=Value},v2z:function(Value){gx.O.Z8807OrdemServicoFaseSNExigeServico=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOFASESNEXIGESERVICO",gx.O.A8807OrdemServicoFaseSNExigeServico,"S")},c2v:function(){gx.O.A8807OrdemServicoFaseSNExigeServico=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASESNEXIGESERVICO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ordemservicofasesituacao,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASESITUACAO",gxz:"Z9242OrdemServicoFaseSituacao",gxold:"O9242OrdemServicoFaseSituacao",gxvar:"A9242OrdemServicoFaseSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A9242OrdemServicoFaseSituacao=Value},v2z:function(Value){gx.O.Z9242OrdemServicoFaseSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("ORDEMSERVICOFASESITUACAO",gx.O.A9242OrdemServicoFaseSituacao,"A")},c2v:function(){gx.O.A9242OrdemServicoFaseSituacao=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASESITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[106]={fld:"TABLE7",grid:0};
   GXValidFnc[109]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEUSUALT",gxz:"Z8604OrdemServicoFaseUsuAlt",gxold:"O8604OrdemServicoFaseUsuAlt",gxvar:"A8604OrdemServicoFaseUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8604OrdemServicoFaseUsuAlt=Value},v2z:function(Value){gx.O.Z8604OrdemServicoFaseUsuAlt=Value},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEUSUALT",gx.O.A8604OrdemServicoFaseUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8604OrdemServicoFaseUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("ORDEMSERVICOFASEUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[113]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDTUSUALT",gxz:"Z8605OrdemServicoFaseDtUsuAlt",gxold:"O8605OrdemServicoFaseDtUsuAlt",gxvar:"A8605OrdemServicoFaseDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8605OrdemServicoFaseDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8605OrdemServicoFaseDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ORDEMSERVICOFASEDTUSUALT",gx.O.A8605OrdemServicoFaseDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8605OrdemServicoFaseDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ORDEMSERVICOFASEDTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 113 , function() {
   });
   GXValidFnc[122]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"BTNHELP",grid:0};
   this.A8607OrdemServicoFaseId = 0 ;
   this.Z8607OrdemServicoFaseId = 0 ;
   this.O8607OrdemServicoFaseId = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.Z8606OrdemServicoFaseEmpresaId = "" ;
   this.O8606OrdemServicoFaseEmpresaId = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.Z8600OrdemServicoFaseDescricao = "" ;
   this.O8600OrdemServicoFaseDescricao = "" ;
   this.A8601OrdemServicoFaseObservacao = "" ;
   this.Z8601OrdemServicoFaseObservacao = "" ;
   this.O8601OrdemServicoFaseObservacao = "" ;
   this.A8602OrdemServicoFaseCorLetra = 0 ;
   this.Z8602OrdemServicoFaseCorLetra = 0 ;
   this.O8602OrdemServicoFaseCorLetra = 0 ;
   this.AV21OrdemServicoFaseCorLetra = 0 ;
   this.ZV21OrdemServicoFaseCorLetra = 0 ;
   this.OV21OrdemServicoFaseCorLetra = 0 ;
   this.A8603OrdemServicoFaseSNFechar = "" ;
   this.Z8603OrdemServicoFaseSNFechar = "" ;
   this.O8603OrdemServicoFaseSNFechar = "" ;
   this.A8805OrdemServicoFaseSNBaixaEstoque = "" ;
   this.Z8805OrdemServicoFaseSNBaixaEstoque = "" ;
   this.O8805OrdemServicoFaseSNBaixaEstoque = "" ;
   this.A8806OrdemServicoFaseSNExigeProduto = "" ;
   this.Z8806OrdemServicoFaseSNExigeProduto = "" ;
   this.O8806OrdemServicoFaseSNExigeProduto = "" ;
   this.A8807OrdemServicoFaseSNExigeServico = "" ;
   this.Z8807OrdemServicoFaseSNExigeServico = "" ;
   this.O8807OrdemServicoFaseSNExigeServico = "" ;
   this.A9242OrdemServicoFaseSituacao = "" ;
   this.Z9242OrdemServicoFaseSituacao = "" ;
   this.O9242OrdemServicoFaseSituacao = "" ;
   this.A8604OrdemServicoFaseUsuAlt = "" ;
   this.Z8604OrdemServicoFaseUsuAlt = "" ;
   this.O8604OrdemServicoFaseUsuAlt = "" ;
   this.A8605OrdemServicoFaseDtUsuAlt = gx.date.nullDate() ;
   this.Z8605OrdemServicoFaseDtUsuAlt = gx.date.nullDate() ;
   this.O8605OrdemServicoFaseDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV21OrdemServicoFaseCorLetra = 0 ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV19OrdemServicoFaseEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18OrdemServicoFaseId = 0 ;
   this.AV26OrdemServicoFaseCorLetraIn = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8602OrdemServicoFaseCorLetra = 0 ;
   this.A8604OrdemServicoFaseUsuAlt = "" ;
   this.A8605OrdemServicoFaseDtUsuAlt = gx.date.nullDate() ;
   this.AV22SnMsgErro = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.A8601OrdemServicoFaseObservacao = "" ;
   this.A8603OrdemServicoFaseSNFechar = "" ;
   this.A8805OrdemServicoFaseSNBaixaEstoque = "" ;
   this.A8806OrdemServicoFaseSNExigeProduto = "" ;
   this.A8807OrdemServicoFaseSNExigeServico = "" ;
   this.A9242OrdemServicoFaseSituacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cc2_client": ["'FECHAR'", true] ,"e13cc2_client": ["AFTER TRN", true] ,"e14cc2_client": ["IMAGE1.CLICK", true] ,"e15cc2_client": ["IMAGE2.CLICK", true] ,"e16cc2_client": ["IMAGE3.CLICK", true] ,"e17cc2_client": ["IMAGE4.CLICK", true] ,"e18cc2_client": ["IMAGE5.CLICK", true] ,"e19cc2_client": ["IMAGE6.CLICK", true] ,"e20cc2_client": ["IMAGE7.CLICK", true] ,"e21cc2_client": ["IMAGE8.CLICK", true] ,"e22cc2_client": ["IMAGE9.CLICK", true] ,"e23cc2_client": ["IMAGE10.CLICK", true] ,"e24cc639_client": ["ENTER", true] ,"e25cc639_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'AV26OrdemServicoFaseCorLetraIn',fld:'vORDEMSERVICOFASECORLETRAIN'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["IMAGE1.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE2.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE3.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE4.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE5.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE6.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE7.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE8.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE9.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EvtParms["IMAGE10.CLICK"] = [[],[{av:'AV21OrdemServicoFaseCorLetra',fld:'vORDEMSERVICOFASECORLETRA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18OrdemServicoFaseId", "vORDEMSERVICOFASEID", 0, "int");
   this.setVCMap("AV19OrdemServicoFaseEmpresaId", "vORDEMSERVICOFASEEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV22SnMsgErro", "vSNMSGERRO", 0, "svchar");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV26OrdemServicoFaseCorLetraIn", "vORDEMSERVICOFASECORLETRAIN", 0, "int");
   this.InitStandaloneVars( );
   this.LvlOlds[ 639 ]= ["O8807OrdemServicoFaseSNExigeServico","O9242OrdemServicoFaseSituacao","O8806OrdemServicoFaseSNExigeProduto","O8805OrdemServicoFaseSNBaixaEstoque","O8603OrdemServicoFaseSNFechar","O8602OrdemServicoFaseCorLetra","O8601OrdemServicoFaseObservacao","O8600OrdemServicoFaseDescricao"] ;
});
gx.setParentObj(new tordemservicofase());
