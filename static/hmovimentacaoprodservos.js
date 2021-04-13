/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:15.19
*/
gx.evt.autoSkip = false;
gx.define('hmovimentacaoprodservos', false, function () {
   this.ServerClass =  "hmovimentacaoprodservos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV35AparelhoCaracEmpresaId=gx.fn.getControlValue("vAPARELHOCARACEMPRESAID") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicovendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Priaparelhocaracid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Priaparelhocaracid",["gx.O.AV38PRIAparelhoCaracId", "gx.O.AV35AparelhoCaracEmpresaId", "gx.O.AV44CaracVlrCadastro"],["AV44CaracVlrCadastro"]);
      return true;
   }
   this.s152_client=function()
   {
      if ( this.AV50order == 1 )
      {
         gx.fn.setCtrlProperty("vLISTACARACID","Visible", 1 );
         gx.fn.setCtrlProperty("LBLLISTACARAC","Visible", 1 );
      }
      else
      {
         gx.fn.setCtrlProperty("vLISTACARACID","Visible", 0 );
         gx.fn.setCtrlProperty("LBLLISTACARAC","Visible", 0 );
      }
   };
   this.s172_client=function()
   {
      if ( (0==this.AV50order) )
      {
         this.addMessage("Selecione a ordenação");
         gx.fn.usrSetFocus("vORDER") ;
         this.AV28snErro =  "S"  ;
      }
      if ( ! (new gx.date.gxdate("").compare(this.AV13MinOrdemServicoDataHoraFechamento)==0) )
      {
         if ( (new gx.date.gxdate("").compare(this.AV11MaxOrdemServicoDataHoraFechamento)==0) )
         {
            this.AV11MaxOrdemServicoDataHoraFechamento =  this.AV13MinOrdemServicoDataHoraFechamento  ;
         }
         else
         {
            if ( new gx.date.gxdate( this.AV13MinOrdemServicoDataHoraFechamento ).compare( this.AV11MaxOrdemServicoDataHoraFechamento ) > 0 )
            {
               this.AV28snErro =  "S"  ;
               this.addMessage("A data de fechamento inicial não pode ser posterior à final");
               gx.fn.usrSetFocus("vMINORDEMSERVICODATAHORAFECHAMENTO") ;
            }
         }
      }
      else
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV11MaxOrdemServicoDataHoraFechamento)==0) )
         {
            this.AV28snErro =  "S"  ;
            this.addMessage("A data inicial de fechamento não foi preenchida");
            gx.fn.usrSetFocus("vMINORDEMSERVICODATAHORAFECHAMENTO") ;
         }
      }
      if ( this.AV28snErro == "N" )
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV14MinOrdemServicoDatHoraEmissao)==0) )
         {
            if ( (new gx.date.gxdate("").compare(this.AV12MaxOrdemServicoDatHoraEmissao)==0) )
            {
               this.AV12MaxOrdemServicoDatHoraEmissao =  this.AV14MinOrdemServicoDatHoraEmissao  ;
            }
            else
            {
               if ( new gx.date.gxdate( this.AV14MinOrdemServicoDatHoraEmissao ).compare( this.AV12MaxOrdemServicoDatHoraEmissao ) > 0 )
               {
                  this.AV28snErro =  "S"  ;
                  this.addMessage("A data de Abertura inicial não pode ser posterior à final");
                  gx.fn.usrSetFocus("vMINORDEMSERVICODATHORAEMISSAO") ;
               }
            }
         }
         else
         {
            if ( ! (new gx.date.gxdate("").compare(this.AV12MaxOrdemServicoDatHoraEmissao)==0) )
            {
               this.AV28snErro =  "S"  ;
               this.addMessage("A data inicial de Abertura não foi preenchida");
               gx.fn.usrSetFocus("vMINORDEMSERVICODATHORAEMISSAO") ;
            }
         }
         if ( this.AV28snErro == "N" )
         {
            if ( ! (0==this.AV20OrdemServicoVendedorId) && (""==this.AV21OrdemServicoVendedorNome) )
            {
               this.AV28snErro =  "S"  ;
               this.addMessage("Não foi encontrado vendedor com o código informado");
               gx.fn.usrSetFocus("vORDEMSERVICOVENDEDORID") ;
            }
            else
            {
               if ( ! (0==this.AV22ProfissionalId) && (""==this.AV23ProfissionalNome) )
               {
                  this.AV28snErro =  "S"  ;
                  this.addMessage("Não foi encontrado profissional com o código informado");
                  gx.fn.usrSetFocus("vPROFISSIONALID") ;
               }
               else
               {
                  if ( ! (0==this.AV7FilialId) && (""==this.AV8FilialNome) )
                  {
                     this.addMessage("Não foi encontrada filial com o código informado");
                     gx.fn.usrSetFocus("vFILIALID") ;
                  }
               }
            }
         }
      }
   };
   this.e232ct1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{ctrl:'vLISTACARACID'},{av:'gx.fn.getCtrlProperty("LBLLISTACARAC","Visible")',ctrl:'LBLLISTACARAC',prop:'Visible'}]);
   };
   this.e132ct2_client=function()
   {
      this.executeServerEvent("'FILTROS'", true, null, false, false);
   };
   this.e142ct2_client=function()
   {
      this.executeServerEvent("VORDEMSERVICOVENDEDORID.ISVALID", true, null, false, true);
   };
   this.e152ct2_client=function()
   {
      this.executeServerEvent("VPROFISSIONALID.ISVALID", true, null, false, true);
   };
   this.e162ct2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e172ct2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e182ct2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e192ct2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e202ct2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e212ct2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e242ct2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,19,22,25,27,28,31,33,36,38,40,43,45,48,50,52,55,57,60,62,63,66,68,69,72,74,75,77,80,82,84,87,89,90,91,92,93,96,98,106,109,111,114,116,119,121,124,126,129,131,136,137,138,139];
   this.GXLastCtrlId =139;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABTXT",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV32TxtTela",gxold:"OV32TxtTela",gxvar:"AV32TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TxtTela=Value},v2z:function(Value){gx.O.ZV32TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV32TxtTela)},c2v:function(){gx.O.AV32TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"IMAGE2",grid:0};
   GXValidFnc[14]={fld:"IMAGE3",grid:0};
   GXValidFnc[19]={fld:"TABLE",grid:0};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e162ct2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV7FilialId",gxold:"OV7FilialId",gxvar:"AV7FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV7FilialId,0)},c2v:function(){gx.O.AV7FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV8FilialNome",gxold:"OV8FilialNome",gxvar:"AV8FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8FilialNome=Value},v2z:function(Value){gx.O.ZV8FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV8FilialNome,0)},c2v:function(){gx.O.AV8FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINORDEMSERVICODATHORAEMISSAO",gxz:"ZV14MinOrdemServicoDatHoraEmissao",gxold:"OV14MinOrdemServicoDatHoraEmissao",gxvar:"AV14MinOrdemServicoDatHoraEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMINORDEMSERVICODATHORAEMISSAO",gx.O.AV14MinOrdemServicoDatHoraEmissao,0)},c2v:function(){gx.O.AV14MinOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMINORDEMSERVICODATHORAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAXORDEMSERVICODATHORAEMISSAO",gxz:"ZV12MaxOrdemServicoDatHoraEmissao",gxold:"OV12MaxOrdemServicoDatHoraEmissao",gxvar:"AV12MaxOrdemServicoDatHoraEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAXORDEMSERVICODATHORAEMISSAO",gx.O.AV12MaxOrdemServicoDatHoraEmissao,0)},c2v:function(){gx.O.AV12MaxOrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMAXORDEMSERVICODATHORAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   GXValidFnc[48]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMINORDEMSERVICODATAHORAFECHAMENTO",gxz:"ZV13MinOrdemServicoDataHoraFechamento",gxold:"OV13MinOrdemServicoDataHoraFechamento",gxvar:"AV13MinOrdemServicoDataHoraFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMINORDEMSERVICODATAHORAFECHAMENTO",gx.O.AV13MinOrdemServicoDataHoraFechamento,0)},c2v:function(){gx.O.AV13MinOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMINORDEMSERVICODATAHORAFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMAXORDEMSERVICODATAHORAFECHAMENTO",gxz:"ZV11MaxOrdemServicoDataHoraFechamento",gxold:"OV11MaxOrdemServicoDataHoraFechamento",gxvar:"AV11MaxOrdemServicoDataHoraFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMAXORDEMSERVICODATAHORAFECHAMENTO",gx.O.AV11MaxOrdemServicoDataHoraFechamento,0)},c2v:function(){gx.O.AV11MaxOrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMAXORDEMSERVICODATAHORAFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOTIPOID",gxz:"ZV19OrdemServicoTipoId",gxold:"OV19OrdemServicoTipoId",gxvar:"AV19OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV19OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOTIPOID",gx.O.AV19OrdemServicoTipoId)},c2v:function(){gx.O.AV19OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicovendedorid,isvalid:'e142ct2_client',rgrid:[],fld:"vORDEMSERVICOVENDEDORID",gxz:"ZV20OrdemServicoVendedorId",gxold:"OV20OrdemServicoVendedorId",gxvar:"AV20OrdemServicoVendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20OrdemServicoVendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20OrdemServicoVendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORID",gx.O.AV20OrdemServicoVendedorId,0)},c2v:function(){gx.O.AV20OrdemServicoVendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOVENDEDORNOME",gxz:"ZV21OrdemServicoVendedorNome",gxold:"OV21OrdemServicoVendedorNome",gxvar:"AV21OrdemServicoVendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21OrdemServicoVendedorNome=Value},v2z:function(Value){gx.O.ZV21OrdemServicoVendedorNome=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOVENDEDORNOME",gx.O.AV21OrdemServicoVendedorNome,0)},c2v:function(){gx.O.AV21OrdemServicoVendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:'e152ct2_client',rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV22ProfissionalId",gxold:"OV22ProfissionalId",gxvar:"AV22ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV22ProfissionalId,0)},c2v:function(){gx.O.AV22ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV23ProfissionalNome",gxold:"OV23ProfissionalNome",gxvar:"AV23ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ProfissionalNome=Value},v2z:function(Value){gx.O.ZV23ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV23ProfissionalNome,0)},c2v:function(){gx.O.AV23ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOSITUACAO",gxz:"ZV18OrdemServicoSituacao",gxold:"OV18OrdemServicoSituacao",gxvar:"AV18OrdemServicoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18OrdemServicoSituacao=Value},v2z:function(Value){gx.O.ZV18OrdemServicoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOSITUACAO",gx.O.AV18OrdemServicoSituacao)},c2v:function(){gx.O.AV18OrdemServicoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"svchar",len:3000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOIDLIST",gxz:"ZV27ServicoIdList",gxold:"OV27ServicoIdList",gxvar:"AV27ServicoIdList",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ServicoIdList=Value},v2z:function(Value){gx.O.ZV27ServicoIdList=Value},v2c:function(){gx.fn.setControlValue("vSERVICOIDLIST",gx.O.AV27ServicoIdList,0)},c2v:function(){gx.O.AV27ServicoIdList=this.val()},val:function(){return gx.fn.getControlValue("vSERVICOIDLIST")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"LBLLISTACARAC", format:0,grid:0};
   GXValidFnc[80]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e232ct1_client',rgrid:[],fld:"vORDER",gxz:"ZV50order",gxold:"OV50order",gxvar:"AV50order",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50order=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50order=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDER",gx.O.AV50order)},c2v:function(){gx.O.AV50order=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDER",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTACARACID",gxz:"ZV51ListaCaracId",gxold:"OV51ListaCaracId",gxvar:"AV51ListaCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV51ListaCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51ListaCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vLISTACARACID",gx.O.AV51ListaCaracId)},c2v:function(){gx.O.AV51ListaCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTACARACID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"LBLCARAC", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACVLRDATE",gxz:"ZV41CaracVlrDate",gxold:"OV41CaracVlrDate",gxvar:"AV41CaracVlrDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41CaracVlrDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41CaracVlrDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCARACVLRDATE",gx.O.AV41CaracVlrDate,0)},c2v:function(){gx.O.AV41CaracVlrDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCARACVLRDATE")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZZZZZZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACVLRNUM",gxz:"ZV42CaracVlrNum",gxold:"OV42CaracVlrNum",gxvar:"AV42CaracVlrNum",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42CaracVlrNum=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42CaracVlrNum=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCARACVLRNUM",gx.O.AV42CaracVlrNum,2,',')},c2v:function(){gx.O.AV42CaracVlrNum=this.val()},val:function(){return gx.fn.getDecimalValue("vCARACVLRNUM",'.',',')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACVLRVARCHAR",gxz:"ZV43CaracVlrVarChar",gxold:"OV43CaracVlrVarChar",gxvar:"AV43CaracVlrVarChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43CaracVlrVarChar=Value},v2z:function(Value){gx.O.ZV43CaracVlrVarChar=Value},v2c:function(){gx.fn.setControlValue("vCARACVLRVARCHAR",gx.O.AV43CaracVlrVarChar,0)},c2v:function(){gx.O.AV43CaracVlrVarChar=this.val()},val:function(){return gx.fn.getControlValue("vCARACVLRVARCHAR")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVALORCONTEUDO",gxz:"ZV45AparelhoCaracValorConteudo",gxold:"OV45AparelhoCaracValorConteudo",gxvar:"AV45AparelhoCaracValorConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45AparelhoCaracValorConteudo=Value},v2z:function(Value){gx.O.ZV45AparelhoCaracValorConteudo=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVALORCONTEUDO",gx.O.AV45AparelhoCaracValorConteudo,0)},c2v:function(){gx.O.AV45AparelhoCaracValorConteudo=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVALORCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCARACVLRCADASTRO",gxz:"ZV44CaracVlrCadastro",gxold:"OV44CaracVlrCadastro",gxvar:"AV44CaracVlrCadastro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV44CaracVlrCadastro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44CaracVlrCadastro=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCARACVLRCADASTRO",gx.O.AV44CaracVlrCadastro)},c2v:function(){gx.O.AV44CaracVlrCadastro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCARACVLRCADASTRO",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[98]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPORELATORIO",gxz:"ZV31TipoRelatorio",gxold:"OV31TipoRelatorio",gxvar:"AV31TipoRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31TipoRelatorio=Value},v2z:function(Value){gx.O.ZV31TipoRelatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("vTIPORELATORIO",gx.O.AV31TipoRelatorio,"S")},c2v:function(){gx.O.AV31TipoRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTIPORELATORIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[106]={fld:"TABLEVARS",grid:0};
   GXValidFnc[109]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACDESCRICAO",gxz:"ZV37PRIAparelhoCaracDescricao",gxold:"OV37PRIAparelhoCaracDescricao",gxvar:"AV37PRIAparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PRIAparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV37PRIAparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACDESCRICAO",gx.O.AV37PRIAparelhoCaracDescricao,0)},c2v:function(){gx.O.AV37PRIAparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRIAPARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Priaparelhocaracid,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACID",gxz:"ZV38PRIAparelhoCaracId",gxold:"OV38PRIAparelhoCaracId",gxvar:"AV38PRIAparelhoCaracId",ucs:[],op:[93],ip:[93,116],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PRIAparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PRIAparelhoCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACID",gx.O.AV38PRIAparelhoCaracId,0)},c2v:function(){gx.O.AV38PRIAparelhoCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIAPARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACORDENACAO",gxz:"ZV36PRIAparelhoCaracOrdenacao",gxold:"OV36PRIAparelhoCaracOrdenacao",gxvar:"AV36PRIAparelhoCaracOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PRIAparelhoCaracOrdenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36PRIAparelhoCaracOrdenacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACORDENACAO",gx.O.AV36PRIAparelhoCaracOrdenacao,0)},c2v:function(){gx.O.AV36PRIAparelhoCaracOrdenacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIAPARELHOCARACORDENACAO",'.')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACTIPO",gxz:"ZV40PriAparelhoCaracTipo",gxold:"OV40PriAparelhoCaracTipo",gxvar:"AV40PriAparelhoCaracTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40PriAparelhoCaracTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40PriAparelhoCaracTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACTIPO",gx.O.AV40PriAparelhoCaracTipo,0)},c2v:function(){gx.O.AV40PriAparelhoCaracTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIAPARELHOCARACTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIISCADASTRADO",gxz:"ZV39PRIisCadastrado",gxold:"OV39PRIisCadastrado",gxvar:"AV39PRIisCadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39PRIisCadastrado=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39PRIisCadastrado=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIISCADASTRADO",gx.O.AV39PRIisCadastrado,0)},c2v:function(){gx.O.AV39PRIisCadastrado=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIISCADASTRADO",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"BTNHELP",grid:0};
   GXValidFnc[137]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[138]={fld:"PROMPT_ORDEMSERVICOVENDEDORID",grid:0};
   GXValidFnc[139]={fld:"PROMPT_PROFISSIONALID",grid:0};
   this.AV32TxtTela = "" ;
   this.ZV32TxtTela = "" ;
   this.OV32TxtTela = "" ;
   this.AV7FilialId = 0 ;
   this.ZV7FilialId = 0 ;
   this.OV7FilialId = 0 ;
   this.AV8FilialNome = "" ;
   this.ZV8FilialNome = "" ;
   this.OV8FilialNome = "" ;
   this.AV14MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.ZV14MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.OV14MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV12MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.ZV12MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.OV12MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV13MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV13MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.OV13MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV11MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.ZV11MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.OV11MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV19OrdemServicoTipoId = 0 ;
   this.ZV19OrdemServicoTipoId = 0 ;
   this.OV19OrdemServicoTipoId = 0 ;
   this.AV20OrdemServicoVendedorId = 0 ;
   this.ZV20OrdemServicoVendedorId = 0 ;
   this.OV20OrdemServicoVendedorId = 0 ;
   this.AV21OrdemServicoVendedorNome = "" ;
   this.ZV21OrdemServicoVendedorNome = "" ;
   this.OV21OrdemServicoVendedorNome = "" ;
   this.AV22ProfissionalId = 0 ;
   this.ZV22ProfissionalId = 0 ;
   this.OV22ProfissionalId = 0 ;
   this.AV23ProfissionalNome = "" ;
   this.ZV23ProfissionalNome = "" ;
   this.OV23ProfissionalNome = "" ;
   this.AV18OrdemServicoSituacao = "" ;
   this.ZV18OrdemServicoSituacao = "" ;
   this.OV18OrdemServicoSituacao = "" ;
   this.AV27ServicoIdList = "" ;
   this.ZV27ServicoIdList = "" ;
   this.OV27ServicoIdList = "" ;
   this.AV50order = 0 ;
   this.ZV50order = 0 ;
   this.OV50order = 0 ;
   this.AV51ListaCaracId = 0 ;
   this.ZV51ListaCaracId = 0 ;
   this.OV51ListaCaracId = 0 ;
   this.AV41CaracVlrDate = gx.date.nullDate() ;
   this.ZV41CaracVlrDate = gx.date.nullDate() ;
   this.OV41CaracVlrDate = gx.date.nullDate() ;
   this.AV42CaracVlrNum = 0 ;
   this.ZV42CaracVlrNum = 0 ;
   this.OV42CaracVlrNum = 0 ;
   this.AV43CaracVlrVarChar = "" ;
   this.ZV43CaracVlrVarChar = "" ;
   this.OV43CaracVlrVarChar = "" ;
   this.AV45AparelhoCaracValorConteudo = "" ;
   this.ZV45AparelhoCaracValorConteudo = "" ;
   this.OV45AparelhoCaracValorConteudo = "" ;
   this.AV44CaracVlrCadastro = 0 ;
   this.ZV44CaracVlrCadastro = 0 ;
   this.OV44CaracVlrCadastro = 0 ;
   this.AV31TipoRelatorio = "" ;
   this.ZV31TipoRelatorio = "" ;
   this.OV31TipoRelatorio = "" ;
   this.AV37PRIAparelhoCaracDescricao = "" ;
   this.ZV37PRIAparelhoCaracDescricao = "" ;
   this.OV37PRIAparelhoCaracDescricao = "" ;
   this.AV38PRIAparelhoCaracId = 0 ;
   this.ZV38PRIAparelhoCaracId = 0 ;
   this.OV38PRIAparelhoCaracId = 0 ;
   this.AV36PRIAparelhoCaracOrdenacao = 0 ;
   this.ZV36PRIAparelhoCaracOrdenacao = 0 ;
   this.OV36PRIAparelhoCaracOrdenacao = 0 ;
   this.AV40PriAparelhoCaracTipo = 0 ;
   this.ZV40PriAparelhoCaracTipo = 0 ;
   this.OV40PriAparelhoCaracTipo = 0 ;
   this.AV39PRIisCadastrado = 0 ;
   this.ZV39PRIisCadastrado = 0 ;
   this.OV39PRIisCadastrado = 0 ;
   this.AV32TxtTela = "" ;
   this.AV7FilialId = 0 ;
   this.AV8FilialNome = "" ;
   this.AV14MinOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV12MaxOrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.AV13MinOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV11MaxOrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.AV19OrdemServicoTipoId = 0 ;
   this.AV20OrdemServicoVendedorId = 0 ;
   this.AV21OrdemServicoVendedorNome = "" ;
   this.AV22ProfissionalId = 0 ;
   this.AV23ProfissionalNome = "" ;
   this.AV18OrdemServicoSituacao = "" ;
   this.AV27ServicoIdList = "" ;
   this.AV50order = 0 ;
   this.AV51ListaCaracId = 0 ;
   this.AV41CaracVlrDate = gx.date.nullDate() ;
   this.AV42CaracVlrNum = 0 ;
   this.AV43CaracVlrVarChar = "" ;
   this.AV45AparelhoCaracValorConteudo = "" ;
   this.AV44CaracVlrCadastro = 0 ;
   this.AV31TipoRelatorio = "" ;
   this.AV37PRIAparelhoCaracDescricao = "" ;
   this.AV38PRIAparelhoCaracId = 0 ;
   this.AV36PRIAparelhoCaracOrdenacao = 0 ;
   this.AV40PriAparelhoCaracTipo = 0 ;
   this.AV39PRIisCadastrado = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1237VendedorId = 0 ;
   this.A1148VendedorNome = "" ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8828AparelhoCaracOrdenacao = 0 ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.AV28snErro = "" ;
   this.Events = {"e132ct2_client": ["'FILTROS'", true] ,"e142ct2_client": ["VORDEMSERVICOVENDEDORID.ISVALID", true] ,"e152ct2_client": ["VPROFISSIONALID.ISVALID", true] ,"e162ct2_client": ["VFILIALID.ISVALID", true] ,"e172ct2_client": ["ENTER", true] ,"e182ct2_client": ["'SALVARTXT'", true] ,"e192ct2_client": ["VTXTTELA.CLICK", true] ,"e202ct2_client": ["'EXCLUIRTXT'", true] ,"e212ct2_client": ["'FECHAR'", true] ,"e242ct2_client": ["CANCEL", true] ,"e232ct1_client": ["VORDER.ISVALID", false]};
   this.EvtParms["REFRESH"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV25SdtTxtTela',fld:'vSDTTXTTELA'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV50order',fld:'vORDER'},{av:'AV32TxtTela',fld:'vTXTTELA'}],[{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV58GXLvl116',fld:'vGXLVL116'},{av:'AV8FilialNome',fld:'vFILIALNOME'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV60GXV2',fld:'vGXV2'},{av:'AV26SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV56GXLvl96',fld:'vGXLVL96'},{av:'AV21OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'},{av:'AV57GXLvl106',fld:'vGXLVL106'},{av:'AV23ProfissionalNome',fld:'vPROFISSIONALNOME'},{ctrl:'vLISTACARACID'},{av:'gx.fn.getCtrlProperty("LBLLISTACARAC","Visible")',ctrl:'LBLLISTACARAC',prop:'Visible'},{av:'AV59GXV1',fld:'vGXV1'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV13MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV14MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV18OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV19OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV31TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'}]];
   this.EvtParms["'FILTROS'"] = [[{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV13MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV14MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV18OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV19OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV31TipoRelatorio',fld:'vTIPORELATORIO'}],[{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV17OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VORDEMSERVICOVENDEDORID.ISVALID"] = [[{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV56GXLvl96',fld:'vGXLVL96'},{av:'AV21OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'}]];
   this.EvtParms["VPROFISSIONALID.ISVALID"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'}],[{av:'AV57GXLvl106',fld:'vGXLVL106'},{av:'AV23ProfissionalNome',fld:'vPROFISSIONALNOME'}]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV58GXLvl116',fld:'vGXLVL116'},{av:'AV8FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV30SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV40PriAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'AV41CaracVlrDate',fld:'vCARACVLRDATE'},{av:'AV43CaracVlrVarChar',fld:'vCARACVLRVARCHAR'},{av:'AV42CaracVlrNum',fld:'vCARACVLRNUM'},{av:'AV44CaracVlrCadastro',fld:'vCARACVLRCADASTRO'},{av:'AV13MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV46minFechamentoDateTime',fld:'vMINFECHAMENTODATETIME'},{av:'AV47maxFechamentoDateTime',fld:'vMAXFECHAMENTODATETIME'},{av:'AV14MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV48minEmissaoDateTime',fld:'vMINEMISSAODATETIME'},{av:'AV49maxEmissaoDateTime',fld:'vMAXEMISSAODATETIME'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV18OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV19OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'},{av:'AV45AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV51ListaCaracId',fld:'vLISTACARACID'},{av:'AV31TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV50order',fld:'vORDER'},{av:'AV28snErro',fld:'vSNERRO'},{av:'AV21OrdemServicoVendedorNome',fld:'vORDEMSERVICOVENDEDORNOME'},{av:'AV23ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV8FilialNome',fld:'vFILIALNOME'}],[{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV28snErro',fld:'vSNERRO'},{av:'AV45AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV16NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV15nomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV46minFechamentoDateTime',fld:'vMINFECHAMENTODATETIME'},{av:'AV47maxFechamentoDateTime',fld:'vMAXFECHAMENTODATETIME'},{av:'AV48minEmissaoDateTime',fld:'vMINEMISSAODATETIME'},{av:'AV49maxEmissaoDateTime',fld:'vMAXEMISSAODATETIME'},{av:'AV24QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV17OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV13MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV14MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV18OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV19OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV31TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'}],[{av:'AV17OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV25SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV32TxtTela',fld:'vTXTTELA'},{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV59GXV1',fld:'vGXV1'},{av:'AV26SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV7FilialId',fld:'vFILIALID'},{av:'AV11MaxOrdemServicoDataHoraFechamento',fld:'vMAXORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV12MaxOrdemServicoDatHoraEmissao',fld:'vMAXORDEMSERVICODATHORAEMISSAO'},{av:'AV13MinOrdemServicoDataHoraFechamento',fld:'vMINORDEMSERVICODATAHORAFECHAMENTO'},{av:'AV14MinOrdemServicoDatHoraEmissao',fld:'vMINORDEMSERVICODATHORAEMISSAO'},{av:'AV18OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV19OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV20OrdemServicoVendedorId',fld:'vORDEMSERVICOVENDEDORID'},{av:'AV22ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV31TipoRelatorio',fld:'vTIPORELATORIO'},{av:'AV27ServicoIdList',fld:'vSERVICOIDLIST'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV5EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV32TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VORDER.ISVALID"] = [[{av:'AV50order',fld:'vORDER'}],[{ctrl:'vLISTACARACID'},{av:'gx.fn.getCtrlProperty("LBLLISTACARAC","Visible")',ctrl:'LBLLISTACARAC',prop:'Visible'}]];
   this.setPrompt("PROMPT_FILIALID", [27]);
   this.setPrompt("PROMPT_ORDEMSERVICOVENDEDORID", [62]);
   this.setPrompt("PROMPT_PROFISSIONALID", [68]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV35AparelhoCaracEmpresaId", "vAPARELHOCARACEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovimentacaoprodservos());
