/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:4.75
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidadadosentrega', false, function () {
   this.ServerClass =  "hregistrarsaidadadosentrega" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Saidacidadeendentregaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDACIDADEENDENTREGAID");
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
      this.AV28SnErro =  "N"  ;
      if ( ! (""==this.AV15SaidaCEPEndEntrega) )
      {
         if ( (""==this.AV16SaidaEnderecoEntrega) )
         {
            this.addMessage("Informe o Endereço de Entrega");
            gx.fn.usrSetFocus("vSAIDAENDERECOENTREGA") ;
            this.AV28SnErro =  "S"  ;
         }
         if ( (0==this.AV17SaidaNumeroEndEntrega) && this.AV28SnErro == "N" )
         {
            this.addMessage("Informe o Numero de Entrega");
            gx.fn.usrSetFocus("vSAIDANUMEROENDENTREGA") ;
            this.AV28SnErro =  "S"  ;
         }
         if ( (""==this.AV19SaidaBairroEndEntrega) && this.AV28SnErro == "N" )
         {
            this.addMessage("Informe o Bairro de Entrega");
            gx.fn.usrSetFocus("vSAIDABAIRROENDENTREGA") ;
            this.AV28SnErro =  "S"  ;
         }
         if ( (0==this.AV20SaidaCidadeEndEntregaId) && this.AV28SnErro == "N" )
         {
            this.addMessage("Informe a Cidade de Entrega");
            gx.fn.usrSetFocus("vSAIDACIDADEENDENTREGAID") ;
            this.AV28SnErro =  "S"  ;
         }
      }
      else
      {
         if ( ! (""==this.AV16SaidaEnderecoEntrega) )
         {
            if ( (""==this.AV15SaidaCEPEndEntrega) && this.AV28SnErro == "N" )
            {
               this.addMessage("Informe o CEP de Entrega");
               gx.fn.usrSetFocus("vSAIDACEPENDENTREGA") ;
               this.AV28SnErro =  "S"  ;
            }
            if ( (0==this.AV17SaidaNumeroEndEntrega) && this.AV28SnErro == "N" )
            {
               this.addMessage("Informe o Numero de Entrega");
               gx.fn.usrSetFocus("vSAIDANUMEROENDENTREGA") ;
               this.AV28SnErro =  "S"  ;
            }
            if ( (""==this.AV19SaidaBairroEndEntrega) && this.AV28SnErro == "N" )
            {
               this.addMessage("Informe o Bairro de Entrega");
               gx.fn.usrSetFocus("vSAIDABAIRROENDENTREGA") ;
               this.AV28SnErro =  "S"  ;
            }
            if ( (0==this.AV20SaidaCidadeEndEntregaId) && this.AV28SnErro == "N" )
            {
               this.addMessage("Informe a Cidade de Entrega");
               gx.fn.usrSetFocus("vSAIDACIDADEENDENTREGAID") ;
               this.AV28SnErro =  "S"  ;
            }
         }
         else
         {
            if ( ! (0==this.AV17SaidaNumeroEndEntrega) && this.AV28SnErro == "N" )
            {
               if ( (""==this.AV15SaidaCEPEndEntrega) )
               {
                  this.addMessage("Informe o CEP de Entrega");
                  gx.fn.usrSetFocus("vSAIDACEPENDENTREGA") ;
                  this.AV28SnErro =  "S"  ;
               }
               if ( (""==this.AV16SaidaEnderecoEntrega) && this.AV28SnErro == "N" )
               {
                  this.addMessage("Informe o Endereço de Entrega");
                  gx.fn.usrSetFocus("vSAIDAENDERECOENTREGA") ;
                  this.AV28SnErro =  "S"  ;
               }
               if ( (""==this.AV19SaidaBairroEndEntrega) && this.AV28SnErro == "N" )
               {
                  this.addMessage("Informe o Bairro de Entrega");
                  gx.fn.usrSetFocus("vSAIDABAIRROENDENTREGA") ;
                  this.AV28SnErro =  "S"  ;
               }
               if ( (0==this.AV20SaidaCidadeEndEntregaId) && this.AV28SnErro == "N" )
               {
                  this.addMessage("Informe a Cidade de Entrega");
                  gx.fn.usrSetFocus("vSAIDACIDADEENDENTREGAID") ;
                  this.AV28SnErro =  "S"  ;
               }
            }
            else
            {
               if ( ! (""==this.AV19SaidaBairroEndEntrega) && this.AV28SnErro == "N" )
               {
                  if ( (""==this.AV15SaidaCEPEndEntrega) )
                  {
                     this.addMessage("Informe o CEP de Entrega");
                     gx.fn.usrSetFocus("vSAIDACEPENDENTREGA") ;
                     this.AV28SnErro =  "S"  ;
                  }
                  if ( (""==this.AV16SaidaEnderecoEntrega) && this.AV28SnErro == "N" )
                  {
                     this.addMessage("Informe o Endereço de Entrega");
                     gx.fn.usrSetFocus("vSAIDAENDERECOENTREGA") ;
                     this.AV28SnErro =  "S"  ;
                  }
                  if ( (0==this.AV17SaidaNumeroEndEntrega) && this.AV28SnErro == "N" )
                  {
                     this.addMessage("Informe o Numero de Entrega");
                     gx.fn.usrSetFocus("vSAIDANUMEROENDENTREGA") ;
                     this.AV28SnErro =  "S"  ;
                  }
                  if ( (0==this.AV20SaidaCidadeEndEntregaId) && this.AV28SnErro == "N" )
                  {
                     this.addMessage("Informe a Cidade de Entrega");
                     gx.fn.usrSetFocus("vSAIDACIDADEENDENTREGAID") ;
                     this.AV28SnErro =  "S"  ;
                  }
               }
               else
               {
                  if ( ! (0==this.AV20SaidaCidadeEndEntregaId) && this.AV28SnErro == "N" )
                  {
                     if ( (""==this.AV15SaidaCEPEndEntrega) )
                     {
                        this.addMessage("Informe o CEP de Entrega");
                        gx.fn.usrSetFocus("vSAIDACEPENDENTREGA") ;
                        this.AV28SnErro =  "S"  ;
                     }
                     if ( (""==this.AV16SaidaEnderecoEntrega) && this.AV28SnErro == "N" )
                     {
                        this.addMessage("Informe o Endereço de Entrega");
                        gx.fn.usrSetFocus("vSAIDAENDERECOENTREGA") ;
                        this.AV28SnErro =  "S"  ;
                     }
                     if ( (0==this.AV17SaidaNumeroEndEntrega) && this.AV28SnErro == "N" )
                     {
                        this.addMessage("Informe o Numero de Entrega");
                        gx.fn.usrSetFocus("vSAIDANUMEROENDENTREGA") ;
                        this.AV28SnErro =  "S"  ;
                     }
                     if ( (""==this.AV19SaidaBairroEndEntrega) && this.AV28SnErro == "N" )
                     {
                        this.addMessage("Informe o Bairro de Entrega");
                        gx.fn.usrSetFocus("vSAIDABAIRROENDENTREGA") ;
                        this.AV28SnErro =  "S"  ;
                     }
                  }
               }
            }
         }
      }
   };
   this.e1212r2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1312r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,33,35,38,40,43,45,46,54,55,56];
   this.GXLastCtrlId =56;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDATIPOENTREGA",gxz:"ZV13SaidaTipoEntrega",gxold:"OV13SaidaTipoEntrega",gxvar:"AV13SaidaTipoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13SaidaTipoEntrega=Value},v2z:function(Value){gx.O.ZV13SaidaTipoEntrega=Value},v2c:function(){gx.fn.setComboBoxValue("vSAIDATIPOENTREGA",gx.O.AV13SaidaTipoEntrega)},c2v:function(){gx.O.AV13SaidaTipoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATIPOENTREGA")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAPREVISAOENTREGA",gxz:"ZV14SaidaDataPrevisaoEntrega",gxold:"OV14SaidaDataPrevisaoEntrega",gxvar:"AV14SaidaDataPrevisaoEntrega",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SaidaDataPrevisaoEntrega=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14SaidaDataPrevisaoEntrega=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATAPREVISAOENTREGA",gx.O.AV14SaidaDataPrevisaoEntrega,0)},c2v:function(){gx.O.AV14SaidaDataPrevisaoEntrega=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAPREVISAOENTREGA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACEPENDENTREGA",gxz:"ZV15SaidaCEPEndEntrega",gxold:"OV15SaidaCEPEndEntrega",gxvar:"AV15SaidaCEPEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SaidaCEPEndEntrega=Value},v2z:function(Value){gx.O.ZV15SaidaCEPEndEntrega=Value},v2c:function(){gx.fn.setControlValue("vSAIDACEPENDENTREGA",gx.O.AV15SaidaCEPEndEntrega,0)},c2v:function(){gx.O.AV15SaidaCEPEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACEPENDENTREGA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAENDERECOENTREGA",gxz:"ZV16SaidaEnderecoEntrega",gxold:"OV16SaidaEnderecoEntrega",gxvar:"AV16SaidaEnderecoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SaidaEnderecoEntrega=Value},v2z:function(Value){gx.O.ZV16SaidaEnderecoEntrega=Value},v2c:function(){gx.fn.setControlValue("vSAIDAENDERECOENTREGA",gx.O.AV16SaidaEnderecoEntrega,0)},c2v:function(){gx.O.AV16SaidaEnderecoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAENDERECOENTREGA")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANUMEROENDENTREGA",gxz:"ZV17SaidaNumeroEndEntrega",gxold:"OV17SaidaNumeroEndEntrega",gxvar:"AV17SaidaNumeroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaNumeroEndEntrega=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaNumeroEndEntrega=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANUMEROENDENTREGA",gx.O.AV17SaidaNumeroEndEntrega,0)},c2v:function(){gx.O.AV17SaidaNumeroEndEntrega=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANUMEROENDENTREGA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACOMPLEMENTOENDENTREGA",gxz:"ZV18SaidaComplementoEndEntrega",gxold:"OV18SaidaComplementoEndEntrega",gxvar:"AV18SaidaComplementoEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SaidaComplementoEndEntrega=Value},v2z:function(Value){gx.O.ZV18SaidaComplementoEndEntrega=Value},v2c:function(){gx.fn.setControlValue("vSAIDACOMPLEMENTOENDENTREGA",gx.O.AV18SaidaComplementoEndEntrega,0)},c2v:function(){gx.O.AV18SaidaComplementoEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACOMPLEMENTOENDENTREGA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDABAIRROENDENTREGA",gxz:"ZV19SaidaBairroEndEntrega",gxold:"OV19SaidaBairroEndEntrega",gxvar:"AV19SaidaBairroEndEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SaidaBairroEndEntrega=Value},v2z:function(Value){gx.O.ZV19SaidaBairroEndEntrega=Value},v2c:function(){gx.fn.setControlValue("vSAIDABAIRROENDENTREGA",gx.O.AV19SaidaBairroEndEntrega,0)},c2v:function(){gx.O.AV19SaidaBairroEndEntrega=this.val()},val:function(){return gx.fn.getControlValue("vSAIDABAIRROENDENTREGA")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidacidadeendentregaid,isvalid:null,rgrid:[],fld:"vSAIDACIDADEENDENTREGAID",gxz:"ZV20SaidaCidadeEndEntregaId",gxold:"OV20SaidaCidadeEndEntregaId",gxvar:"AV20SaidaCidadeEndEntregaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SaidaCidadeEndEntregaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20SaidaCidadeEndEntregaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDACIDADEENDENTREGAID",gx.O.AV20SaidaCidadeEndEntregaId,0)},c2v:function(){gx.O.AV20SaidaCidadeEndEntregaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACIDADEENDENTREGAID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACIDADEENDENTREGANOME",gxz:"ZV21SaidaCidadeEndEntregaNome",gxold:"OV21SaidaCidadeEndEntregaNome",gxvar:"AV21SaidaCidadeEndEntregaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SaidaCidadeEndEntregaNome=Value},v2z:function(Value){gx.O.ZV21SaidaCidadeEndEntregaNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDACIDADEENDENTREGANOME",gx.O.AV21SaidaCidadeEndEntregaNome,0)},c2v:function(){gx.O.AV21SaidaCidadeEndEntregaNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACIDADEENDENTREGANOME")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={fld:"PROMPT_SAIDACEPENDENTREGA",grid:0};
   GXValidFnc[56]={fld:"PROMPT_SAIDACIDADEENDENTREGAID",grid:0};
   this.AV13SaidaTipoEntrega = "" ;
   this.ZV13SaidaTipoEntrega = "" ;
   this.OV13SaidaTipoEntrega = "" ;
   this.AV14SaidaDataPrevisaoEntrega = gx.date.nullDate() ;
   this.ZV14SaidaDataPrevisaoEntrega = gx.date.nullDate() ;
   this.OV14SaidaDataPrevisaoEntrega = gx.date.nullDate() ;
   this.AV15SaidaCEPEndEntrega = "" ;
   this.ZV15SaidaCEPEndEntrega = "" ;
   this.OV15SaidaCEPEndEntrega = "" ;
   this.AV16SaidaEnderecoEntrega = "" ;
   this.ZV16SaidaEnderecoEntrega = "" ;
   this.OV16SaidaEnderecoEntrega = "" ;
   this.AV17SaidaNumeroEndEntrega = 0 ;
   this.ZV17SaidaNumeroEndEntrega = 0 ;
   this.OV17SaidaNumeroEndEntrega = 0 ;
   this.AV18SaidaComplementoEndEntrega = "" ;
   this.ZV18SaidaComplementoEndEntrega = "" ;
   this.OV18SaidaComplementoEndEntrega = "" ;
   this.AV19SaidaBairroEndEntrega = "" ;
   this.ZV19SaidaBairroEndEntrega = "" ;
   this.OV19SaidaBairroEndEntrega = "" ;
   this.AV20SaidaCidadeEndEntregaId = 0 ;
   this.ZV20SaidaCidadeEndEntregaId = 0 ;
   this.OV20SaidaCidadeEndEntregaId = 0 ;
   this.AV21SaidaCidadeEndEntregaNome = "" ;
   this.ZV21SaidaCidadeEndEntregaNome = "" ;
   this.OV21SaidaCidadeEndEntregaNome = "" ;
   this.AV13SaidaTipoEntrega = "" ;
   this.AV14SaidaDataPrevisaoEntrega = gx.date.nullDate() ;
   this.AV15SaidaCEPEndEntrega = "" ;
   this.AV16SaidaEnderecoEntrega = "" ;
   this.AV17SaidaNumeroEndEntrega = 0 ;
   this.AV18SaidaComplementoEndEntrega = "" ;
   this.AV19SaidaBairroEndEntrega = "" ;
   this.AV20SaidaCidadeEndEntregaId = 0 ;
   this.AV21SaidaCidadeEndEntregaNome = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.AV28SnErro = "" ;
   this.Events = {"e1212r2_client": ["ENTER", true] ,"e1312r2_client": ["'FECHAR'", true] ,"e1512r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV15SaidaCEPEndEntrega',fld:'vSAIDACEPENDENTREGA'},{av:'AV16SaidaEnderecoEntrega',fld:'vSAIDAENDERECOENTREGA'},{av:'AV17SaidaNumeroEndEntrega',fld:'vSAIDANUMEROENDENTREGA'},{av:'AV19SaidaBairroEndEntrega',fld:'vSAIDABAIRROENDENTREGA'},{av:'AV20SaidaCidadeEndEntregaId',fld:'vSAIDACIDADEENDENTREGAID'},{av:'AV13SaidaTipoEntrega',fld:'vSAIDATIPOENTREGA'},{av:'AV14SaidaDataPrevisaoEntrega',fld:'vSAIDADATAPREVISAOENTREGA'},{av:'AV18SaidaComplementoEndEntrega',fld:'vSAIDACOMPLEMENTOENDENTREGA'}],[{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV24SaidaDadosEntrega',fld:'vSAIDADADOSENTREGA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_SAIDACEPENDENTREGA", [20]);
   this.setPrompt("PROMPT_SAIDACIDADEENDENTREGAID", [45]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidadadosentrega());
