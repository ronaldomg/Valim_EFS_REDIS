/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:54.0
*/
gx.evt.autoSkip = false;
gx.define('hentradaprovprodlote', false, function () {
   this.ServerClass =  "hentradaprovprodlote" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11EntradaProvEmpresaId=gx.fn.getControlValue("vENTRADAPROVEMPRESAID") ;
      this.AV64EntradaProvId=gx.fn.getIntegerValue("vENTRADAPROVID",'.') ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2919AtributoEsquemaUsuarioAlt=gx.fn.getControlValue("ATRIBUTOESQUEMAUSUARIOALT") ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.AV83ProdutoDescricaoResumidaAux=gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDAAUX") ;
      this.AV82NCMCodigo=gx.fn.getIntegerValue("vNCMCODIGO",'.') ;
      this.AV85EntradaProvItemCodigoBarrasParm=gx.fn.getIntegerValue("vENTRADAPROVITEMCODIGOBARRASPARM",'.') ;
      this.AV34EntradaProvItemQuantidade=gx.fn.getDecimalValue("vENTRADAPROVITEMQUANTIDADE",'.',',') ;
   };
   this.Validv_Entradaprovsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovitemloteprodid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVITEMLOTEPRODID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Loteprodutocombinacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEPRODUTOCOMBINACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovitemloteprodempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVITEMLOTEPRODEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("vSNVALOR","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE1","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE2","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE3","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE4","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE5","Visible", 0 );
      gx.fn.setCtrlProperty("DESC1","Visible", 0 );
      gx.fn.setCtrlProperty("DESC2","Visible", 0 );
      gx.fn.setCtrlProperty("DESC3","Visible", 0 );
      gx.fn.setCtrlProperty("DESC4","Visible", 0 );
      gx.fn.setCtrlProperty("DESC5","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE1","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE2","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE3","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE4","Visible", 0 );
      gx.fn.setCtrlProperty("vVISIBLE5","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vNULLCHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vNULLINT","Visible", 0 );
      gx.fn.setCtrlProperty("vTODAY","Visible", 0 );
      gx.fn.setCtrlProperty("vGRUPOSUB","Visible", 0 );
      gx.fn.setCtrlProperty("vFILIALID","Visible", 0 );
      gx.fn.setCtrlProperty("vESQUEMACODIGO","Visible", 0 );
      gx.fn.setCtrlProperty("vESQUEMAAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible", 0 );
      gx.fn.setCtrlProperty("vATRIBUTOESQUEMASNVENCIMENTO","Visible", 0 );
      gx.fn.setCtrlProperty("vLOTEPRODUTOVENCIMENTO","Visible", 0 );
      gx.fn.setCtrlProperty("vENTRADAPROVITEMLOTEPRODEMPID","Visible", 0 );
      this.AV80SNVenda =  "N"  ;
      gx.fn.setCtrlProperty("vSNVENDA","Visible", 0 );
   };
   this.s182_client=function()
   {
      if ( ! (""==this.AV47Visible1) )
      {
         if ( this.AV47Visible1 == "E" )
         {
            if ( (0==this.AV28Edit1) && this.AV54SnErro == "N" )
            {
               this.addMessage("Informe "+this.AV42Desc1);
               this.AV54SnErro =  "S"  ;
               gx.fn.usrSetFocus("vEDIT1") ;
            }
         }
         else
         {
            if ( this.AV47Visible1 == "C" )
            {
               if ( (0==this.AV23Combo1) && this.AV54SnErro == "N" )
               {
                  this.addMessage("Informe "+this.AV42Desc1);
                  this.AV54SnErro =  "S"  ;
                  gx.fn.usrSetFocus("vCOMBO1") ;
               }
            }
         }
      }
      if ( ! (""==this.AV48Visible2) )
      {
         if ( this.AV48Visible2 == "E" )
         {
            if ( (0==this.AV29Edit2) && this.AV54SnErro == "N" )
            {
               this.addMessage("Informe "+this.AV43Desc2);
               this.AV54SnErro =  "S"  ;
               gx.fn.usrSetFocus("vEDIT2") ;
            }
         }
         else
         {
            if ( this.AV48Visible2 == "C" )
            {
               if ( (0==this.AV24Combo2) && this.AV54SnErro == "N" )
               {
                  this.addMessage("Informe "+this.AV43Desc2);
                  this.AV54SnErro =  "S"  ;
                  gx.fn.usrSetFocus("vCOMBO2") ;
               }
            }
         }
      }
      if ( ! (""==this.AV49Visible3) )
      {
         if ( this.AV49Visible3 == "E" )
         {
            if ( (0==this.AV30Edit3) && this.AV54SnErro == "N" )
            {
               this.addMessage("Informe "+this.AV44Desc3);
               this.AV54SnErro =  "S"  ;
               gx.fn.usrSetFocus("vEDIT3") ;
            }
         }
         else
         {
            if ( this.AV49Visible3 == "C" )
            {
               if ( (0==this.AV25Combo3) && this.AV54SnErro == "N" )
               {
                  this.addMessage("Informe "+this.AV44Desc3);
                  this.AV54SnErro =  "S"  ;
                  gx.fn.usrSetFocus("vCOMBO3") ;
               }
            }
         }
      }
      if ( ! (""==this.AV50Visible4) )
      {
         if ( this.AV50Visible4 == "E" )
         {
            if ( (0==this.AV31Edit4) && this.AV54SnErro == "N" )
            {
               this.addMessage("Informe "+this.AV45Desc4);
               this.AV54SnErro =  "S"  ;
               gx.fn.usrSetFocus("vEDIT4") ;
            }
         }
         else
         {
            if ( this.AV50Visible4 == "C" )
            {
               if ( (0==this.AV26Combo4) && this.AV54SnErro == "N" )
               {
                  this.addMessage("Informe "+this.AV45Desc4);
                  this.AV54SnErro =  "S"  ;
                  gx.fn.usrSetFocus("vCOMBO4") ;
               }
            }
         }
      }
      if ( ! (""==this.AV51Visible5) )
      {
         if ( this.AV51Visible5 == "E" )
         {
            if ( (0==this.AV32Edit5) && this.AV54SnErro == "N" )
            {
               this.addMessage("Informe "+this.AV46Desc5);
               this.AV54SnErro =  "S"  ;
               gx.fn.usrSetFocus("vEDIT5") ;
            }
         }
         else
         {
            if ( this.AV51Visible5 == "C" )
            {
               if ( (0==this.AV27Combo5) && this.AV54SnErro == "N" )
               {
                  this.addMessage("Informe "+this.AV46Desc5);
                  this.AV54SnErro =  "S"  ;
                  gx.fn.usrSetFocus("vCOMBO5") ;
               }
            }
         }
      }
      if ( this.AV52AtributoEsquemaSnVencimento == "S" )
      {
         if ( (new gx.date.gxdate("").compare(this.AV41LoteProdutoVencimento)==0) && this.AV54SnErro == "N" )
         {
            this.addMessage("Informe o vencimento");
            this.AV54SnErro =  "S"  ;
            gx.fn.usrSetFocus("vLOTEPRODUTOVENCIMENTO") ;
         }
      }
   };
   this.e11v52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12v52_client=function()
   {
      this.executeServerEvent("'AVANCAR'", false, null, false, false);
   };
   this.e13v52_client=function()
   {
      this.executeServerEvent("'ADDPRODUTO'", true, null, false, false);
   };
   this.e14v52_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e18v52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e19v52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,35,38,40,41,43,45,48,50,51,52,53,61,64,66,69,71,73,75,77,80,81,83,84,86,87,89,90,92,93,96,98,101,102,103,104,107,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150];
   this.GXLastCtrlId =150;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",108,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hentradaprovprodlote",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(9912,109,"ENTRADAPROVITEMGRADESEQ","Seq","","EntradaProvItemGradeSeq","int",0,"px",4,4,"right",null,[],9912,"EntradaProvItemGradeSeq",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9916,110,"ENTRADAPROVITEMGRADEQUANTIDADE","Quantidade","","EntradaProvItemGradeQuantidade","decimal",0,"px",21,21,"right",null,[],9916,"EntradaProvItemGradeQuantidade",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9915,111,"ENTRADAPROVITEMGRADECOMBINACAO","Entrada Prov Item Grade Combinacao","","EntradaProvItemGradeCombinacao","char",0,"px",20,20,"left",null,[],9915,"EntradaProvItemGradeCombinacao",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclote1",112,"vDESCLOTE1","","","DescLote1","svchar",0,"px",15,15,"left",null,[],"Desclote1","DescLote1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclote2",113,"vDESCLOTE2","","","DescLote2","svchar",0,"px",15,15,"left",null,[],"Desclote2","DescLote2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclote3",114,"vDESCLOTE3","","","DescLote3","svchar",0,"px",15,15,"left",null,[],"Desclote3","DescLote3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclote4",115,"vDESCLOTE4","","","DescLote4","svchar",0,"px",15,15,"left",null,[],"Desclote4","DescLote4",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclote5",116,"vDESCLOTE5","","","DescLote5","svchar",0,"px",15,15,"left",null,[],"Desclote5","DescLote5",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TXTFORNEC", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECEDORID",gxz:"ZV14EntradaProvFornecedorId",gxold:"OV14EntradaProvFornecedorId",gxvar:"AV14EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECEDORID",gx.O.AV14EntradaProvFornecedorId,0)},c2v:function(){gx.O.AV14EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTCPFCNPJ", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFCNPJ",gxz:"ZV18EntradaProvCPFCNPJ",gxold:"OV18EntradaProvCPFCNPJ",gxvar:"AV18EntradaProvCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EntradaProvCPFCNPJ=Value},v2z:function(Value){gx.O.ZV18EntradaProvCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCPFCNPJ",gx.O.AV18EntradaProvCPFCNPJ,0)},c2v:function(){gx.O.AV18EntradaProvCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTRAZAO", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVFORNECRAZAO",gxz:"ZV16EntradaProvFornecRazao",gxold:"OV16EntradaProvFornecRazao",gxvar:"AV16EntradaProvFornecRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EntradaProvFornecRazao=Value},v2z:function(Value){gx.O.ZV16EntradaProvFornecRazao=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVFORNECRAZAO",gx.O.AV16EntradaProvFornecRazao,0)},c2v:function(){gx.O.AV16EntradaProvFornecRazao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVFORNECRAZAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTEL", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOATELEFONE",gxz:"ZV15PessoaTelefone",gxold:"OV15PessoaTelefone",gxvar:"AV15PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaTelefone=Value},v2z:function(Value){gx.O.ZV15PessoaTelefone=Value},v2c:function(){gx.fn.setControlValue("vPESSOATELEFONE",gx.O.AV15PessoaTelefone,0)},c2v:function(){gx.O.AV15PessoaTelefone=this.val()},val:function(){return gx.fn.getControlValue("vPESSOATELEFONE")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTITEM", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovsequencia,isvalid:null,rgrid:[this.Grid1Container],fld:"vENTRADAPROVSEQUENCIA",gxz:"ZV12EntradaProvSequencia",gxold:"OV12EntradaProvSequencia",gxvar:"AV12EntradaProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EntradaProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12EntradaProvSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSEQUENCIA",gx.O.AV12EntradaProvSequencia,0)},c2v:function(){gx.O.AV12EntradaProvSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXTSERIE", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV17EntradaProvSerie",gxold:"OV17EntradaProvSerie",gxvar:"AV17EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV17EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV17EntradaProvSerie,0)},c2v:function(){gx.O.AV17EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMCODIGOBARRAS",gxz:"ZV20EntradaProvItemCodigoBarras",gxold:"OV20EntradaProvItemCodigoBarras",gxvar:"AV20EntradaProvItemCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20EntradaProvItemCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVITEMCODIGOBARRAS",gx.O.AV20EntradaProvItemCodigoBarras,0)},c2v:function(){gx.O.AV20EntradaProvItemCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVITEMCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOENTRADATIPOITENS",gxz:"ZV88TransacaoEntradaTipoItens",gxold:"OV88TransacaoEntradaTipoItens",gxvar:"AV88TransacaoEntradaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV88TransacaoEntradaTipoItens=Value},v2z:function(Value){gx.O.ZV88TransacaoEntradaTipoItens=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOENTRADATIPOITENS",gx.O.AV88TransacaoEntradaTipoItens)},c2v:function(){gx.O.AV88TransacaoEntradaTipoItens=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADATIPOITENS")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TXTNONOTA", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV19EntradaProvNumeroDocumento",gxold:"OV19EntradaProvNumeroDocumento",gxvar:"AV19EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV19EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV19EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovitemloteprodid,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODID",gxz:"ZV21EntradaProvItemLoteProdId",gxold:"OV21EntradaProvItemLoteProdId",gxvar:"AV21EntradaProvItemLoteProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21EntradaProvItemLoteProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21EntradaProvItemLoteProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVITEMLOTEPRODID",gx.O.AV21EntradaProvItemLoteProdId,0)},c2v:function(){gx.O.AV21EntradaProvItemLoteProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVITEMLOTEPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[52]={fld:"ADDPRODUTO",grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODDESC",gxz:"ZV58EntradaProvItemLoteProdDesc",gxold:"OV58EntradaProvItemLoteProdDesc",gxvar:"AV58EntradaProvItemLoteProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58EntradaProvItemLoteProdDesc=Value},v2z:function(Value){gx.O.ZV58EntradaProvItemLoteProdDesc=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVITEMLOTEPRODDESC",gx.O.AV58EntradaProvItemLoteProdDesc,0)},c2v:function(){gx.O.AV58EntradaProvItemLoteProdDesc=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVITEMLOTEPRODDESC")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE3",grid:0};
   GXValidFnc[64]={fld:"TXTLOTE", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLE4",grid:0};
   GXValidFnc[69]={fld:"DESC1", format:0,grid:0};
   GXValidFnc[71]={fld:"DESC2", format:0,grid:0};
   GXValidFnc[73]={fld:"DESC3", format:0,grid:0};
   GXValidFnc[75]={fld:"DESC4", format:0,grid:0};
   GXValidFnc[77]={fld:"DESC5", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV28Edit1",gxold:"OV28Edit1",gxvar:"AV28Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Edit1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Edit1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT1",gx.O.AV28Edit1,0)},c2v:function(){gx.O.AV28Edit1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT1",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO1",gxz:"ZV23Combo1",gxold:"OV23Combo1",gxvar:"AV23Combo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Combo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Combo1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO1",gx.O.AV23Combo1)},c2v:function(){gx.O.AV23Combo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV29Edit2",gxold:"OV29Edit2",gxvar:"AV29Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Edit2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29Edit2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT2",gx.O.AV29Edit2,0)},c2v:function(){gx.O.AV29Edit2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT2",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO2",gxz:"ZV24Combo2",gxold:"OV24Combo2",gxvar:"AV24Combo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Combo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Combo2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO2",gx.O.AV24Combo2)},c2v:function(){gx.O.AV24Combo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV30Edit3",gxold:"OV30Edit3",gxvar:"AV30Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Edit3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Edit3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT3",gx.O.AV30Edit3,0)},c2v:function(){gx.O.AV30Edit3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT3",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO3",gxz:"ZV25Combo3",gxold:"OV25Combo3",gxvar:"AV25Combo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Combo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Combo3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO3",gx.O.AV25Combo3)},c2v:function(){gx.O.AV25Combo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV31Edit4",gxold:"OV31Edit4",gxvar:"AV31Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Edit4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Edit4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT4",gx.O.AV31Edit4,0)},c2v:function(){gx.O.AV31Edit4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT4",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO4",gxz:"ZV26Combo4",gxold:"OV26Combo4",gxvar:"AV26Combo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Combo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Combo4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO4",gx.O.AV26Combo4)},c2v:function(){gx.O.AV26Combo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV32Edit5",gxold:"OV32Edit5",gxvar:"AV32Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32Edit5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32Edit5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT5",gx.O.AV32Edit5,0)},c2v:function(){gx.O.AV32Edit5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT5",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO5",gxz:"ZV27Combo5",gxold:"OV27Combo5",gxvar:"AV27Combo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Combo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Combo5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO5",gx.O.AV27Combo5)},c2v:function(){gx.O.AV27Combo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TXTVENC", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLE5",grid:0};
   GXValidFnc[101]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOVENCIMENTO",gxz:"ZV41LoteProdutoVencimento",gxold:"OV41LoteProdutoVencimento",gxvar:"AV41LoteProdutoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOVENCIMENTO",gx.O.AV41LoteProdutoVencimento,0)},c2v:function(){gx.O.AV41LoteProdutoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV59QtdeChar",gxold:"OV59QtdeChar",gxvar:"AV59QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV59QtdeChar,0)},c2v:function(){gx.O.AV59QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5",gxz:"ZV46Desc5",gxold:"OV46Desc5",gxvar:"AV46Desc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Desc5=Value},v2z:function(Value){gx.O.ZV46Desc5=Value},v2c:function(){gx.fn.setControlValue("vDESC5",gx.O.AV46Desc5,0)},c2v:function(){gx.O.AV46Desc5=this.val()},val:function(){return gx.fn.getControlValue("vDESC5")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TABLE7",grid:0};
   GXValidFnc[107]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[109]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADESEQ",gxz:"Z9912EntradaProvItemGradeSeq",gxold:"O9912EntradaProvItemGradeSeq",gxvar:"A9912EntradaProvItemGradeSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9912EntradaProvItemGradeSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9912EntradaProvItemGradeSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMGRADESEQ",row || gx.fn.currentGridRowImpl(108),gx.O.A9912EntradaProvItemGradeSeq,0)},c2v:function(){gx.O.A9912EntradaProvItemGradeSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMGRADESEQ",row || gx.fn.currentGridRowImpl(108),'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADEQUANTIDADE",gxz:"Z9916EntradaProvItemGradeQuantidade",gxold:"O9916EntradaProvItemGradeQuantidade",gxvar:"A9916EntradaProvItemGradeQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9916EntradaProvItemGradeQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9916EntradaProvItemGradeQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMGRADEQUANTIDADE",row || gx.fn.currentGridRowImpl(108),gx.O.A9916EntradaProvItemGradeQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9916EntradaProvItemGradeQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMGRADEQUANTIDADE",row || gx.fn.currentGridRowImpl(108),'.',',')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMGRADECOMBINACAO",gxz:"Z9915EntradaProvItemGradeCombinacao",gxold:"O9915EntradaProvItemGradeCombinacao",gxvar:"A9915EntradaProvItemGradeCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9915EntradaProvItemGradeCombinacao=Value},v2z:function(Value){gx.O.Z9915EntradaProvItemGradeCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMGRADECOMBINACAO",row || gx.fn.currentGridRowImpl(108),gx.O.A9915EntradaProvItemGradeCombinacao,0)},c2v:function(){gx.O.A9915EntradaProvItemGradeCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMGRADECOMBINACAO",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE1",gxz:"ZV89DescLote1",gxold:"OV89DescLote1",gxvar:"AV89DescLote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV89DescLote1=Value},v2z:function(Value){gx.O.ZV89DescLote1=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLOTE1",row || gx.fn.currentGridRowImpl(108),gx.O.AV89DescLote1,0)},c2v:function(){gx.O.AV89DescLote1=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLOTE1",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE2",gxz:"ZV90DescLote2",gxold:"OV90DescLote2",gxvar:"AV90DescLote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV90DescLote2=Value},v2z:function(Value){gx.O.ZV90DescLote2=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLOTE2",row || gx.fn.currentGridRowImpl(108),gx.O.AV90DescLote2,0)},c2v:function(){gx.O.AV90DescLote2=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLOTE2",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE3",gxz:"ZV91DescLote3",gxold:"OV91DescLote3",gxvar:"AV91DescLote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV91DescLote3=Value},v2z:function(Value){gx.O.ZV91DescLote3=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLOTE3",row || gx.fn.currentGridRowImpl(108),gx.O.AV91DescLote3,0)},c2v:function(){gx.O.AV91DescLote3=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLOTE3",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE4",gxz:"ZV92DescLote4",gxold:"OV92DescLote4",gxvar:"AV92DescLote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV92DescLote4=Value},v2z:function(Value){gx.O.ZV92DescLote4=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLOTE4",row || gx.fn.currentGridRowImpl(108),gx.O.AV92DescLote4,0)},c2v:function(){gx.O.AV92DescLote4=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLOTE4",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:108,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE5",gxz:"ZV93DescLote5",gxold:"OV93DescLote5",gxvar:"AV93DescLote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV93DescLote5=Value},v2z:function(Value){gx.O.ZV93DescLote5=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLOTE5",row || gx.fn.currentGridRowImpl(108),gx.O.AV93DescLote5,0)},c2v:function(){gx.O.AV93DescLote5=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLOTE5",row || gx.fn.currentGridRowImpl(108))},nac:gx.falseFn};
   GXValidFnc[117]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[118]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4",gxz:"ZV45Desc4",gxold:"OV45Desc4",gxvar:"AV45Desc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Desc4=Value},v2z:function(Value){gx.O.ZV45Desc4=Value},v2c:function(){gx.fn.setControlValue("vDESC4",gx.O.AV45Desc4,0)},c2v:function(){gx.O.AV45Desc4=this.val()},val:function(){return gx.fn.getControlValue("vDESC4")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC3",gxz:"ZV44Desc3",gxold:"OV44Desc3",gxvar:"AV44Desc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Desc3=Value},v2z:function(Value){gx.O.ZV44Desc3=Value},v2c:function(){gx.fn.setControlValue("vDESC3",gx.O.AV44Desc3,0)},c2v:function(){gx.O.AV44Desc3=this.val()},val:function(){return gx.fn.getControlValue("vDESC3")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC2",gxz:"ZV43Desc2",gxold:"OV43Desc2",gxvar:"AV43Desc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Desc2=Value},v2z:function(Value){gx.O.ZV43Desc2=Value},v2c:function(){gx.fn.setControlValue("vDESC2",gx.O.AV43Desc2,0)},c2v:function(){gx.O.AV43Desc2=this.val()},val:function(){return gx.fn.getControlValue("vDESC2")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC1",gxz:"ZV42Desc1",gxold:"OV42Desc1",gxvar:"AV42Desc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Desc1=Value},v2z:function(Value){gx.O.ZV42Desc1=Value},v2c:function(){gx.fn.setControlValue("vDESC1",gx.O.AV42Desc1,0)},c2v:function(){gx.O.AV42Desc1=this.val()},val:function(){return gx.fn.getControlValue("vDESC1")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Loteprodutocombinacao,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV60LoteProdutoCombinacao",gxold:"OV60LoteProdutoCombinacao",gxvar:"AV60LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV60LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV60LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV60LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV13FilialId",gxold:"OV13FilialId",gxvar:"AV13FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV13FilialId,0)},c2v:function(){gx.O.AV13FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV70GrupoSub",gxold:"OV70GrupoSub",gxvar:"AV70GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV70GrupoSub,0)},c2v:function(){gx.O.AV70GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNULLINT",gxz:"ZV71NullInt",gxold:"OV71NullInt",gxvar:"AV71NullInt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71NullInt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71NullInt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNULLINT",gx.O.AV71NullInt,0)},c2v:function(){gx.O.AV71NullInt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNULLINT",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATRIBUTOESQUEMASNVENCIMENTO",gxz:"ZV52AtributoEsquemaSnVencimento",gxold:"OV52AtributoEsquemaSnVencimento",gxvar:"AV52AtributoEsquemaSnVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52AtributoEsquemaSnVencimento=Value},v2z:function(Value){gx.O.ZV52AtributoEsquemaSnVencimento=Value},v2c:function(){gx.fn.setControlValue("vATRIBUTOESQUEMASNVENCIMENTO",gx.O.AV52AtributoEsquemaSnVencimento,0)},c2v:function(){gx.O.AV52AtributoEsquemaSnVencimento=this.val()},val:function(){return gx.fn.getControlValue("vATRIBUTOESQUEMASNVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovitemloteprodempid,isvalid:null,rgrid:[],fld:"vENTRADAPROVITEMLOTEPRODEMPID",gxz:"ZV40EntradaProvItemLoteProdEmpId",gxold:"OV40EntradaProvItemLoteProdEmpId",gxvar:"AV40EntradaProvItemLoteProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EntradaProvItemLoteProdEmpId=Value},v2z:function(Value){gx.O.ZV40EntradaProvItemLoteProdEmpId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVITEMLOTEPRODEMPID",gx.O.AV40EntradaProvItemLoteProdEmpId,0)},c2v:function(){gx.O.AV40EntradaProvItemLoteProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVITEMLOTEPRODEMPID")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV79ProdutoReferencia",gxold:"OV79ProdutoReferencia",gxvar:"AV79ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV79ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV79ProdutoReferencia,0)},c2v:function(){gx.O.AV79ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMAAUX",gxz:"ZV74EsquemaAux",gxold:"OV74EsquemaAux",gxvar:"AV74EsquemaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EsquemaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74EsquemaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMAAUX",gx.O.AV74EsquemaAux,0)},c2v:function(){gx.O.AV74EsquemaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALOR",gxz:"ZV66SnValor",gxold:"OV66SnValor",gxvar:"AV66SnValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66SnValor=Value},v2z:function(Value){gx.O.ZV66SnValor=Value},v2c:function(){gx.fn.setControlValue("vSNVALOR",gx.O.AV66SnValor,0)},c2v:function(){gx.O.AV66SnValor=this.val()},val:function(){return gx.fn.getControlValue("vSNVALOR")},nac:gx.falseFn};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE3",gxz:"ZV49Visible3",gxold:"OV49Visible3",gxvar:"AV49Visible3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Visible3=Value},v2z:function(Value){gx.O.ZV49Visible3=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE3",gx.O.AV49Visible3,0)},c2v:function(){gx.O.AV49Visible3=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE3")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE2",gxz:"ZV48Visible2",gxold:"OV48Visible2",gxvar:"AV48Visible2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Visible2=Value},v2z:function(Value){gx.O.ZV48Visible2=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE2",gx.O.AV48Visible2,0)},c2v:function(){gx.O.AV48Visible2=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE2")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE1",gxz:"ZV47Visible1",gxold:"OV47Visible1",gxvar:"AV47Visible1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47Visible1=Value},v2z:function(Value){gx.O.ZV47Visible1=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE1",gx.O.AV47Visible1,0)},c2v:function(){gx.O.AV47Visible1=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE1")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"JS", format:2,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE4",gxz:"ZV50Visible4",gxold:"OV50Visible4",gxvar:"AV50Visible4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Visible4=Value},v2z:function(Value){gx.O.ZV50Visible4=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE4",gx.O.AV50Visible4,0)},c2v:function(){gx.O.AV50Visible4=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE4")},nac:gx.falseFn};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE5",gxz:"ZV51Visible5",gxold:"OV51Visible5",gxvar:"AV51Visible5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Visible5=Value},v2z:function(Value){gx.O.ZV51Visible5=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE5",gx.O.AV51Visible5,0)},c2v:function(){gx.O.AV51Visible5=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE5")},nac:gx.falseFn};
   GXValidFnc[145]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV55EsquemaCodigo",gxold:"OV55EsquemaCodigo",gxvar:"AV55EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV55EsquemaCodigo,0)},c2v:function(){gx.O.AV55EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNULLCHAR",gxz:"ZV72NullChar",gxold:"OV72NullChar",gxvar:"AV72NullChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72NullChar=Value},v2z:function(Value){gx.O.ZV72NullChar=Value},v2c:function(){gx.fn.setControlValue("vNULLCHAR",gx.O.AV72NullChar,0)},c2v:function(){gx.O.AV72NullChar=this.val()},val:function(){return gx.fn.getControlValue("vNULLCHAR")},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOAUX",gxz:"ZV75ProdutoAux",gxold:"OV75ProdutoAux",gxvar:"AV75ProdutoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProdutoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75ProdutoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOAUX",gx.O.AV75ProdutoAux,0)},c2v:function(){gx.O.AV75ProdutoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOAUX",'.')},nac:gx.falseFn};
   GXValidFnc[148]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV78CodigoBarrasProdutoBarra",gxold:"OV78CodigoBarrasProdutoBarra",gxvar:"AV78CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV78CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV78CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUNIDADEID",gxz:"ZV96UnidadeId",gxold:"OV96UnidadeId",gxvar:"AV96UnidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96UnidadeId=Value},v2z:function(Value){gx.O.ZV96UnidadeId=Value},v2c:function(){gx.fn.setControlValue("vUNIDADEID",gx.O.AV96UnidadeId,0)},c2v:function(){gx.O.AV96UnidadeId=this.val()},val:function(){return gx.fn.getControlValue("vUNIDADEID")},nac:gx.falseFn};
   GXValidFnc[150]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV80SNVenda",gxold:"OV80SNVenda",gxvar:"AV80SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80SNVenda=Value},v2z:function(Value){gx.O.ZV80SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV80SNVenda,0)},c2v:function(){gx.O.AV80SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   this.AV14EntradaProvFornecedorId = 0 ;
   this.ZV14EntradaProvFornecedorId = 0 ;
   this.OV14EntradaProvFornecedorId = 0 ;
   this.AV18EntradaProvCPFCNPJ = "" ;
   this.ZV18EntradaProvCPFCNPJ = "" ;
   this.OV18EntradaProvCPFCNPJ = "" ;
   this.AV16EntradaProvFornecRazao = "" ;
   this.ZV16EntradaProvFornecRazao = "" ;
   this.OV16EntradaProvFornecRazao = "" ;
   this.AV15PessoaTelefone = "" ;
   this.ZV15PessoaTelefone = "" ;
   this.OV15PessoaTelefone = "" ;
   this.AV12EntradaProvSequencia = 0 ;
   this.ZV12EntradaProvSequencia = 0 ;
   this.OV12EntradaProvSequencia = 0 ;
   this.AV17EntradaProvSerie = "" ;
   this.ZV17EntradaProvSerie = "" ;
   this.OV17EntradaProvSerie = "" ;
   this.AV20EntradaProvItemCodigoBarras = 0 ;
   this.ZV20EntradaProvItemCodigoBarras = 0 ;
   this.OV20EntradaProvItemCodigoBarras = 0 ;
   this.AV88TransacaoEntradaTipoItens = "" ;
   this.ZV88TransacaoEntradaTipoItens = "" ;
   this.OV88TransacaoEntradaTipoItens = "" ;
   this.AV19EntradaProvNumeroDocumento = 0 ;
   this.ZV19EntradaProvNumeroDocumento = 0 ;
   this.OV19EntradaProvNumeroDocumento = 0 ;
   this.AV21EntradaProvItemLoteProdId = 0 ;
   this.ZV21EntradaProvItemLoteProdId = 0 ;
   this.OV21EntradaProvItemLoteProdId = 0 ;
   this.AV58EntradaProvItemLoteProdDesc = "" ;
   this.ZV58EntradaProvItemLoteProdDesc = "" ;
   this.OV58EntradaProvItemLoteProdDesc = "" ;
   this.AV28Edit1 = 0 ;
   this.ZV28Edit1 = 0 ;
   this.OV28Edit1 = 0 ;
   this.AV23Combo1 = 0 ;
   this.ZV23Combo1 = 0 ;
   this.OV23Combo1 = 0 ;
   this.AV29Edit2 = 0 ;
   this.ZV29Edit2 = 0 ;
   this.OV29Edit2 = 0 ;
   this.AV24Combo2 = 0 ;
   this.ZV24Combo2 = 0 ;
   this.OV24Combo2 = 0 ;
   this.AV30Edit3 = 0 ;
   this.ZV30Edit3 = 0 ;
   this.OV30Edit3 = 0 ;
   this.AV25Combo3 = 0 ;
   this.ZV25Combo3 = 0 ;
   this.OV25Combo3 = 0 ;
   this.AV31Edit4 = 0 ;
   this.ZV31Edit4 = 0 ;
   this.OV31Edit4 = 0 ;
   this.AV26Combo4 = 0 ;
   this.ZV26Combo4 = 0 ;
   this.OV26Combo4 = 0 ;
   this.AV32Edit5 = 0 ;
   this.ZV32Edit5 = 0 ;
   this.OV32Edit5 = 0 ;
   this.AV27Combo5 = 0 ;
   this.ZV27Combo5 = 0 ;
   this.OV27Combo5 = 0 ;
   this.AV41LoteProdutoVencimento = gx.date.nullDate() ;
   this.ZV41LoteProdutoVencimento = gx.date.nullDate() ;
   this.OV41LoteProdutoVencimento = gx.date.nullDate() ;
   this.AV59QtdeChar = 0 ;
   this.ZV59QtdeChar = 0 ;
   this.OV59QtdeChar = 0 ;
   this.AV46Desc5 = "" ;
   this.ZV46Desc5 = "" ;
   this.OV46Desc5 = "" ;
   this.Z9912EntradaProvItemGradeSeq = 0 ;
   this.O9912EntradaProvItemGradeSeq = 0 ;
   this.Z9916EntradaProvItemGradeQuantidade = 0 ;
   this.O9916EntradaProvItemGradeQuantidade = 0 ;
   this.Z9915EntradaProvItemGradeCombinacao = "" ;
   this.O9915EntradaProvItemGradeCombinacao = "" ;
   this.ZV89DescLote1 = "" ;
   this.OV89DescLote1 = "" ;
   this.ZV90DescLote2 = "" ;
   this.OV90DescLote2 = "" ;
   this.ZV91DescLote3 = "" ;
   this.OV91DescLote3 = "" ;
   this.ZV92DescLote4 = "" ;
   this.OV92DescLote4 = "" ;
   this.ZV93DescLote5 = "" ;
   this.OV93DescLote5 = "" ;
   this.AV45Desc4 = "" ;
   this.ZV45Desc4 = "" ;
   this.OV45Desc4 = "" ;
   this.AV44Desc3 = "" ;
   this.ZV44Desc3 = "" ;
   this.OV44Desc3 = "" ;
   this.AV43Desc2 = "" ;
   this.ZV43Desc2 = "" ;
   this.OV43Desc2 = "" ;
   this.AV42Desc1 = "" ;
   this.ZV42Desc1 = "" ;
   this.OV42Desc1 = "" ;
   this.AV60LoteProdutoCombinacao = "" ;
   this.ZV60LoteProdutoCombinacao = "" ;
   this.OV60LoteProdutoCombinacao = "" ;
   this.AV13FilialId = 0 ;
   this.ZV13FilialId = 0 ;
   this.OV13FilialId = 0 ;
   this.AV70GrupoSub = 0 ;
   this.ZV70GrupoSub = 0 ;
   this.OV70GrupoSub = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV71NullInt = 0 ;
   this.ZV71NullInt = 0 ;
   this.OV71NullInt = 0 ;
   this.AV52AtributoEsquemaSnVencimento = "" ;
   this.ZV52AtributoEsquemaSnVencimento = "" ;
   this.OV52AtributoEsquemaSnVencimento = "" ;
   this.AV40EntradaProvItemLoteProdEmpId = "" ;
   this.ZV40EntradaProvItemLoteProdEmpId = "" ;
   this.OV40EntradaProvItemLoteProdEmpId = "" ;
   this.AV79ProdutoReferencia = "" ;
   this.ZV79ProdutoReferencia = "" ;
   this.OV79ProdutoReferencia = "" ;
   this.AV74EsquemaAux = 0 ;
   this.ZV74EsquemaAux = 0 ;
   this.OV74EsquemaAux = 0 ;
   this.AV66SnValor = "" ;
   this.ZV66SnValor = "" ;
   this.OV66SnValor = "" ;
   this.AV49Visible3 = "" ;
   this.ZV49Visible3 = "" ;
   this.OV49Visible3 = "" ;
   this.AV48Visible2 = "" ;
   this.ZV48Visible2 = "" ;
   this.OV48Visible2 = "" ;
   this.AV47Visible1 = "" ;
   this.ZV47Visible1 = "" ;
   this.OV47Visible1 = "" ;
   this.AV50Visible4 = "" ;
   this.ZV50Visible4 = "" ;
   this.OV50Visible4 = "" ;
   this.AV51Visible5 = "" ;
   this.ZV51Visible5 = "" ;
   this.OV51Visible5 = "" ;
   this.AV55EsquemaCodigo = 0 ;
   this.ZV55EsquemaCodigo = 0 ;
   this.OV55EsquemaCodigo = 0 ;
   this.AV72NullChar = "" ;
   this.ZV72NullChar = "" ;
   this.OV72NullChar = "" ;
   this.AV75ProdutoAux = 0 ;
   this.ZV75ProdutoAux = 0 ;
   this.OV75ProdutoAux = 0 ;
   this.AV78CodigoBarrasProdutoBarra = 0 ;
   this.ZV78CodigoBarrasProdutoBarra = 0 ;
   this.OV78CodigoBarrasProdutoBarra = 0 ;
   this.AV96UnidadeId = "" ;
   this.ZV96UnidadeId = "" ;
   this.OV96UnidadeId = "" ;
   this.AV80SNVenda = "" ;
   this.ZV80SNVenda = "" ;
   this.OV80SNVenda = "" ;
   this.AV14EntradaProvFornecedorId = 0 ;
   this.AV18EntradaProvCPFCNPJ = "" ;
   this.AV16EntradaProvFornecRazao = "" ;
   this.AV15PessoaTelefone = "" ;
   this.AV12EntradaProvSequencia = 0 ;
   this.AV17EntradaProvSerie = "" ;
   this.AV20EntradaProvItemCodigoBarras = 0 ;
   this.AV88TransacaoEntradaTipoItens = "" ;
   this.AV19EntradaProvNumeroDocumento = 0 ;
   this.AV21EntradaProvItemLoteProdId = 0 ;
   this.AV58EntradaProvItemLoteProdDesc = "" ;
   this.AV28Edit1 = 0 ;
   this.AV23Combo1 = 0 ;
   this.AV29Edit2 = 0 ;
   this.AV24Combo2 = 0 ;
   this.AV30Edit3 = 0 ;
   this.AV25Combo3 = 0 ;
   this.AV31Edit4 = 0 ;
   this.AV26Combo4 = 0 ;
   this.AV32Edit5 = 0 ;
   this.AV27Combo5 = 0 ;
   this.AV41LoteProdutoVencimento = gx.date.nullDate() ;
   this.AV59QtdeChar = 0 ;
   this.AV46Desc5 = "" ;
   this.AV45Desc4 = "" ;
   this.AV44Desc3 = "" ;
   this.AV43Desc2 = "" ;
   this.AV42Desc1 = "" ;
   this.AV60LoteProdutoCombinacao = "" ;
   this.AV13FilialId = 0 ;
   this.AV70GrupoSub = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV71NullInt = 0 ;
   this.AV52AtributoEsquemaSnVencimento = "" ;
   this.AV40EntradaProvItemLoteProdEmpId = "" ;
   this.AV79ProdutoReferencia = "" ;
   this.AV74EsquemaAux = 0 ;
   this.AV66SnValor = "" ;
   this.AV49Visible3 = "" ;
   this.AV48Visible2 = "" ;
   this.AV47Visible1 = "" ;
   this.AV50Visible4 = "" ;
   this.AV51Visible5 = "" ;
   this.AV55EsquemaCodigo = 0 ;
   this.AV72NullChar = "" ;
   this.AV75ProdutoAux = 0 ;
   this.AV78CodigoBarrasProdutoBarra = 0 ;
   this.AV96UnidadeId = "" ;
   this.AV80SNVenda = "" ;
   this.AV11EntradaProvEmpresaId = "" ;
   this.AV64EntradaProvId = 0 ;
   this.AV83ProdutoDescricaoResumidaAux = "" ;
   this.AV82NCMCodigo = 0 ;
   this.AV85EntradaProvItemCodigoBarrasParm = 0 ;
   this.AV34EntradaProvItemQuantidade = 0 ;
   this.A5091EntradaProvSequencia = 0 ;
   this.A5014EntradaProvId = 0 ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A9912EntradaProvItemGradeSeq = 0 ;
   this.A9916EntradaProvItemGradeQuantidade = 0 ;
   this.A9915EntradaProvItemGradeCombinacao = "" ;
   this.AV89DescLote1 = "" ;
   this.AV90DescLote2 = "" ;
   this.AV91DescLote3 = "" ;
   this.AV92DescLote4 = "" ;
   this.AV93DescLote5 = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A1156FilialId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.A2960ProdutoDescricao = "" ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4483TransacaoEntradaTipoItens = "" ;
   this.A9914EntradaProvTransacaoEmpresaId = "" ;
   this.A9913EntradaProvTransacaoCodigo = "" ;
   this.AV54SnErro = "" ;
   this.Events = {"e11v52_client": ["'FECHAR'", true] ,"e12v52_client": ["'AVANCAR'", true] ,"e13v52_client": ["'ADDPRODUTO'", true] ,"e14v52_client": ["'CONFIRMAR'", true] ,"e18v52_client": ["ENTER", true] ,"e19v52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'AVANCAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV54SnErro',fld:'vSNERRO'},{av:'AV34EntradaProvItemQuantidade',fld:'vENTRADAPROVITEMQUANTIDADE',hsh:true},{av:'AV20EntradaProvItemCodigoBarras',fld:'vENTRADAPROVITEMCODIGOBARRAS'},{av:'AV60LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV84FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV13FilialId',fld:'vFILIALID',hsh:true},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'AV74EsquemaAux',fld:'vESQUEMAAUX'},{av:'AV75ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV41LoteProdutoVencimento',fld:'vLOTEPRODUTOVENCIMENTO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'AV28Edit1',fld:'vEDIT1'},{av:'AV66SnValor',fld:'vSNVALOR'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV30Edit3',fld:'vEDIT3'},{av:'AV31Edit4',fld:'vEDIT4'},{av:'AV32Edit5',fld:'vEDIT5'},{av:'AV23Combo1',fld:'vCOMBO1'},{av:'AV24Combo2',fld:'vCOMBO2'},{av:'AV25Combo3',fld:'vCOMBO3'},{av:'AV26Combo4',fld:'vCOMBO4'},{av:'AV27Combo5',fld:'vCOMBO5'}],[{av:'AV60LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV54SnErro',fld:'vSNERRO'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV105GXLvl160',fld:'vGXLVL160'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'DESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'DESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'DESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'DESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'DESC5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'AV47Visible1',fld:'vVISIBLE1'},{av:'AV48Visible2',fld:'vVISIBLE2'},{av:'AV49Visible3',fld:'vVISIBLE3'},{av:'AV50Visible4',fld:'vVISIBLE4'},{av:'AV51Visible5',fld:'vVISIBLE5'},{av:'gx.fn.getCtrlProperty("TXTVENC","Visible")',ctrl:'TXTVENC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOVENCIMENTO","Visible")',ctrl:'vLOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TXTLOTE","Visible")',ctrl:'TXTLOTE',prop:'Visible'},{av:'AV28Edit1',fld:'vEDIT1'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV30Edit3',fld:'vEDIT3'},{av:'AV31Edit4',fld:'vEDIT4'},{av:'AV32Edit5',fld:'vEDIT5'},{av:'AV23Combo1',fld:'vCOMBO1'},{av:'AV24Combo2',fld:'vCOMBO2'},{av:'AV25Combo3',fld:'vCOMBO3'},{av:'AV26Combo4',fld:'vCOMBO4'},{av:'AV27Combo5',fld:'vCOMBO5'},{av:'AV41LoteProdutoVencimento',fld:'vLOTEPRODUTOVENCIMENTO'},{av:'AV75ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV52AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'AV42Desc1',fld:'vDESC1'},{av:'AV62ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'AV43Desc2',fld:'vDESC2'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'AV44Desc3',fld:'vDESC3'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'AV45Desc4',fld:'vDESC4'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV46Desc5',fld:'vDESC5'},{av:'AV74EsquemaAux',fld:'vESQUEMAAUX'},{av:'AV66SnValor',fld:'vSNVALOR'},{av:'gx.fn.getCtrlProperty("vSNVALOR","Visible")',ctrl:'vSNVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE1","Visible")',ctrl:'vVISIBLE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE2","Visible")',ctrl:'vVISIBLE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE3","Visible")',ctrl:'vVISIBLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE4","Visible")',ctrl:'vVISIBLE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE5","Visible")',ctrl:'vVISIBLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'vDESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'vDESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'vDESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'vDESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'vDESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDECHAR","Visible")',ctrl:'vQTDECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNULLCHAR","Visible")',ctrl:'vNULLCHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNULLINT","Visible")',ctrl:'vNULLINT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTODAY","Visible")',ctrl:'vTODAY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vGRUPOSUB","Visible")',ctrl:'vGRUPOSUB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILIALID","Visible")',ctrl:'vFILIALID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Visible")',ctrl:'vESQUEMACODIGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vESQUEMAAUX","Visible")',ctrl:'vESQUEMAAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRODUTOAUX","Visible")',ctrl:'vPRODUTOAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTOESQUEMASNVENCIMENTO","Visible")',ctrl:'vATRIBUTOESQUEMASNVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMLOTEPRODEMPID","Visible")',ctrl:'vENTRADAPROVITEMLOTEPRODEMPID',prop:'Visible'},{av:'AV80SNVenda',fld:'vSNVENDA'},{av:'gx.fn.getCtrlProperty("vSNVENDA","Visible")',ctrl:'vSNVENDA',prop:'Visible'}]];
   this.EvtParms["'ADDPRODUTO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV83ProdutoDescricaoResumidaAux',fld:'vPRODUTODESCRICAORESUMIDAAUX',hsh:true},{av:'AV82NCMCodigo',fld:'vNCMCODIGO',hsh:true},{av:'AV13FilialId',fld:'vFILIALID',hsh:true},{av:'AV85EntradaProvItemCodigoBarrasParm',fld:'vENTRADAPROVITEMCODIGOBARRASPARM',hsh:true},{av:'AV96UnidadeId',fld:'vUNIDADEID'}],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'AV95SdtLote',fld:'vSDTLOTE'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV54SnErro',fld:'vSNERRO'},{av:'AV13FilialId',fld:'vFILIALID',hsh:true},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'AV81DataNula',fld:'vDATANULA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'AV47Visible1',fld:'vVISIBLE1'},{av:'AV28Edit1',fld:'vEDIT1'},{av:'AV23Combo1',fld:'vCOMBO1'},{av:'AV48Visible2',fld:'vVISIBLE2'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV24Combo2',fld:'vCOMBO2'},{av:'AV49Visible3',fld:'vVISIBLE3'},{av:'AV30Edit3',fld:'vEDIT3'},{av:'AV25Combo3',fld:'vCOMBO3'},{av:'AV50Visible4',fld:'vVISIBLE4'},{av:'AV31Edit4',fld:'vEDIT4'},{av:'AV26Combo4',fld:'vCOMBO4'},{av:'AV51Visible5',fld:'vVISIBLE5'},{av:'AV32Edit5',fld:'vEDIT5'},{av:'AV27Combo5',fld:'vCOMBO5'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV84FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'},{av:'AV20EntradaProvItemCodigoBarras',fld:'vENTRADAPROVITEMCODIGOBARRAS'},{av:'AV41LoteProdutoVencimento',fld:'vLOTEPRODUTOVENCIMENTO'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV74EsquemaAux',fld:'vESQUEMAAUX'},{av:'AV75ProdutoAux',fld:'vPRODUTOAUX'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2918AtributoEsquemaSnVencimento',fld:'ATRIBUTOESQUEMASNVENCIMENTO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV66SnValor',fld:'vSNVALOR'},{av:'AV60LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV42Desc1',fld:'vDESC1'},{av:'AV43Desc2',fld:'vDESC2'},{av:'AV44Desc3',fld:'vDESC3'},{av:'AV45Desc4',fld:'vDESC4'},{av:'AV46Desc5',fld:'vDESC5'},{av:'AV52AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'}],[{av:'AV53SnLote',fld:'vSNLOTE'},{av:'AV54SnErro',fld:'vSNERRO'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV105GXLvl160',fld:'vGXLVL160'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'},{av:'AV60LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV77EntradaId',fld:'vENTRADAID'},{av:'AV76EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV28Edit1',fld:'vEDIT1'},{av:'AV29Edit2',fld:'vEDIT2'},{av:'AV30Edit3',fld:'vEDIT3'},{av:'AV31Edit4',fld:'vEDIT4'},{av:'AV32Edit5',fld:'vEDIT5'},{av:'AV23Combo1',fld:'vCOMBO1'},{av:'AV24Combo2',fld:'vCOMBO2'},{av:'AV25Combo3',fld:'vCOMBO3'},{av:'AV26Combo4',fld:'vCOMBO4'},{av:'AV27Combo5',fld:'vCOMBO5'},{av:'AV41LoteProdutoVencimento',fld:'vLOTEPRODUTOVENCIMENTO'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'DESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'DESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'DESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'DESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'DESC5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'AV47Visible1',fld:'vVISIBLE1'},{av:'AV48Visible2',fld:'vVISIBLE2'},{av:'AV49Visible3',fld:'vVISIBLE3'},{av:'AV50Visible4',fld:'vVISIBLE4'},{av:'AV51Visible5',fld:'vVISIBLE5'},{av:'gx.fn.getCtrlProperty("TXTVENC","Visible")',ctrl:'TXTVENC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOVENCIMENTO","Visible")',ctrl:'vLOTEPRODUTOVENCIMENTO',prop:'Visible'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TXTLOTE","Visible")',ctrl:'TXTLOTE',prop:'Visible'},{av:'AV75ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV61ContAux',fld:'vCONTAUX'},{av:'AV52AtributoEsquemaSnVencimento',fld:'vATRIBUTOESQUEMASNVENCIMENTO'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'AV42Desc1',fld:'vDESC1'},{av:'AV62ValorAtributoCodigoAux',fld:'vVALORATRIBUTOCODIGOAUX'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'AV43Desc2',fld:'vDESC2'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'AV44Desc3',fld:'vDESC3'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'AV45Desc4',fld:'vDESC4'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV46Desc5',fld:'vDESC5'},{av:'AV74EsquemaAux',fld:'vESQUEMAAUX'},{av:'AV66SnValor',fld:'vSNVALOR'},{av:'gx.fn.getCtrlProperty("vSNVALOR","Visible")',ctrl:'vSNVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE1","Visible")',ctrl:'vVISIBLE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE2","Visible")',ctrl:'vVISIBLE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE3","Visible")',ctrl:'vVISIBLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE4","Visible")',ctrl:'vVISIBLE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE5","Visible")',ctrl:'vVISIBLE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'vDESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'vDESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'vDESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'vDESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'vDESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDECHAR","Visible")',ctrl:'vQTDECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNULLCHAR","Visible")',ctrl:'vNULLCHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNULLINT","Visible")',ctrl:'vNULLINT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTODAY","Visible")',ctrl:'vTODAY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vGRUPOSUB","Visible")',ctrl:'vGRUPOSUB',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILIALID","Visible")',ctrl:'vFILIALID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vESQUEMACODIGO","Visible")',ctrl:'vESQUEMACODIGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vESQUEMAAUX","Visible")',ctrl:'vESQUEMAAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPRODUTOAUX","Visible")',ctrl:'vPRODUTOAUX',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTEPRODUTOCOMBINACAO","Visible")',ctrl:'vLOTEPRODUTOCOMBINACAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATRIBUTOESQUEMASNVENCIMENTO","Visible")',ctrl:'vATRIBUTOESQUEMASNVENCIMENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vENTRADAPROVITEMLOTEPRODEMPID","Visible")',ctrl:'vENTRADAPROVITEMLOTEPRODEMPID',prop:'Visible'},{av:'AV80SNVenda',fld:'vSNVENDA'},{av:'gx.fn.getCtrlProperty("vSNVENDA","Visible")',ctrl:'vSNVENDA',prop:'Visible'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Title")',ctrl:'vDESCLOTE1',prop:'Title'},{av:'AV89DescLote1',fld:'vDESCLOTE1'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Title")',ctrl:'vDESCLOTE2',prop:'Title'},{av:'AV90DescLote2',fld:'vDESCLOTE2'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Title")',ctrl:'vDESCLOTE3',prop:'Title'},{av:'AV91DescLote3',fld:'vDESCLOTE3'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Title")',ctrl:'vDESCLOTE4',prop:'Title'},{av:'AV92DescLote4',fld:'vDESCLOTE4'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Title")',ctrl:'vDESCLOTE5',prop:'Title'},{av:'AV93DescLote5',fld:'vDESCLOTE5'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV11EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV64EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV12EntradaProvSequencia',fld:'vENTRADAPROVSEQUENCIA',hsh:true},{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A9915EntradaProvItemGradeCombinacao',fld:'ENTRADAPROVITEMGRADECOMBINACAO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV88TransacaoEntradaTipoItens',fld:'vTRANSACAOENTRADATIPOITENS'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV40EntradaProvItemLoteProdEmpId',fld:'vENTRADAPROVITEMLOTEPRODEMPID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'}],[{av:'gx.fn.getCtrlProperty("vDESCLOTE1","Visible")',ctrl:'vDESCLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE2","Visible")',ctrl:'vDESCLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE3","Visible")',ctrl:'vDESCLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE4","Visible")',ctrl:'vDESCLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDESCLOTE5","Visible")',ctrl:'vDESCLOTE5',prop:'Visible'},{av:'AV55EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV63Cont',fld:'vCONT'},{av:'gx.fn.getCtrlProperty("TABLE3","Visible")',ctrl:'TABLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE7","Visible")',ctrl:'TABLE7',prop:'Visible'},{av:'AV21EntradaProvItemLoteProdId',fld:'vENTRADAPROVITEMLOTEPRODID'},{av:'AV58EntradaProvItemLoteProdDesc',fld:'vENTRADAPROVITEMLOTEPRODDESC'}]];
   this.setPrompt("IMGPROMPT", [50,124,124,124,122,136,40]);
   this.setVCMap("AV11EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV64EntradaProvId", "vENTRADAPROVID", 0, "int");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2919AtributoEsquemaUsuarioAlt", "ATRIBUTOESQUEMAUSUARIOALT", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("AV83ProdutoDescricaoResumidaAux", "vPRODUTODESCRICAORESUMIDAAUX", 0, "svchar");
   this.setVCMap("AV82NCMCodigo", "vNCMCODIGO", 0, "int");
   this.setVCMap("AV85EntradaProvItemCodigoBarrasParm", "vENTRADAPROVITEMCODIGOBARRASPARM", 0, "int");
   this.setVCMap("AV34EntradaProvItemQuantidade", "vENTRADAPROVITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("AV11EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV64EntradaProvId", "vENTRADAPROVID", 0, "int");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2919AtributoEsquemaUsuarioAlt", "ATRIBUTOESQUEMAUSUARIOALT", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV11EntradaProvEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV64EntradaProvId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[31]);
   Grid1Container.addRefreshingVar({rfrVar:"AV89DescLote1", rfrProp:"Visible", gxAttId:"Desclote1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV90DescLote2", rfrProp:"Visible", gxAttId:"Desclote2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV91DescLote3", rfrProp:"Visible", gxAttId:"Desclote3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV92DescLote4", rfrProp:"Visible", gxAttId:"Desclote4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV93DescLote5", rfrProp:"Visible", gxAttId:"Desclote5"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[41]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[50]);
   Grid1Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[128]);
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2919AtributoEsquemaUsuarioAlt"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[145]);
   Grid1Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid1Container.addRefreshingVar({rfrVar:"A9915EntradaProvItemGradeCombinacao", rfrProp:"Value", gxAttId:"9915"});
   Grid1Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hentradaprovprodlote());
