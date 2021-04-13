/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:11.48
*/
gx.evt.autoSkip = false;
gx.define('tcontaprovisoriafrm', false, function () {
   this.ServerClass =  "tcontaprovisoriafrm" ;
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
      this.A10185ContaProvisoriaFRMContaDescErr=gx.fn.getControlValue("CONTAPROVISORIAFRMCONTADESCERR") ;
      this.A10186ContaProvisoriaFRMContaUsuBaix=gx.fn.getControlValue("CONTAPROVISORIAFRMCONTAUSUBAIX") ;
   };
   this.Valid_Contaprovisoriafrmempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmnoreserva=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contaprovisoriafrmnoreserva",["gx.O.A10138ContaProvisoriaFRMEmpId", "gx.O.A10139ContaProvisoriaFRMNoReserva", "gx.O.A10148ContaProvisoriaFRMCliForId", "gx.O.A10150ContaProvisoriaFRMConvenioId", "gx.num.urlDecimal(gx.O.A10162ContaProvisoriaFRMValor,\'.\',\',\')", "gx.O.A10159ContaProvisoriaFRMTpConta", 'gx.date.urlDate(gx.O.A10153ContaProvisoriaFRMDtInclusao,"DMY4")', 'gx.date.urlDate(gx.O.A10152ContaProvisoriaFRMDtEmissao,"DMY4")', 'gx.date.urlDate(gx.O.A10154ContaProvisoriaFRMDtVencmto,"DMY4")', "gx.O.A10157ContaProvisoriaFRMObservacao", "gx.O.A10155ContaProvisoriaFRMNoDocumento", "gx.O.A10145ContaProvisoriaFRMAnoProcesso", "gx.O.A10156ContaProvisoriaFRMNoProcesso", "gx.O.A10160ContaProvisoriaFRMTransacaoId", "gx.O.A10147ContaProvisoriaFRMCCustoId", "gx.O.A10146ContaProvisoriaFRMCContabilId", "gx.O.A10158ContaProvisoriaFRMSnEfetivada", "gx.O.A10161ContaProvisoriaFRMUsuarioAlt", 'gx.date.urlDateTime(gx.O.A10151ContaProvisoriaFRMDataHoraAlt,"DMY4")'],["A10148ContaProvisoriaFRMCliForId", "A10150ContaProvisoriaFRMConvenioId", "A10162ContaProvisoriaFRMValor", "A10159ContaProvisoriaFRMTpConta", "A10153ContaProvisoriaFRMDtInclusao", "A10152ContaProvisoriaFRMDtEmissao", "A10154ContaProvisoriaFRMDtVencmto", "A10157ContaProvisoriaFRMObservacao", "A10155ContaProvisoriaFRMNoDocumento", "A10145ContaProvisoriaFRMAnoProcesso", "A10156ContaProvisoriaFRMNoProcesso", "A10160ContaProvisoriaFRMTransacaoId", "A10147ContaProvisoriaFRMCCustoId", "A10146ContaProvisoriaFRMCContabilId", "A10158ContaProvisoriaFRMSnEfetivada", "A10161ContaProvisoriaFRMUsuarioAlt", "A10151ContaProvisoriaFRMDataHoraAlt", "Gx_mode", "Z10138ContaProvisoriaFRMEmpId", "Z10139ContaProvisoriaFRMNoReserva", "Z10148ContaProvisoriaFRMCliForId", "Z10150ContaProvisoriaFRMConvenioId", "Z10162ContaProvisoriaFRMValor", "Z10159ContaProvisoriaFRMTpConta", "Z10153ContaProvisoriaFRMDtInclusao", "Z10152ContaProvisoriaFRMDtEmissao", "Z10154ContaProvisoriaFRMDtVencmto", "Z10157ContaProvisoriaFRMObservacao", "Z10155ContaProvisoriaFRMNoDocumento", "Z10145ContaProvisoriaFRMAnoProcesso", "Z10156ContaProvisoriaFRMNoProcesso", "Z10160ContaProvisoriaFRMTransacaoId", "Z10147ContaProvisoriaFRMCCustoId", "Z10146ContaProvisoriaFRMCContabilId", "Z10158ContaProvisoriaFRMSnEfetivada", "Z10161ContaProvisoriaFRMUsuarioAlt", "Z10151ContaProvisoriaFRMDataHoraAlt", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Contaprovisoriafrmsnefetivada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMSNEFETIVADA");
         this.AnyError  = 0;
         if ( ! ( this.A10158ContaProvisoriaFRMSnEfetivada == "N" || this.A10158ContaProvisoriaFRMSnEfetivada == "S" ) )
         {
            try {
               gxballoon.setError("Campo Conta Provisoria FRMSn Efetivada fora do intervalo");
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
   this.Valid_Contaprovisoriafrmcontaseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCONTASEQ", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode761 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;
         this.standaloneModalEW761( );
         this.standaloneNotModalEW761( );
         if ( gx.fn.gridDuplicateKey(110) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Conta", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode761  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmcontaprecemp=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCONTAPRECEMP", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode761 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode761  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmcontaprecno=function()
   {
      this.sMode761 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Contaprovisoriafrmcontaprecno",["gx.O.A10143ContaProvisoriaFRMContaPRecEmp", "gx.O.A10144ContaProvisoriaFRMContaPRecNo"],[]);
      this.Gx_mode =  this.sMode761  ;
      return true;
   }
   this.Valid_Contaprovisoriafrmcontalanemp=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCONTALANEMP", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode761 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode761  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaprovisoriafrmcontalanno=function()
   {
      this.sMode761 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Contaprovisoriafrmcontalanno",["gx.O.A10141ContaProvisoriaFRMContaLanEmp", "gx.O.A10142ContaProvisoriaFRMContaLanNo"],[]);
      this.Gx_mode =  this.sMode761  ;
      return true;
   }
   this.Valid_Contaprovisoriafrmcontasnpgenv=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(108) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPROVISORIAFRMCONTASNPGENV", gx.fn.currentGridRowImpl(108));
         this.AnyError  = 0;
         this.sMode761 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(761,108)  ;
         if ( ! ( this.A10149ContaProvisoriaFRMContaSnPgEnv == "N" || this.A10149ContaProvisoriaFRMContaSnPgEnv == "S" ) )
         {
            try {
               gxballoon.setError("Campo Conta Provisoria FRMConta Sn Pg Env fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode761  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModalEW761=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("CONTAPROVISORIAFRMCONTASEQ","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("CONTAPROVISORIAFRMCONTASEQ","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModalEW761=function()
   {
      return true;
   }
   this.e11ew760_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ew760_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,94,97,99,102,104,109,110,111,112,113,114,115,116,125,127];
   this.GXLastCtrlId =127;
   this.Grid1Container = new gx.grid.grid(this, 761,"Conta",108,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tcontaprovisoriafrm",[10140],false,1,false,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_761",109,"vNRCDDELETED_761","","","nRcdDeleted_761","int",0,"px",4,1,"right",null,[],"nRcdDeleted_761","nRcdDeleted_761",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10140,110,"CONTAPROVISORIAFRMCONTASEQ","Conta Provisoria FRMConta Seq","","ContaProvisoriaFRMContaSeq","int",0,"px",8,8,"right",null,[],10140,"ContaProvisoriaFRMContaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10143,111,"CONTAPROVISORIAFRMCONTAPRECEMP","Conta Provisoria FRMConta PRec Emp","","ContaProvisoriaFRMContaPRecEmp","char",0,"px",10,10,"left",null,[],10143,"ContaProvisoriaFRMContaPRecEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10144,112,"CONTAPROVISORIAFRMCONTAPRECNO","Conta Provisoria FRMConta PRec No","","ContaProvisoriaFRMContaPRecNo","int",0,"px",8,8,"right",null,[],10144,"ContaProvisoriaFRMContaPRecNo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_10143_10144","PROMPT_10143_10144",129,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(10141,113,"CONTAPROVISORIAFRMCONTALANEMP","Conta Provisoria FRMConta Lan Emp","","ContaProvisoriaFRMContaLanEmp","char",0,"px",10,10,"left",null,[],10141,"ContaProvisoriaFRMContaLanEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10142,114,"CONTAPROVISORIAFRMCONTALANNO","Conta Provisoria FRMConta Lan No","","ContaProvisoriaFRMContaLanNo","int",0,"px",8,8,"right",null,[],10142,"ContaProvisoriaFRMContaLanNo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_10141_10142","PROMPT_10141_10142",130,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(10149,115,"CONTAPROVISORIAFRMCONTASNPGENV","Conta Provisoria FRMConta Sn Pg Env","","ContaProvisoriaFRMContaSnPgEnv","char",0,"px",1,1,"left",null,[],10149,"ContaProvisoriaFRMContaSnPgEnv",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisoriafrmempid,isvalid:null,rgrid:[this.Grid1Container],fld:"CONTAPROVISORIAFRMEMPID",gxz:"Z10138ContaProvisoriaFRMEmpId",gxold:"O10138ContaProvisoriaFRMEmpId",gxvar:"A10138ContaProvisoriaFRMEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10138ContaProvisoriaFRMEmpId=Value},v2z:function(Value){gx.O.Z10138ContaProvisoriaFRMEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMEMPID",gx.O.A10138ContaProvisoriaFRMEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10138ContaProvisoriaFRMEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisoriafrmnoreserva,isvalid:null,rgrid:[this.Grid1Container],fld:"CONTAPROVISORIAFRMNORESERVA",gxz:"Z10139ContaProvisoriaFRMNoReserva",gxold:"O10139ContaProvisoriaFRMNoReserva",gxvar:"A10139ContaProvisoriaFRMNoReserva",ucs:[],op:[104,99,94,90,85,80,75,70,65,60,55,50,45,40,35,30,25],ip:[104,99,94,90,85,80,75,70,65,60,55,50,45,40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMNORESERVA",gx.O.A10139ContaProvisoriaFRMNoReserva,0)},c2v:function(){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIAFRMNORESERVA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCLIFORID",gxz:"Z10148ContaProvisoriaFRMCliForId",gxold:"O10148ContaProvisoriaFRMCliForId",gxvar:"A10148ContaProvisoriaFRMCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10148ContaProvisoriaFRMCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10148ContaProvisoriaFRMCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMCLIFORID",gx.O.A10148ContaProvisoriaFRMCliForId,0)},c2v:function(){gx.O.A10148ContaProvisoriaFRMCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIAFRMCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONVENIOID",gxz:"Z10150ContaProvisoriaFRMConvenioId",gxold:"O10150ContaProvisoriaFRMConvenioId",gxvar:"A10150ContaProvisoriaFRMConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10150ContaProvisoriaFRMConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10150ContaProvisoriaFRMConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMCONVENIOID",gx.O.A10150ContaProvisoriaFRMConvenioId,0)},c2v:function(){gx.O.A10150ContaProvisoriaFRMConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIAFRMCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMVALOR",gxz:"Z10162ContaProvisoriaFRMValor",gxold:"O10162ContaProvisoriaFRMValor",gxvar:"A10162ContaProvisoriaFRMValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10162ContaProvisoriaFRMValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10162ContaProvisoriaFRMValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CONTAPROVISORIAFRMVALOR",gx.O.A10162ContaProvisoriaFRMValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10162ContaProvisoriaFRMValor=this.val()},val:function(){return gx.fn.getDecimalValue("CONTAPROVISORIAFRMVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMTPCONTA",gxz:"Z10159ContaProvisoriaFRMTpConta",gxold:"O10159ContaProvisoriaFRMTpConta",gxvar:"A10159ContaProvisoriaFRMTpConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10159ContaProvisoriaFRMTpConta=Value},v2z:function(Value){gx.O.Z10159ContaProvisoriaFRMTpConta=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMTPCONTA",gx.O.A10159ContaProvisoriaFRMTpConta,0)},c2v:function(){gx.O.A10159ContaProvisoriaFRMTpConta=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMTPCONTA")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDTINCLUSAO",gxz:"Z10153ContaProvisoriaFRMDtInclusao",gxold:"O10153ContaProvisoriaFRMDtInclusao",gxvar:"A10153ContaProvisoriaFRMDtInclusao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10153ContaProvisoriaFRMDtInclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10153ContaProvisoriaFRMDtInclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMDTINCLUSAO",gx.O.A10153ContaProvisoriaFRMDtInclusao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10153ContaProvisoriaFRMDtInclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMDTINCLUSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDTEMISSAO",gxz:"Z10152ContaProvisoriaFRMDtEmissao",gxold:"O10152ContaProvisoriaFRMDtEmissao",gxvar:"A10152ContaProvisoriaFRMDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMDTEMISSAO",gx.O.A10152ContaProvisoriaFRMDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10152ContaProvisoriaFRMDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMDTEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDTVENCMTO",gxz:"Z10154ContaProvisoriaFRMDtVencmto",gxold:"O10154ContaProvisoriaFRMDtVencmto",gxvar:"A10154ContaProvisoriaFRMDtVencmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMDTVENCMTO",gx.O.A10154ContaProvisoriaFRMDtVencmto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10154ContaProvisoriaFRMDtVencmto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMDTVENCMTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMOBSERVACAO",gxz:"Z10157ContaProvisoriaFRMObservacao",gxold:"O10157ContaProvisoriaFRMObservacao",gxvar:"A10157ContaProvisoriaFRMObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10157ContaProvisoriaFRMObservacao=Value},v2z:function(Value){gx.O.Z10157ContaProvisoriaFRMObservacao=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMOBSERVACAO",gx.O.A10157ContaProvisoriaFRMObservacao,0)},c2v:function(){gx.O.A10157ContaProvisoriaFRMObservacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMNODOCUMENTO",gxz:"Z10155ContaProvisoriaFRMNoDocumento",gxold:"O10155ContaProvisoriaFRMNoDocumento",gxvar:"A10155ContaProvisoriaFRMNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10155ContaProvisoriaFRMNoDocumento=Value},v2z:function(Value){gx.O.Z10155ContaProvisoriaFRMNoDocumento=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMNODOCUMENTO",gx.O.A10155ContaProvisoriaFRMNoDocumento,0)},c2v:function(){gx.O.A10155ContaProvisoriaFRMNoDocumento=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMNODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMANOPROCESSO",gxz:"Z10145ContaProvisoriaFRMAnoProcesso",gxold:"O10145ContaProvisoriaFRMAnoProcesso",gxvar:"A10145ContaProvisoriaFRMAnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10145ContaProvisoriaFRMAnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10145ContaProvisoriaFRMAnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMANOPROCESSO",gx.O.A10145ContaProvisoriaFRMAnoProcesso,0)},c2v:function(){gx.O.A10145ContaProvisoriaFRMAnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIAFRMANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMNOPROCESSO",gxz:"Z10156ContaProvisoriaFRMNoProcesso",gxold:"O10156ContaProvisoriaFRMNoProcesso",gxvar:"A10156ContaProvisoriaFRMNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10156ContaProvisoriaFRMNoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10156ContaProvisoriaFRMNoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMNOPROCESSO",gx.O.A10156ContaProvisoriaFRMNoProcesso,0)},c2v:function(){gx.O.A10156ContaProvisoriaFRMNoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPROVISORIAFRMNOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMTRANSACAOID",gxz:"Z10160ContaProvisoriaFRMTransacaoId",gxold:"O10160ContaProvisoriaFRMTransacaoId",gxvar:"A10160ContaProvisoriaFRMTransacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10160ContaProvisoriaFRMTransacaoId=Value},v2z:function(Value){gx.O.Z10160ContaProvisoriaFRMTransacaoId=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMTRANSACAOID",gx.O.A10160ContaProvisoriaFRMTransacaoId,0)},c2v:function(){gx.O.A10160ContaProvisoriaFRMTransacaoId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMTRANSACAOID")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCCUSTOID",gxz:"Z10147ContaProvisoriaFRMCCustoId",gxold:"O10147ContaProvisoriaFRMCCustoId",gxvar:"A10147ContaProvisoriaFRMCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10147ContaProvisoriaFRMCCustoId=Value},v2z:function(Value){gx.O.Z10147ContaProvisoriaFRMCCustoId=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMCCUSTOID",gx.O.A10147ContaProvisoriaFRMCCustoId,0)},c2v:function(){gx.O.A10147ContaProvisoriaFRMCCustoId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCCONTABILID",gxz:"Z10146ContaProvisoriaFRMCContabilId",gxold:"O10146ContaProvisoriaFRMCContabilId",gxvar:"A10146ContaProvisoriaFRMCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10146ContaProvisoriaFRMCContabilId=Value},v2z:function(Value){gx.O.Z10146ContaProvisoriaFRMCContabilId=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMCCONTABILID",gx.O.A10146ContaProvisoriaFRMCContabilId,0)},c2v:function(){gx.O.A10146ContaProvisoriaFRMCContabilId=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaprovisoriafrmsnefetivada,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMSNEFETIVADA",gxz:"Z10158ContaProvisoriaFRMSnEfetivada",gxold:"O10158ContaProvisoriaFRMSnEfetivada",gxvar:"A10158ContaProvisoriaFRMSnEfetivada",ucs:[],op:[94],ip:[94],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10158ContaProvisoriaFRMSnEfetivada=Value},v2z:function(Value){gx.O.Z10158ContaProvisoriaFRMSnEfetivada=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMSNEFETIVADA",gx.O.A10158ContaProvisoriaFRMSnEfetivada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10158ContaProvisoriaFRMSnEfetivada=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMSNEFETIVADA")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMUSUARIOALT",gxz:"Z10161ContaProvisoriaFRMUsuarioAlt",gxold:"O10161ContaProvisoriaFRMUsuarioAlt",gxvar:"A10161ContaProvisoriaFRMUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10161ContaProvisoriaFRMUsuarioAlt=Value},v2z:function(Value){gx.O.Z10161ContaProvisoriaFRMUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMUSUARIOALT",gx.O.A10161ContaProvisoriaFRMUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10161ContaProvisoriaFRMUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTAPROVISORIAFRMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[102]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMDATAHORAALT",gxz:"Z10151ContaProvisoriaFRMDataHoraAlt",gxold:"O10151ContaProvisoriaFRMDataHoraAlt",gxvar:"A10151ContaProvisoriaFRMDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10151ContaProvisoriaFRMDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10151ContaProvisoriaFRMDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAPROVISORIAFRMDATAHORAALT",gx.O.A10151ContaProvisoriaFRMDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10151ContaProvisoriaFRMDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTAPROVISORIAFRMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[109]={lvl:761,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_761",gxz:"ZnRcdDeleted_761",gxold:"OnRcdDeleted_761",gxvar:"nRcdDeleted_761",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_761=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_761=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_761",row || gx.fn.currentGridRowImpl(108),gx.O.nRcdDeleted_761,0)},c2v:function(){gx.O.nRcdDeleted_761=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_761",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:761,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontaseq,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTASEQ",gxz:"Z10140ContaProvisoriaFRMContaSeq",gxold:"O10140ContaProvisoriaFRMContaSeq",gxvar:"A10140ContaProvisoriaFRMContaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10140ContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10140ContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTASEQ",row || gx.fn.currentGridRowImpl(108),gx.O.A10140ContaProvisoriaFRMContaSeq,0)},c2v:function(){gx.O.A10140ContaProvisoriaFRMContaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONTASEQ",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:761,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontaprecemp,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTAPRECEMP",gxz:"Z10143ContaProvisoriaFRMContaPRecEmp",gxold:"O10143ContaProvisoriaFRMContaPRecEmp",gxvar:"A10143ContaProvisoriaFRMContaPRecEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10143ContaProvisoriaFRMContaPRecEmp=Value},v2z:function(Value){gx.O.Z10143ContaProvisoriaFRMContaPRecEmp=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTAPRECEMP",row || gx.fn.currentGridRowImpl(108),gx.O.A10143ContaProvisoriaFRMContaPRecEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10143ContaProvisoriaFRMContaPRecEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMCONTAPRECEMP",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:761,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontaprecno,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTAPRECNO",gxz:"Z10144ContaProvisoriaFRMContaPRecNo",gxold:"O10144ContaProvisoriaFRMContaPRecNo",gxvar:"A10144ContaProvisoriaFRMContaPRecNo",ucs:[],op:[],ip:[112,111],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTAPRECNO",row || gx.fn.currentGridRowImpl(108),gx.O.A10144ContaProvisoriaFRMContaPRecNo,0)},c2v:function(){gx.O.A10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONTAPRECNO",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:761,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontalanemp,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTALANEMP",gxz:"Z10141ContaProvisoriaFRMContaLanEmp",gxold:"O10141ContaProvisoriaFRMContaLanEmp",gxvar:"A10141ContaProvisoriaFRMContaLanEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10141ContaProvisoriaFRMContaLanEmp=Value},v2z:function(Value){gx.O.Z10141ContaProvisoriaFRMContaLanEmp=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTALANEMP",row || gx.fn.currentGridRowImpl(108),gx.O.A10141ContaProvisoriaFRMContaLanEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10141ContaProvisoriaFRMContaLanEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMCONTALANEMP",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:761,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontalanno,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTALANNO",gxz:"Z10142ContaProvisoriaFRMContaLanNo",gxold:"O10142ContaProvisoriaFRMContaLanNo",gxvar:"A10142ContaProvisoriaFRMContaLanNo",ucs:[],op:[],ip:[114,113],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10142ContaProvisoriaFRMContaLanNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10142ContaProvisoriaFRMContaLanNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTALANNO",row || gx.fn.currentGridRowImpl(108),gx.O.A10142ContaProvisoriaFRMContaLanNo,0)},c2v:function(){gx.O.A10142ContaProvisoriaFRMContaLanNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONTALANNO",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:761,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:1,grid:108,gxgrid:this.Grid1Container,fnc:this.Valid_Contaprovisoriafrmcontasnpgenv,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTASNPGENV",gxz:"Z10149ContaProvisoriaFRMContaSnPgEnv",gxold:"O10149ContaProvisoriaFRMContaSnPgEnv",gxvar:"A10149ContaProvisoriaFRMContaSnPgEnv",ucs:[],op:[115],ip:[115],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10149ContaProvisoriaFRMContaSnPgEnv=Value},v2z:function(Value){gx.O.Z10149ContaProvisoriaFRMContaSnPgEnv=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTASNPGENV",row || gx.fn.currentGridRowImpl(108),gx.O.A10149ContaProvisoriaFRMContaSnPgEnv,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10149ContaProvisoriaFRMContaSnPgEnv=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMCONTASNPGENV",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[127]={fld:"BTNHELP",grid:0};
   this.A10138ContaProvisoriaFRMEmpId = "" ;
   this.Z10138ContaProvisoriaFRMEmpId = "" ;
   this.O10138ContaProvisoriaFRMEmpId = "" ;
   this.A10139ContaProvisoriaFRMNoReserva = 0 ;
   this.Z10139ContaProvisoriaFRMNoReserva = 0 ;
   this.O10139ContaProvisoriaFRMNoReserva = 0 ;
   this.A10148ContaProvisoriaFRMCliForId = 0 ;
   this.Z10148ContaProvisoriaFRMCliForId = 0 ;
   this.O10148ContaProvisoriaFRMCliForId = 0 ;
   this.A10150ContaProvisoriaFRMConvenioId = 0 ;
   this.Z10150ContaProvisoriaFRMConvenioId = 0 ;
   this.O10150ContaProvisoriaFRMConvenioId = 0 ;
   this.A10162ContaProvisoriaFRMValor = 0 ;
   this.Z10162ContaProvisoriaFRMValor = 0 ;
   this.O10162ContaProvisoriaFRMValor = 0 ;
   this.A10159ContaProvisoriaFRMTpConta = "" ;
   this.Z10159ContaProvisoriaFRMTpConta = "" ;
   this.O10159ContaProvisoriaFRMTpConta = "" ;
   this.A10153ContaProvisoriaFRMDtInclusao = gx.date.nullDate() ;
   this.Z10153ContaProvisoriaFRMDtInclusao = gx.date.nullDate() ;
   this.O10153ContaProvisoriaFRMDtInclusao = gx.date.nullDate() ;
   this.A10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.Z10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.O10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.A10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.Z10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.O10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.A10157ContaProvisoriaFRMObservacao = "" ;
   this.Z10157ContaProvisoriaFRMObservacao = "" ;
   this.O10157ContaProvisoriaFRMObservacao = "" ;
   this.A10155ContaProvisoriaFRMNoDocumento = "" ;
   this.Z10155ContaProvisoriaFRMNoDocumento = "" ;
   this.O10155ContaProvisoriaFRMNoDocumento = "" ;
   this.A10145ContaProvisoriaFRMAnoProcesso = 0 ;
   this.Z10145ContaProvisoriaFRMAnoProcesso = 0 ;
   this.O10145ContaProvisoriaFRMAnoProcesso = 0 ;
   this.A10156ContaProvisoriaFRMNoProcesso = 0 ;
   this.Z10156ContaProvisoriaFRMNoProcesso = 0 ;
   this.O10156ContaProvisoriaFRMNoProcesso = 0 ;
   this.A10160ContaProvisoriaFRMTransacaoId = "" ;
   this.Z10160ContaProvisoriaFRMTransacaoId = "" ;
   this.O10160ContaProvisoriaFRMTransacaoId = "" ;
   this.A10147ContaProvisoriaFRMCCustoId = "" ;
   this.Z10147ContaProvisoriaFRMCCustoId = "" ;
   this.O10147ContaProvisoriaFRMCCustoId = "" ;
   this.A10146ContaProvisoriaFRMCContabilId = "" ;
   this.Z10146ContaProvisoriaFRMCContabilId = "" ;
   this.O10146ContaProvisoriaFRMCContabilId = "" ;
   this.A10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.Z10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.O10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.A10161ContaProvisoriaFRMUsuarioAlt = "" ;
   this.Z10161ContaProvisoriaFRMUsuarioAlt = "" ;
   this.O10161ContaProvisoriaFRMUsuarioAlt = "" ;
   this.A10151ContaProvisoriaFRMDataHoraAlt = gx.date.nullDate() ;
   this.Z10151ContaProvisoriaFRMDataHoraAlt = gx.date.nullDate() ;
   this.O10151ContaProvisoriaFRMDataHoraAlt = gx.date.nullDate() ;
   this.ZnRcdDeleted_761 = 0 ;
   this.OnRcdDeleted_761 = 0 ;
   this.Z10140ContaProvisoriaFRMContaSeq = 0 ;
   this.O10140ContaProvisoriaFRMContaSeq = 0 ;
   this.Z10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.O10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.Z10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.O10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.Z10141ContaProvisoriaFRMContaLanEmp = "" ;
   this.O10141ContaProvisoriaFRMContaLanEmp = "" ;
   this.Z10142ContaProvisoriaFRMContaLanNo = 0 ;
   this.O10142ContaProvisoriaFRMContaLanNo = 0 ;
   this.Z10149ContaProvisoriaFRMContaSnPgEnv = "" ;
   this.O10149ContaProvisoriaFRMContaSnPgEnv = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.A10140ContaProvisoriaFRMContaSeq = 0 ;
   this.A10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.A10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.A10141ContaProvisoriaFRMContaLanEmp = "" ;
   this.A10142ContaProvisoriaFRMContaLanNo = 0 ;
   this.A10185ContaProvisoriaFRMContaDescErr = "" ;
   this.A10186ContaProvisoriaFRMContaUsuBaix = "" ;
   this.A10149ContaProvisoriaFRMContaSnPgEnv = "" ;
   this.AV8Logon = {} ;
   this.A10138ContaProvisoriaFRMEmpId = "" ;
   this.A10139ContaProvisoriaFRMNoReserva = 0 ;
   this.A10148ContaProvisoriaFRMCliForId = 0 ;
   this.A10150ContaProvisoriaFRMConvenioId = 0 ;
   this.A10162ContaProvisoriaFRMValor = 0 ;
   this.A10159ContaProvisoriaFRMTpConta = "" ;
   this.A10153ContaProvisoriaFRMDtInclusao = gx.date.nullDate() ;
   this.A10152ContaProvisoriaFRMDtEmissao = gx.date.nullDate() ;
   this.A10154ContaProvisoriaFRMDtVencmto = gx.date.nullDate() ;
   this.A10157ContaProvisoriaFRMObservacao = "" ;
   this.A10155ContaProvisoriaFRMNoDocumento = "" ;
   this.A10145ContaProvisoriaFRMAnoProcesso = 0 ;
   this.A10156ContaProvisoriaFRMNoProcesso = 0 ;
   this.A10160ContaProvisoriaFRMTransacaoId = "" ;
   this.A10147ContaProvisoriaFRMCCustoId = "" ;
   this.A10146ContaProvisoriaFRMCContabilId = "" ;
   this.A10158ContaProvisoriaFRMSnEfetivada = "" ;
   this.A10161ContaProvisoriaFRMUsuarioAlt = "" ;
   this.A10151ContaProvisoriaFRMDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11ew760_client": ["ENTER", true] ,"e12ew760_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_10143_10144", [111,112]);
   this.setPrompt("PROMPT_10141_10142", [113,114]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A10185ContaProvisoriaFRMContaDescErr", "CONTAPROVISORIAFRMCONTADESCERR", 108, "vchar");
   this.setVCMap("A10186ContaProvisoriaFRMContaUsuBaix", "CONTAPROVISORIAFRMCONTAUSUBAIX", 108, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcontaprovisoriafrm());
