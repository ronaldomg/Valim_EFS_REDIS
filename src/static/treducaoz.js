/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:29:31.8
*/
gx.evt.autoSkip = false;
gx.define('treducaoz', false, function () {
   this.ServerClass =  "treducaoz" ;
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
      this.A3991SomaAliquotas2=gx.fn.getDecimalValue("SOMAALIQUOTAS2",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Reducaozempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REDUCAOZEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Reducaoznumeroloja=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REDUCAOZNUMEROLOJA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Reducaozdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REDUCAOZDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Reducaozsequenciaecf=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Reducaozsequenciaecf",["gx.O.A3995ReducaoZEmpresaId", "gx.O.A5775ReducaoZNumeroLoja", "gx.O.A4326ReducaoZSequenciaECF", 'gx.date.urlDate(gx.O.A3996ReducaoZData,"DMY4")', "gx.O.A3982ReducaoZNumIntervencao", "gx.O.A3983ReducaoZPrimeiraOperacao", "gx.O.A3984ReducaoZUltimaOperacao", "gx.O.A3985ReducaoZContadorReducao", "gx.num.urlDecimal(gx.O.A3986ReducaoZVlrGrandeInicial,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A3987ReducaoZVlrGrandeFinal,\'.\',\',\')", "gx.O.A4323ReducaoZNumeroSerie", 'gx.date.urlDate(gx.O.A5379ReducaoZDataImpressao,"DMY4")', "gx.O.A5380ReducaoZHoraImpressao", "gx.O.A4325ReducaoZCOOReducao", "gx.O.A4327ReducaoZNumeroUsuarioECF", "gx.O.A4328ReducaoZLetraMFAdicionalECF", "gx.O.A4329ReducaoZModeloECF", "gx.O.A4330ReducaoZDescontoISSQNECF", "gx.O.A3989ReducaoZUsuarioAlt", 'gx.date.urlDateTime(gx.O.A3990ReducaoZDataHoraAlt,"DMY4")', "gx.num.urlDecimal(gx.O.A3991SomaAliquotas2,\'.\',\',\')"],["A3982ReducaoZNumIntervencao", "A3983ReducaoZPrimeiraOperacao", "A3984ReducaoZUltimaOperacao", "A3985ReducaoZContadorReducao", "A3986ReducaoZVlrGrandeInicial", "A3987ReducaoZVlrGrandeFinal", "A4323ReducaoZNumeroSerie", "A5379ReducaoZDataImpressao", "A5380ReducaoZHoraImpressao", "A4325ReducaoZCOOReducao", "A4327ReducaoZNumeroUsuarioECF", "A4328ReducaoZLetraMFAdicionalECF", "A4329ReducaoZModeloECF", "A4330ReducaoZDescontoISSQNECF", "A3989ReducaoZUsuarioAlt", "A3990ReducaoZDataHoraAlt", "A3991SomaAliquotas2", "A3988ReducaoZVendaBruta", "Gx_mode", "Z3995ReducaoZEmpresaId", "Z5775ReducaoZNumeroLoja", "Z4326ReducaoZSequenciaECF", "Z3996ReducaoZData", "Z3982ReducaoZNumIntervencao", "Z3983ReducaoZPrimeiraOperacao", "Z3984ReducaoZUltimaOperacao", "Z3985ReducaoZContadorReducao", "Z3986ReducaoZVlrGrandeInicial", "Z3987ReducaoZVlrGrandeFinal", "Z4323ReducaoZNumeroSerie", "Z5379ReducaoZDataImpressao", "Z5380ReducaoZHoraImpressao", "Z4325ReducaoZCOOReducao", "Z4327ReducaoZNumeroUsuarioECF", "Z4328ReducaoZLetraMFAdicionalECF", "Z4329ReducaoZModeloECF", "Z4330ReducaoZDescontoISSQNECF", "Z3989ReducaoZUsuarioAlt", "Z3990ReducaoZDataHoraAlt", "Z3991SomaAliquotas2", "Z3988ReducaoZVendaBruta", "O3991SomaAliquotas2", "Grid1", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Reducaozvlrgrandeinicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REDUCAOZVLRGRANDEINICIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Reducaozvlrgrandefinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REDUCAOZVLRGRANDEFINAL");
         this.AnyError  = 0;
         try {
            this.A3988ReducaoZVendaBruta =  gx.num.subtract( this.A3987ReducaoZVlrGrandeFinal , this.A3986ReducaoZVlrGrandeInicial )  ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aliquotareducaocodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(112) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ALIQUOTAREDUCAOCODIGO", gx.fn.currentGridRowImpl(112));
         this.AnyError  = 0;
         this.sMode481 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(481,112)  ;
         this.standaloneModal7C481( );
         this.standaloneNotModal7C481( );
         if ( gx.fn.gridDuplicateKey(114) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Alíquotas da Redução", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode481  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aliquotareducaovalor=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(112) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ALIQUOTAREDUCAOVALOR", gx.fn.currentGridRowImpl(112));
         this.AnyError  = 0;
         this.sMode481 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(481,112)  ;
         try {
            this.A3991SomaAliquotas2 =  gx.fn.sumFrm( "A3992AliquotaReducaoValor" , 0 , "." , "," , 112 , gx.trueFn , [] )  ;
         }
         catch(e){}

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode481  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal7C481=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("ALIQUOTAREDUCAOCODIGO","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("ALIQUOTAREDUCAOCODIGO","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal7C481=function()
   {
      try {
         gx.fn.setCtrlProperty("ALIQUOTAREDUCAODATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("ALIQUOTAREDUCAOUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e117c480_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e127c480_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e137c480_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,62,65,67,70,72,75,77,80,82,85,87,90,92,95,97,100,102,105,107,108,111,113,114,115,116,117,118,119,122,124,125,134,135,137];
   this.GXLastCtrlId =137;
   this.Grid1Container = new gx.grid.grid(this, 481,"AliquotaReducao",112,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"treducaoz",[3997],false,1,true,true,5,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_481",113,"vNRCDDELETED_481","","","nRcdDeleted_481","int",0,"px",4,1,"right",null,[],"nRcdDeleted_481","nRcdDeleted_481",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3997,114,"ALIQUOTAREDUCAOCODIGO","Código da Alíquota","","AliquotaReducaoCodigo","svchar",0,"px",10,10,"left",null,[],3997,"AliquotaReducaoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3992,115,"ALIQUOTAREDUCAOVALOR","Valor da Alíquota","","AliquotaReducaoValor","decimal",0,"px",22,22,"right",null,[],3992,"AliquotaReducaoValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3993,116,"ALIQUOTAREDUCAODATAHORAALT","Data/Hora de Alteração","","AliquotaReducaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3993,"AliquotaReducaoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3994,117,"ALIQUOTAREDUCAOUSUARIOALT","Usuário de Alteração","","AliquotaReducaoUsuarioAlt","char",0,"px",12,12,"left",null,[],3994,"AliquotaReducaoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaozempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"REDUCAOZEMPRESAID",gxz:"Z3995ReducaoZEmpresaId",gxold:"O3995ReducaoZEmpresaId",gxvar:"A3995ReducaoZEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3995ReducaoZEmpresaId=Value},v2z:function(Value){gx.O.Z3995ReducaoZEmpresaId=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZEMPRESAID",gx.O.A3995ReducaoZEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3995ReducaoZEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 6 , function() {
   });
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TABLE2",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaoznumeroloja,isvalid:null,rgrid:[this.Grid1Container],fld:"REDUCAOZNUMEROLOJA",gxz:"Z5775ReducaoZNumeroLoja",gxold:"O5775ReducaoZNumeroLoja",gxvar:"A5775ReducaoZNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5775ReducaoZNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZNUMEROLOJA",gx.O.A5775ReducaoZNumeroLoja,0)},c2v:function(){gx.O.A5775ReducaoZNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZNUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaozdata,isvalid:null,rgrid:[this.Grid1Container],fld:"REDUCAOZDATA",gxz:"Z3996ReducaoZData",gxold:"O3996ReducaoZData",gxvar:"A3996ReducaoZData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3996ReducaoZData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZDATA",gx.O.A3996ReducaoZData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3996ReducaoZData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("REDUCAOZDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMINTERVENCAO",gxz:"Z3982ReducaoZNumIntervencao",gxold:"O3982ReducaoZNumIntervencao",gxvar:"A3982ReducaoZNumIntervencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3982ReducaoZNumIntervencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3982ReducaoZNumIntervencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZNUMINTERVENCAO",gx.O.A3982ReducaoZNumIntervencao,0)},c2v:function(){gx.O.A3982ReducaoZNumIntervencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZNUMINTERVENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZPRIMEIRAOPERACAO",gxz:"Z3983ReducaoZPrimeiraOperacao",gxold:"O3983ReducaoZPrimeiraOperacao",gxvar:"A3983ReducaoZPrimeiraOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3983ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3983ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZPRIMEIRAOPERACAO",gx.O.A3983ReducaoZPrimeiraOperacao,0)},c2v:function(){gx.O.A3983ReducaoZPrimeiraOperacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZPRIMEIRAOPERACAO",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZULTIMAOPERACAO",gxz:"Z3984ReducaoZUltimaOperacao",gxold:"O3984ReducaoZUltimaOperacao",gxvar:"A3984ReducaoZUltimaOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3984ReducaoZUltimaOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3984ReducaoZUltimaOperacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZULTIMAOPERACAO",gx.O.A3984ReducaoZUltimaOperacao,0)},c2v:function(){gx.O.A3984ReducaoZUltimaOperacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZULTIMAOPERACAO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZCONTADORREDUCAO",gxz:"Z3985ReducaoZContadorReducao",gxold:"O3985ReducaoZContadorReducao",gxvar:"A3985ReducaoZContadorReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3985ReducaoZContadorReducao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3985ReducaoZContadorReducao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZCONTADORREDUCAO",gx.O.A3985ReducaoZContadorReducao,0)},c2v:function(){gx.O.A3985ReducaoZContadorReducao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZCONTADORREDUCAO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaozvlrgrandeinicial,isvalid:null,rgrid:[],fld:"REDUCAOZVLRGRANDEINICIAL",gxz:"Z3986ReducaoZVlrGrandeInicial",gxold:"O3986ReducaoZVlrGrandeInicial",gxvar:"A3986ReducaoZVlrGrandeInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3986ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3986ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("REDUCAOZVLRGRANDEINICIAL",gx.O.A3986ReducaoZVlrGrandeInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3986ReducaoZVlrGrandeInicial=this.val()},val:function(){return gx.fn.getDecimalValue("REDUCAOZVLRGRANDEINICIAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaozvlrgrandefinal,isvalid:null,rgrid:[],fld:"REDUCAOZVLRGRANDEFINAL",gxz:"Z3987ReducaoZVlrGrandeFinal",gxold:"O3987ReducaoZVlrGrandeFinal",gxvar:"A3987ReducaoZVlrGrandeFinal",ucs:[],op:[60],ip:[60,50,55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3987ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3987ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("REDUCAOZVLRGRANDEFINAL",gx.O.A3987ReducaoZVlrGrandeFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3987ReducaoZVlrGrandeFinal=this.val()},val:function(){return gx.fn.getDecimalValue("REDUCAOZVLRGRANDEFINAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZVENDABRUTA",gxz:"Z3988ReducaoZVendaBruta",gxold:"O3988ReducaoZVendaBruta",gxvar:"A3988ReducaoZVendaBruta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3988ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3988ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("REDUCAOZVENDABRUTA",gx.O.A3988ReducaoZVendaBruta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3988ReducaoZVendaBruta=this.val()},val:function(){return gx.fn.getDecimalValue("REDUCAOZVENDABRUTA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   GXValidFnc[65]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMEROSERIE",gxz:"Z4323ReducaoZNumeroSerie",gxold:"O4323ReducaoZNumeroSerie",gxvar:"A4323ReducaoZNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4323ReducaoZNumeroSerie=Value},v2z:function(Value){gx.O.Z4323ReducaoZNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZNUMEROSERIE",gx.O.A4323ReducaoZNumeroSerie,0)},c2v:function(){gx.O.A4323ReducaoZNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZNUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZDATAIMPRESSAO",gxz:"Z5379ReducaoZDataImpressao",gxold:"O5379ReducaoZDataImpressao",gxvar:"A5379ReducaoZDataImpressao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5379ReducaoZDataImpressao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5379ReducaoZDataImpressao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZDATAIMPRESSAO",gx.O.A5379ReducaoZDataImpressao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5379ReducaoZDataImpressao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("REDUCAOZDATAIMPRESSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZHORAIMPRESSAO",gxz:"Z5380ReducaoZHoraImpressao",gxold:"O5380ReducaoZHoraImpressao",gxvar:"A5380ReducaoZHoraImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5380ReducaoZHoraImpressao=Value},v2z:function(Value){gx.O.Z5380ReducaoZHoraImpressao=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZHORAIMPRESSAO",gx.O.A5380ReducaoZHoraImpressao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5380ReducaoZHoraImpressao=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZHORAIMPRESSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[80]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZCOOREDUCAO",gxz:"Z4325ReducaoZCOOReducao",gxold:"O4325ReducaoZCOOReducao",gxvar:"A4325ReducaoZCOOReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4325ReducaoZCOOReducao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4325ReducaoZCOOReducao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZCOOREDUCAO",gx.O.A4325ReducaoZCOOReducao,0)},c2v:function(){gx.O.A4325ReducaoZCOOReducao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZCOOREDUCAO",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Reducaozsequenciaecf,isvalid:null,rgrid:[this.Grid1Container],fld:"REDUCAOZSEQUENCIAECF",gxz:"Z4326ReducaoZSequenciaECF",gxold:"O4326ReducaoZSequenciaECF",gxvar:"A4326ReducaoZSequenciaECF",ucs:[],op:[125,124,107,102,97,92,82,77,72,67,55,50,45,40,35,30],ip:[125,124,107,102,97,92,82,77,72,67,55,50,45,40,35,30,25,87,19,6],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4326ReducaoZSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZSEQUENCIAECF",gx.O.A4326ReducaoZSequenciaECF,0)},c2v:function(){gx.O.A4326ReducaoZSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZNUMEROUSUARIOECF",gxz:"Z4327ReducaoZNumeroUsuarioECF",gxold:"O4327ReducaoZNumeroUsuarioECF",gxvar:"A4327ReducaoZNumeroUsuarioECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4327ReducaoZNumeroUsuarioECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4327ReducaoZNumeroUsuarioECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZNUMEROUSUARIOECF",gx.O.A4327ReducaoZNumeroUsuarioECF,0)},c2v:function(){gx.O.A4327ReducaoZNumeroUsuarioECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REDUCAOZNUMEROUSUARIOECF",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZLETRAMFADICIONALECF",gxz:"Z4328ReducaoZLetraMFAdicionalECF",gxold:"O4328ReducaoZLetraMFAdicionalECF",gxvar:"A4328ReducaoZLetraMFAdicionalECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4328ReducaoZLetraMFAdicionalECF=Value},v2z:function(Value){gx.O.Z4328ReducaoZLetraMFAdicionalECF=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZLETRAMFADICIONALECF",gx.O.A4328ReducaoZLetraMFAdicionalECF,0)},c2v:function(){gx.O.A4328ReducaoZLetraMFAdicionalECF=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZLETRAMFADICIONALECF")},nac:gx.falseFn};
   GXValidFnc[100]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZMODELOECF",gxz:"Z4329ReducaoZModeloECF",gxold:"O4329ReducaoZModeloECF",gxvar:"A4329ReducaoZModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4329ReducaoZModeloECF=Value},v2z:function(Value){gx.O.Z4329ReducaoZModeloECF=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZMODELOECF",gx.O.A4329ReducaoZModeloECF,0)},c2v:function(){gx.O.A4329ReducaoZModeloECF=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZMODELOECF")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZDESCONTOISSQNECF",gxz:"Z4330ReducaoZDescontoISSQNECF",gxold:"O4330ReducaoZDescontoISSQNECF",gxvar:"A4330ReducaoZDescontoISSQNECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4330ReducaoZDescontoISSQNECF=Value},v2z:function(Value){gx.O.Z4330ReducaoZDescontoISSQNECF=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZDESCONTOISSQNECF",gx.O.A4330ReducaoZDescontoISSQNECF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4330ReducaoZDescontoISSQNECF=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZDESCONTOISSQNECF")},nac:gx.falseFn};
   this.declareDomainHdlr( 107 , function() {
   });
   GXValidFnc[108]={fld:"TAB2",grid:0};
   GXValidFnc[111]={fld:"DIV1", format:1,grid:0};
   GXValidFnc[113]={lvl:481,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:112,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_481",gxz:"ZnRcdDeleted_481",gxold:"OnRcdDeleted_481",gxvar:"nRcdDeleted_481",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_481=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_481=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_481",row || gx.fn.currentGridRowImpl(112),gx.O.nRcdDeleted_481,0)},c2v:function(){gx.O.nRcdDeleted_481=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_481",row || gx.fn.currentGridRowImpl(112),'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:481,type:"svchar",len:10,dec:0,sign:false,ro:0,isacc:1,grid:112,gxgrid:this.Grid1Container,fnc:this.Valid_Aliquotareducaocodigo,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOCODIGO",gxz:"Z3997AliquotaReducaoCodigo",gxold:"O3997AliquotaReducaoCodigo",gxvar:"A3997AliquotaReducaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3997AliquotaReducaoCodigo=Value},v2z:function(Value){gx.O.Z3997AliquotaReducaoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(112),gx.O.A3997AliquotaReducaoCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3997AliquotaReducaoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(112))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:481,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:112,gxgrid:this.Grid1Container,fnc:this.Valid_Aliquotareducaovalor,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOVALOR",gxz:"Z3992AliquotaReducaoValor",gxold:"O3992AliquotaReducaoValor",gxvar:"A3992AliquotaReducaoValor",ucs:[],op:[],ip:[115],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3992AliquotaReducaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3992AliquotaReducaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(112),gx.O.A3992AliquotaReducaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3992AliquotaReducaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(112),'.',',')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:481,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:112,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAODATAHORAALT",gxz:"Z3993AliquotaReducaoDataHoraAlt",gxold:"O3993AliquotaReducaoDataHoraAlt",gxvar:"A3993AliquotaReducaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(112),gx.O.A3993AliquotaReducaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3993AliquotaReducaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(112))},nac:gx.falseFn};
   GXValidFnc[117]={lvl:481,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:112,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTAREDUCAOUSUARIOALT",gxz:"Z3994AliquotaReducaoUsuarioAlt",gxold:"O3994AliquotaReducaoUsuarioAlt",gxvar:"A3994AliquotaReducaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3994AliquotaReducaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3994AliquotaReducaoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(112),gx.O.A3994AliquotaReducaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3994AliquotaReducaoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(112))},nac:gx.falseFn};
   GXValidFnc[118]={fld:"DIV2", format:1,grid:0};
   GXValidFnc[119]={fld:"TABLE21",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZUSUARIOALT",gxz:"Z3989ReducaoZUsuarioAlt",gxold:"O3989ReducaoZUsuarioAlt",gxvar:"A3989ReducaoZUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3989ReducaoZUsuarioAlt=Value},v2z:function(Value){gx.O.Z3989ReducaoZUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("REDUCAOZUSUARIOALT",gx.O.A3989ReducaoZUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3989ReducaoZUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("REDUCAOZUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[125]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REDUCAOZDATAHORAALT",gxz:"Z3990ReducaoZDataHoraAlt",gxold:"O3990ReducaoZDataHoraAlt",gxvar:"A3990ReducaoZDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3990ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3990ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REDUCAOZDATAHORAALT",gx.O.A3990ReducaoZDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3990ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REDUCAOZDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[134]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[135]={fld:"JS", format:2,grid:0};
   GXValidFnc[137]={fld:"BTNHELP",grid:0};
   this.A3995ReducaoZEmpresaId = "" ;
   this.Z3995ReducaoZEmpresaId = "" ;
   this.O3995ReducaoZEmpresaId = "" ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.Z5775ReducaoZNumeroLoja = 0 ;
   this.O5775ReducaoZNumeroLoja = 0 ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.Z3996ReducaoZData = gx.date.nullDate() ;
   this.O3996ReducaoZData = gx.date.nullDate() ;
   this.A3982ReducaoZNumIntervencao = 0 ;
   this.Z3982ReducaoZNumIntervencao = 0 ;
   this.O3982ReducaoZNumIntervencao = 0 ;
   this.A3983ReducaoZPrimeiraOperacao = 0 ;
   this.Z3983ReducaoZPrimeiraOperacao = 0 ;
   this.O3983ReducaoZPrimeiraOperacao = 0 ;
   this.A3984ReducaoZUltimaOperacao = 0 ;
   this.Z3984ReducaoZUltimaOperacao = 0 ;
   this.O3984ReducaoZUltimaOperacao = 0 ;
   this.A3985ReducaoZContadorReducao = 0 ;
   this.Z3985ReducaoZContadorReducao = 0 ;
   this.O3985ReducaoZContadorReducao = 0 ;
   this.A3986ReducaoZVlrGrandeInicial = 0 ;
   this.Z3986ReducaoZVlrGrandeInicial = 0 ;
   this.O3986ReducaoZVlrGrandeInicial = 0 ;
   this.A3987ReducaoZVlrGrandeFinal = 0 ;
   this.Z3987ReducaoZVlrGrandeFinal = 0 ;
   this.O3987ReducaoZVlrGrandeFinal = 0 ;
   this.A3988ReducaoZVendaBruta = 0 ;
   this.Z3988ReducaoZVendaBruta = 0 ;
   this.O3988ReducaoZVendaBruta = 0 ;
   this.A4323ReducaoZNumeroSerie = "" ;
   this.Z4323ReducaoZNumeroSerie = "" ;
   this.O4323ReducaoZNumeroSerie = "" ;
   this.A5379ReducaoZDataImpressao = gx.date.nullDate() ;
   this.Z5379ReducaoZDataImpressao = gx.date.nullDate() ;
   this.O5379ReducaoZDataImpressao = gx.date.nullDate() ;
   this.A5380ReducaoZHoraImpressao = "" ;
   this.Z5380ReducaoZHoraImpressao = "" ;
   this.O5380ReducaoZHoraImpressao = "" ;
   this.A4325ReducaoZCOOReducao = 0 ;
   this.Z4325ReducaoZCOOReducao = 0 ;
   this.O4325ReducaoZCOOReducao = 0 ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.Z4326ReducaoZSequenciaECF = 0 ;
   this.O4326ReducaoZSequenciaECF = 0 ;
   this.A4327ReducaoZNumeroUsuarioECF = 0 ;
   this.Z4327ReducaoZNumeroUsuarioECF = 0 ;
   this.O4327ReducaoZNumeroUsuarioECF = 0 ;
   this.A4328ReducaoZLetraMFAdicionalECF = "" ;
   this.Z4328ReducaoZLetraMFAdicionalECF = "" ;
   this.O4328ReducaoZLetraMFAdicionalECF = "" ;
   this.A4329ReducaoZModeloECF = "" ;
   this.Z4329ReducaoZModeloECF = "" ;
   this.O4329ReducaoZModeloECF = "" ;
   this.A4330ReducaoZDescontoISSQNECF = "" ;
   this.Z4330ReducaoZDescontoISSQNECF = "" ;
   this.O4330ReducaoZDescontoISSQNECF = "" ;
   this.ZnRcdDeleted_481 = 0 ;
   this.OnRcdDeleted_481 = 0 ;
   this.Z3997AliquotaReducaoCodigo = "" ;
   this.O3997AliquotaReducaoCodigo = "" ;
   this.Z3992AliquotaReducaoValor = 0 ;
   this.O3992AliquotaReducaoValor = 0 ;
   this.Z3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.O3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.Z3994AliquotaReducaoUsuarioAlt = "" ;
   this.O3994AliquotaReducaoUsuarioAlt = "" ;
   this.A3989ReducaoZUsuarioAlt = "" ;
   this.Z3989ReducaoZUsuarioAlt = "" ;
   this.O3989ReducaoZUsuarioAlt = "" ;
   this.A3990ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.Z3990ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.O3990ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.A3997AliquotaReducaoCodigo = "" ;
   this.A3992AliquotaReducaoValor = 0 ;
   this.A3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.A3994AliquotaReducaoUsuarioAlt = "" ;
   this.AV8Logon = {} ;
   this.A3995ReducaoZEmpresaId = "" ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.A3988ReducaoZVendaBruta = 0 ;
   this.A3982ReducaoZNumIntervencao = 0 ;
   this.A3983ReducaoZPrimeiraOperacao = 0 ;
   this.A3984ReducaoZUltimaOperacao = 0 ;
   this.A3985ReducaoZContadorReducao = 0 ;
   this.A3986ReducaoZVlrGrandeInicial = 0 ;
   this.A3987ReducaoZVlrGrandeFinal = 0 ;
   this.A4323ReducaoZNumeroSerie = "" ;
   this.A5379ReducaoZDataImpressao = gx.date.nullDate() ;
   this.A5380ReducaoZHoraImpressao = "" ;
   this.A4325ReducaoZCOOReducao = 0 ;
   this.A4327ReducaoZNumeroUsuarioECF = 0 ;
   this.A4328ReducaoZLetraMFAdicionalECF = "" ;
   this.A4329ReducaoZModeloECF = "" ;
   this.A4330ReducaoZDescontoISSQNECF = "" ;
   this.A3989ReducaoZUsuarioAlt = "" ;
   this.A3990ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.A3991SomaAliquotas2 = 0 ;
   this.Events = {"e127c480_client": ["ENTER", true] ,"e137c480_client": ["CANCEL", true] ,"e117c480_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3991SomaAliquotas2", "SOMAALIQUOTAS2", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 480 ]= ["O3991SomaAliquotas2"] ;
   this.LvlOlds[ 481 ]= ["O3992AliquotaReducaoValor"] ;
});
gx.setParentObj(new treducaoz());
