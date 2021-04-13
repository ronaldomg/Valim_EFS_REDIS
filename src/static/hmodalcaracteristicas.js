/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:20:52.90
*/
gx.evt.autoSkip = false;
gx.define('hmodalcaracteristicas', false, function () {
   this.ServerClass =  "hmodalcaracteristicas" ;
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
   };
   this.Validv_Ordemservicofaseempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOFASEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ordemservicofaseid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORDEMSERVICOFASEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vORDEMSERVICOFASEEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("DIV1","Caption", "<div id=\"dvd\" style=\"height:220px;overflow:auto;\">" );
      gx.fn.setCtrlProperty("DIV2","Caption", "</div>" );
      gx.fn.setCtrlProperty("CARACTERISTICA1","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA2","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA3","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA4","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA5","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA6","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA7","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA8","Visible", 0 );
      gx.fn.setCtrlProperty("CARACTERISTICA9","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC1CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC1DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC1NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC1STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC2CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC2DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC2NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC2STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC3CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC3DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC3NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC3STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC4CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC4DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC4NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC4STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC5CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC5DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC5NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC5STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC6CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC6DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC6NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC6STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC7CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC7DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC7NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC7STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC8CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC8DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC8NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC8STRING","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC9CADASTRADO","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC9DATE","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC9NUMERIC","Visible", 0 );
      gx.fn.setCtrlProperty("vORDEMSERVICOAPARECARAC9STRING","Visible", 0 );
      if ( (""==this.AV67OrdemServicoApareCaracVlr1) )
      {
         this.AV34OrdemServicoApareCarac1Cadastrado =  "0"  ;
      }
      else
      {
         this.AV34OrdemServicoApareCarac1Cadastrado =  this.AV67OrdemServicoApareCaracVlr1  ;
      }
      this.AV33OrdemServicoApareCarac1Date =  gx.date.ctod( this.AV67OrdemServicoApareCaracVlr1, "DMY4")  ;
      this.AV32OrdemServicoApareCarac1Numeric = gx.num.trunc( gx.num.val( this.AV67OrdemServicoApareCaracVlr1) ,0) ;
      this.AV31OrdemServicoApareCarac1String =  this.AV67OrdemServicoApareCaracVlr1  ;
      this.AV42OrdemServicoApareCarac2Cadastrado =  this.AV68OrdemServicoApareCaracVlr2  ;
      this.AV37OrdemServicoApareCarac2Date =  gx.date.ctod( this.AV68OrdemServicoApareCaracVlr2, "DMY4")  ;
      this.AV35OrdemServicoApareCarac2Numeric = gx.num.trunc( gx.num.val( this.AV68OrdemServicoApareCaracVlr2) ,0) ;
      this.AV36OrdemServicoApareCarac2String =  this.AV68OrdemServicoApareCaracVlr2  ;
      this.AV38OrdemServicoApareCarac3Cadastrado =  this.AV69OrdemServicoApareCaracVlr3  ;
      this.AV41OrdemServicoApareCarac3Date =  gx.date.ctod( this.AV69OrdemServicoApareCaracVlr3, "DMY4")  ;
      this.AV39OrdemServicoApareCarac3Numeric = gx.num.trunc( gx.num.val( this.AV69OrdemServicoApareCaracVlr3) ,0) ;
      this.AV40OrdemServicoApareCarac3String =  this.AV69OrdemServicoApareCaracVlr3  ;
      this.AV46OrdemServicoApareCarac4Cadastrado =  this.AV70OrdemServicoApareCaracVlr4  ;
      this.AV45OrdemServicoApareCarac4Date =  gx.date.ctod( this.AV70OrdemServicoApareCaracVlr4, "DMY4")  ;
      this.AV43OrdemServicoApareCarac4Numeric = gx.num.trunc( gx.num.val( this.AV70OrdemServicoApareCaracVlr4) ,0) ;
      this.AV44OrdemServicoApareCarac4String =  this.AV70OrdemServicoApareCaracVlr4  ;
      this.AV50OrdemServicoApareCarac5Cadastrado =  this.AV71OrdemServicoApareCaracVlr5  ;
      this.AV49OrdemServicoApareCarac5Date =  gx.date.ctod( this.AV71OrdemServicoApareCaracVlr5, "DMY4")  ;
      this.AV47OrdemServicoApareCarac5Numeric = gx.num.trunc( gx.num.val( this.AV71OrdemServicoApareCaracVlr5) ,0) ;
      this.AV48OrdemServicoApareCarac5String =  this.AV71OrdemServicoApareCaracVlr5  ;
      this.AV54OrdemServicoApareCarac6Cadastrado =  this.AV72OrdemServicoApareCaracVlr6  ;
      this.AV53OrdemServicoApareCarac6Date =  gx.date.ctod( this.AV72OrdemServicoApareCaracVlr6, "DMY4")  ;
      this.AV51OrdemServicoApareCarac6Numeric = gx.num.trunc( gx.num.val( this.AV72OrdemServicoApareCaracVlr6) ,0) ;
      this.AV52OrdemServicoApareCarac6String =  this.AV72OrdemServicoApareCaracVlr6  ;
      this.AV58OrdemServicoApareCarac7Cadastrado =  this.AV73OrdemServicoApareCaracVlr7  ;
      this.AV57OrdemServicoApareCarac7Date =  gx.date.ctod( this.AV73OrdemServicoApareCaracVlr7, "DMY4")  ;
      this.AV55OrdemServicoApareCarac7Numeric = gx.num.trunc( gx.num.val( this.AV73OrdemServicoApareCaracVlr7) ,0) ;
      this.AV56OrdemServicoApareCarac7String =  this.AV73OrdemServicoApareCaracVlr7  ;
      this.AV62OrdemServicoApareCarac8Cadastrado =  this.AV74OrdemServicoApareCaracVlr8  ;
      this.AV61OrdemServicoApareCarac8Date =  gx.date.ctod( this.AV74OrdemServicoApareCaracVlr8, "DMY4")  ;
      this.AV59OrdemServicoApareCarac8Numeric = gx.num.trunc( gx.num.val( this.AV74OrdemServicoApareCaracVlr8) ,0) ;
      this.AV60OrdemServicoApareCarac8String =  this.AV74OrdemServicoApareCaracVlr8  ;
      this.AV66OrdemServicoApareCarac9Cadastrado =  this.AV75OrdemServicoApareCaracVlr9  ;
      this.AV65OrdemServicoApareCarac9Date =  gx.date.ctod( this.AV75OrdemServicoApareCaracVlr9, "DMY4")  ;
      this.AV63OrdemServicoApareCarac9Numeric = gx.num.trunc( gx.num.val( this.AV75OrdemServicoApareCaracVlr9) ,0) ;
      this.AV64OrdemServicoApareCarac9String =  this.AV75OrdemServicoApareCaracVlr9  ;
   };
   this.e111dj2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", true, null, false, false);
   };
   this.e121dj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131dj2_client=function()
   {
      this.executeServerEvent("VORDEMSERVICOFASEID.ISVALID", true, null, false, true);
   };
   this.e151dj2_client=function()
   {
      this.executeServerEvent("'REMOVEFASE'", true, arguments[0], false, false);
   };
   this.e171dj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e181dj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,18,19,22,24,25,26,27,30,32,33,34,35,38,40,41,42,43,46,48,49,50,51,53,56,58,59,60,61,64,66,67,68,69,72,74,75,76,77,80,82,83,84,85,86,89,92,95,98,100,101,103,105,106,107,108,109,117,118];
   this.GXLastCtrlId =118;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",104,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalcaracteristicas",[],false,1,false,true,0,true,false,false,"CollSDTOrdemServicoFase.SDTOrdemServicoFaseItem",0,"px","Novo registro",true,false,false,null,null,false,"AV176SDTOrdemServicoFase",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV12X",105,"CTLORDEMSERVICOFASEID","Cod.","","OrdemServicoFaseId","int",0,"px",2,2,"right",null,[],"GXV12X","GXV12X",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12Y",106,"CTLORDEMSERVICOFASEEMPRESAID","Código da Empresa da Fase","","OrdemServicoFaseEmpresaId","char",0,"px",10,10,"left",null,[],"GXV12Y","GXV12Y",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12Z",107,"CTLORDEMSERVICOFASEDESCRICAO","Descricao da Fase","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],"GXV12Z","GXV12Z",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Exclinhafase","vEXCLINHAFASE",108,0,"px",17,"px","e151dj2_client","","Exc.","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"CARACTERISTICA1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC1NUMERIC",gxz:"ZV32OrdemServicoApareCarac1Numeric",gxold:"OV32OrdemServicoApareCarac1Numeric",gxvar:"AV32OrdemServicoApareCarac1Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OrdemServicoApareCarac1Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32OrdemServicoApareCarac1Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC1NUMERIC",gx.O.AV32OrdemServicoApareCarac1Numeric,0)},c2v:function(){gx.O.AV32OrdemServicoApareCarac1Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC1NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC1STRING",gxz:"ZV31OrdemServicoApareCarac1String",gxold:"OV31OrdemServicoApareCarac1String",gxvar:"AV31OrdemServicoApareCarac1String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OrdemServicoApareCarac1String=Value},v2z:function(Value){gx.O.ZV31OrdemServicoApareCarac1String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC1STRING",gx.O.AV31OrdemServicoApareCarac1String,0)},c2v:function(){gx.O.AV31OrdemServicoApareCarac1String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC1STRING")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC1DATE",gxz:"ZV33OrdemServicoApareCarac1Date",gxold:"OV33OrdemServicoApareCarac1Date",gxvar:"AV33OrdemServicoApareCarac1Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33OrdemServicoApareCarac1Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33OrdemServicoApareCarac1Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC1DATE",gx.O.AV33OrdemServicoApareCarac1Date,0)},c2v:function(){gx.O.AV33OrdemServicoApareCarac1Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC1DATE")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC1CADASTRADO",gxz:"ZV34OrdemServicoApareCarac1Cadastrado",gxold:"OV34OrdemServicoApareCarac1Cadastrado",gxvar:"AV34OrdemServicoApareCarac1Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34OrdemServicoApareCarac1Cadastrado=Value},v2z:function(Value){gx.O.ZV34OrdemServicoApareCarac1Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC1CADASTRADO",gx.O.AV34OrdemServicoApareCarac1Cadastrado)},c2v:function(){gx.O.AV34OrdemServicoApareCarac1Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC1CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CARACTERISTICA2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC2NUMERIC",gxz:"ZV35OrdemServicoApareCarac2Numeric",gxold:"OV35OrdemServicoApareCarac2Numeric",gxvar:"AV35OrdemServicoApareCarac2Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35OrdemServicoApareCarac2Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35OrdemServicoApareCarac2Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC2NUMERIC",gx.O.AV35OrdemServicoApareCarac2Numeric,0)},c2v:function(){gx.O.AV35OrdemServicoApareCarac2Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC2NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC2STRING",gxz:"ZV36OrdemServicoApareCarac2String",gxold:"OV36OrdemServicoApareCarac2String",gxvar:"AV36OrdemServicoApareCarac2String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36OrdemServicoApareCarac2String=Value},v2z:function(Value){gx.O.ZV36OrdemServicoApareCarac2String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC2STRING",gx.O.AV36OrdemServicoApareCarac2String,0)},c2v:function(){gx.O.AV36OrdemServicoApareCarac2String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC2STRING")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC2DATE",gxz:"ZV37OrdemServicoApareCarac2Date",gxold:"OV37OrdemServicoApareCarac2Date",gxvar:"AV37OrdemServicoApareCarac2Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37OrdemServicoApareCarac2Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV37OrdemServicoApareCarac2Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC2DATE",gx.O.AV37OrdemServicoApareCarac2Date,0)},c2v:function(){gx.O.AV37OrdemServicoApareCarac2Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC2DATE")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC2CADASTRADO",gxz:"ZV42OrdemServicoApareCarac2Cadastrado",gxold:"OV42OrdemServicoApareCarac2Cadastrado",gxvar:"AV42OrdemServicoApareCarac2Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42OrdemServicoApareCarac2Cadastrado=Value},v2z:function(Value){gx.O.ZV42OrdemServicoApareCarac2Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC2CADASTRADO",gx.O.AV42OrdemServicoApareCarac2Cadastrado)},c2v:function(){gx.O.AV42OrdemServicoApareCarac2Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC2CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"CARACTERISTICA3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC3NUMERIC",gxz:"ZV39OrdemServicoApareCarac3Numeric",gxold:"OV39OrdemServicoApareCarac3Numeric",gxvar:"AV39OrdemServicoApareCarac3Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39OrdemServicoApareCarac3Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39OrdemServicoApareCarac3Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC3NUMERIC",gx.O.AV39OrdemServicoApareCarac3Numeric,0)},c2v:function(){gx.O.AV39OrdemServicoApareCarac3Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC3NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC3STRING",gxz:"ZV40OrdemServicoApareCarac3String",gxold:"OV40OrdemServicoApareCarac3String",gxvar:"AV40OrdemServicoApareCarac3String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40OrdemServicoApareCarac3String=Value},v2z:function(Value){gx.O.ZV40OrdemServicoApareCarac3String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC3STRING",gx.O.AV40OrdemServicoApareCarac3String,0)},c2v:function(){gx.O.AV40OrdemServicoApareCarac3String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC3STRING")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC3DATE",gxz:"ZV41OrdemServicoApareCarac3Date",gxold:"OV41OrdemServicoApareCarac3Date",gxvar:"AV41OrdemServicoApareCarac3Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41OrdemServicoApareCarac3Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV41OrdemServicoApareCarac3Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC3DATE",gx.O.AV41OrdemServicoApareCarac3Date,0)},c2v:function(){gx.O.AV41OrdemServicoApareCarac3Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC3DATE")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC3CADASTRADO",gxz:"ZV38OrdemServicoApareCarac3Cadastrado",gxold:"OV38OrdemServicoApareCarac3Cadastrado",gxvar:"AV38OrdemServicoApareCarac3Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38OrdemServicoApareCarac3Cadastrado=Value},v2z:function(Value){gx.O.ZV38OrdemServicoApareCarac3Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC3CADASTRADO",gx.O.AV38OrdemServicoApareCarac3Cadastrado)},c2v:function(){gx.O.AV38OrdemServicoApareCarac3Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC3CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"CARACTERISTICA4", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC4NUMERIC",gxz:"ZV43OrdemServicoApareCarac4Numeric",gxold:"OV43OrdemServicoApareCarac4Numeric",gxvar:"AV43OrdemServicoApareCarac4Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43OrdemServicoApareCarac4Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43OrdemServicoApareCarac4Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC4NUMERIC",gx.O.AV43OrdemServicoApareCarac4Numeric,0)},c2v:function(){gx.O.AV43OrdemServicoApareCarac4Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC4NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC4STRING",gxz:"ZV44OrdemServicoApareCarac4String",gxold:"OV44OrdemServicoApareCarac4String",gxvar:"AV44OrdemServicoApareCarac4String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44OrdemServicoApareCarac4String=Value},v2z:function(Value){gx.O.ZV44OrdemServicoApareCarac4String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC4STRING",gx.O.AV44OrdemServicoApareCarac4String,0)},c2v:function(){gx.O.AV44OrdemServicoApareCarac4String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC4STRING")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC4DATE",gxz:"ZV45OrdemServicoApareCarac4Date",gxold:"OV45OrdemServicoApareCarac4Date",gxvar:"AV45OrdemServicoApareCarac4Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45OrdemServicoApareCarac4Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45OrdemServicoApareCarac4Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC4DATE",gx.O.AV45OrdemServicoApareCarac4Date,0)},c2v:function(){gx.O.AV45OrdemServicoApareCarac4Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC4DATE")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC4CADASTRADO",gxz:"ZV46OrdemServicoApareCarac4Cadastrado",gxold:"OV46OrdemServicoApareCarac4Cadastrado",gxvar:"AV46OrdemServicoApareCarac4Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV46OrdemServicoApareCarac4Cadastrado=Value},v2z:function(Value){gx.O.ZV46OrdemServicoApareCarac4Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC4CADASTRADO",gx.O.AV46OrdemServicoApareCarac4Cadastrado)},c2v:function(){gx.O.AV46OrdemServicoApareCarac4Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC4CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"CARACTERISTICA5", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC5NUMERIC",gxz:"ZV47OrdemServicoApareCarac5Numeric",gxold:"OV47OrdemServicoApareCarac5Numeric",gxvar:"AV47OrdemServicoApareCarac5Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47OrdemServicoApareCarac5Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47OrdemServicoApareCarac5Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC5NUMERIC",gx.O.AV47OrdemServicoApareCarac5Numeric,0)},c2v:function(){gx.O.AV47OrdemServicoApareCarac5Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC5NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC5STRING",gxz:"ZV48OrdemServicoApareCarac5String",gxold:"OV48OrdemServicoApareCarac5String",gxvar:"AV48OrdemServicoApareCarac5String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48OrdemServicoApareCarac5String=Value},v2z:function(Value){gx.O.ZV48OrdemServicoApareCarac5String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC5STRING",gx.O.AV48OrdemServicoApareCarac5String,0)},c2v:function(){gx.O.AV48OrdemServicoApareCarac5String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC5STRING")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC5DATE",gxz:"ZV49OrdemServicoApareCarac5Date",gxold:"OV49OrdemServicoApareCarac5Date",gxvar:"AV49OrdemServicoApareCarac5Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49OrdemServicoApareCarac5Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV49OrdemServicoApareCarac5Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC5DATE",gx.O.AV49OrdemServicoApareCarac5Date,0)},c2v:function(){gx.O.AV49OrdemServicoApareCarac5Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC5DATE")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC5CADASTRADO",gxz:"ZV50OrdemServicoApareCarac5Cadastrado",gxold:"OV50OrdemServicoApareCarac5Cadastrado",gxvar:"AV50OrdemServicoApareCarac5Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50OrdemServicoApareCarac5Cadastrado=Value},v2z:function(Value){gx.O.ZV50OrdemServicoApareCarac5Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC5CADASTRADO",gx.O.AV50OrdemServicoApareCarac5Cadastrado)},c2v:function(){gx.O.AV50OrdemServicoApareCarac5Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC5CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE4",grid:0};
   GXValidFnc[56]={fld:"CARACTERISTICA6", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC6NUMERIC",gxz:"ZV51OrdemServicoApareCarac6Numeric",gxold:"OV51OrdemServicoApareCarac6Numeric",gxvar:"AV51OrdemServicoApareCarac6Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51OrdemServicoApareCarac6Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51OrdemServicoApareCarac6Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC6NUMERIC",gx.O.AV51OrdemServicoApareCarac6Numeric,0)},c2v:function(){gx.O.AV51OrdemServicoApareCarac6Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC6NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC6DATE",gxz:"ZV53OrdemServicoApareCarac6Date",gxold:"OV53OrdemServicoApareCarac6Date",gxvar:"AV53OrdemServicoApareCarac6Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53OrdemServicoApareCarac6Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV53OrdemServicoApareCarac6Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC6DATE",gx.O.AV53OrdemServicoApareCarac6Date,0)},c2v:function(){gx.O.AV53OrdemServicoApareCarac6Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC6DATE")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC6STRING",gxz:"ZV52OrdemServicoApareCarac6String",gxold:"OV52OrdemServicoApareCarac6String",gxvar:"AV52OrdemServicoApareCarac6String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52OrdemServicoApareCarac6String=Value},v2z:function(Value){gx.O.ZV52OrdemServicoApareCarac6String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC6STRING",gx.O.AV52OrdemServicoApareCarac6String,0)},c2v:function(){gx.O.AV52OrdemServicoApareCarac6String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC6STRING")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC6CADASTRADO",gxz:"ZV54OrdemServicoApareCarac6Cadastrado",gxold:"OV54OrdemServicoApareCarac6Cadastrado",gxvar:"AV54OrdemServicoApareCarac6Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV54OrdemServicoApareCarac6Cadastrado=Value},v2z:function(Value){gx.O.ZV54OrdemServicoApareCarac6Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC6CADASTRADO",gx.O.AV54OrdemServicoApareCarac6Cadastrado)},c2v:function(){gx.O.AV54OrdemServicoApareCarac6Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC6CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"CARACTERISTICA7", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC7NUMERIC",gxz:"ZV55OrdemServicoApareCarac7Numeric",gxold:"OV55OrdemServicoApareCarac7Numeric",gxvar:"AV55OrdemServicoApareCarac7Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55OrdemServicoApareCarac7Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55OrdemServicoApareCarac7Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC7NUMERIC",gx.O.AV55OrdemServicoApareCarac7Numeric,0)},c2v:function(){gx.O.AV55OrdemServicoApareCarac7Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC7NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC7DATE",gxz:"ZV57OrdemServicoApareCarac7Date",gxold:"OV57OrdemServicoApareCarac7Date",gxvar:"AV57OrdemServicoApareCarac7Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57OrdemServicoApareCarac7Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV57OrdemServicoApareCarac7Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC7DATE",gx.O.AV57OrdemServicoApareCarac7Date,0)},c2v:function(){gx.O.AV57OrdemServicoApareCarac7Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC7DATE")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC7STRING",gxz:"ZV56OrdemServicoApareCarac7String",gxold:"OV56OrdemServicoApareCarac7String",gxvar:"AV56OrdemServicoApareCarac7String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56OrdemServicoApareCarac7String=Value},v2z:function(Value){gx.O.ZV56OrdemServicoApareCarac7String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC7STRING",gx.O.AV56OrdemServicoApareCarac7String,0)},c2v:function(){gx.O.AV56OrdemServicoApareCarac7String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC7STRING")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC7CADASTRADO",gxz:"ZV58OrdemServicoApareCarac7Cadastrado",gxold:"OV58OrdemServicoApareCarac7Cadastrado",gxvar:"AV58OrdemServicoApareCarac7Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV58OrdemServicoApareCarac7Cadastrado=Value},v2z:function(Value){gx.O.ZV58OrdemServicoApareCarac7Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC7CADASTRADO",gx.O.AV58OrdemServicoApareCarac7Cadastrado)},c2v:function(){gx.O.AV58OrdemServicoApareCarac7Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC7CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"CARACTERISTICA8", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC8NUMERIC",gxz:"ZV59OrdemServicoApareCarac8Numeric",gxold:"OV59OrdemServicoApareCarac8Numeric",gxvar:"AV59OrdemServicoApareCarac8Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59OrdemServicoApareCarac8Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59OrdemServicoApareCarac8Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC8NUMERIC",gx.O.AV59OrdemServicoApareCarac8Numeric,0)},c2v:function(){gx.O.AV59OrdemServicoApareCarac8Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC8NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC8DATE",gxz:"ZV61OrdemServicoApareCarac8Date",gxold:"OV61OrdemServicoApareCarac8Date",gxvar:"AV61OrdemServicoApareCarac8Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61OrdemServicoApareCarac8Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV61OrdemServicoApareCarac8Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC8DATE",gx.O.AV61OrdemServicoApareCarac8Date,0)},c2v:function(){gx.O.AV61OrdemServicoApareCarac8Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC8DATE")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC8STRING",gxz:"ZV60OrdemServicoApareCarac8String",gxold:"OV60OrdemServicoApareCarac8String",gxvar:"AV60OrdemServicoApareCarac8String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60OrdemServicoApareCarac8String=Value},v2z:function(Value){gx.O.ZV60OrdemServicoApareCarac8String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC8STRING",gx.O.AV60OrdemServicoApareCarac8String,0)},c2v:function(){gx.O.AV60OrdemServicoApareCarac8String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC8STRING")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC8CADASTRADO",gxz:"ZV62OrdemServicoApareCarac8Cadastrado",gxold:"OV62OrdemServicoApareCarac8Cadastrado",gxvar:"AV62OrdemServicoApareCarac8Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62OrdemServicoApareCarac8Cadastrado=Value},v2z:function(Value){gx.O.ZV62OrdemServicoApareCarac8Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC8CADASTRADO",gx.O.AV62OrdemServicoApareCarac8Cadastrado)},c2v:function(){gx.O.AV62OrdemServicoApareCarac8Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC8CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"CARACTERISTICA9", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC9DATE",gxz:"ZV65OrdemServicoApareCarac9Date",gxold:"OV65OrdemServicoApareCarac9Date",gxvar:"AV65OrdemServicoApareCarac9Date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65OrdemServicoApareCarac9Date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV65OrdemServicoApareCarac9Date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC9DATE",gx.O.AV65OrdemServicoApareCarac9Date,0)},c2v:function(){gx.O.AV65OrdemServicoApareCarac9Date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC9DATE")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC9NUMERIC",gxz:"ZV63OrdemServicoApareCarac9Numeric",gxold:"OV63OrdemServicoApareCarac9Numeric",gxvar:"AV63OrdemServicoApareCarac9Numeric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63OrdemServicoApareCarac9Numeric=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63OrdemServicoApareCarac9Numeric=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC9NUMERIC",gx.O.AV63OrdemServicoApareCarac9Numeric,0)},c2v:function(){gx.O.AV63OrdemServicoApareCarac9Numeric=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOAPARECARAC9NUMERIC",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC9STRING",gxz:"ZV64OrdemServicoApareCarac9String",gxold:"OV64OrdemServicoApareCarac9String",gxvar:"AV64OrdemServicoApareCarac9String",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64OrdemServicoApareCarac9String=Value},v2z:function(Value){gx.O.ZV64OrdemServicoApareCarac9String=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOAPARECARAC9STRING",gx.O.AV64OrdemServicoApareCarac9String,0)},c2v:function(){gx.O.AV64OrdemServicoApareCarac9String=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC9STRING")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOAPARECARAC9CADASTRADO",gxz:"ZV66OrdemServicoApareCarac9Cadastrado",gxold:"OV66OrdemServicoApareCarac9Cadastrado",gxvar:"AV66OrdemServicoApareCarac9Cadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV66OrdemServicoApareCarac9Cadastrado=Value},v2z:function(Value){gx.O.ZV66OrdemServicoApareCarac9Cadastrado=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOAPARECARAC9CADASTRADO",gx.O.AV66OrdemServicoApareCarac9Cadastrado)},c2v:function(){gx.O.AV66OrdemServicoApareCarac9Cadastrado=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOAPARECARAC9CADASTRADO")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicofaseempresaid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEEMPRESAID",gxz:"ZV166OrdemServicoFaseEmpresaId",gxold:"OV166OrdemServicoFaseEmpresaId",gxvar:"AV166OrdemServicoFaseEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV166OrdemServicoFaseEmpresaId=Value},v2z:function(Value){gx.O.ZV166OrdemServicoFaseEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEEMPRESAID",gx.O.AV166OrdemServicoFaseEmpresaId,0)},c2v:function(){gx.O.AV166OrdemServicoFaseEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TABLE5",grid:0};
   GXValidFnc[92]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[95]={fld:"TABLE6",grid:0};
   GXValidFnc[98]={fld:"LBLFASE", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicofaseid,isvalid:'e131dj2_client',rgrid:[],fld:"vORDEMSERVICOFASEID",gxz:"ZV158OrdemServicoFaseId",gxold:"OV158OrdemServicoFaseId",gxvar:"AV158OrdemServicoFaseId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV158OrdemServicoFaseId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV158OrdemServicoFaseId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEID",gx.O.AV158OrdemServicoFaseId,0)},c2v:function(){gx.O.AV158OrdemServicoFaseId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOFASEID",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOFASEDESCRICAO",gxz:"ZV164OrdemServicoFaseDescricao",gxold:"OV164OrdemServicoFaseDescricao",gxvar:"AV164OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV164OrdemServicoFaseDescricao=Value},v2z:function(Value){gx.O.ZV164OrdemServicoFaseDescricao=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOFASEDESCRICAO",gx.O.AV164OrdemServicoFaseDescricao,0)},c2v:function(){gx.O.AV164OrdemServicoFaseDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOFASEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[105]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:104,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLORDEMSERVICOFASEID",gxz:"ZV182GXV12X",gxold:"OV182GXV12X",gxvar:"GXV12X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV182GXV12X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(104),gx.O.GXV12X,0)},c2v:function(){gx.O.GXV12X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLORDEMSERVICOFASEID",row || gx.fn.currentGridRowImpl(104),'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:104,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLORDEMSERVICOFASEEMPRESAID",gxz:"ZV183GXV12Y",gxold:"OV183GXV12Y",gxvar:"GXV12Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Y=Value},v2z:function(Value){gx.O.ZV183GXV12Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLORDEMSERVICOFASEEMPRESAID",row || gx.fn.currentGridRowImpl(104),gx.O.GXV12Y,0)},c2v:function(){gx.O.GXV12Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLORDEMSERVICOFASEEMPRESAID",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:104,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLORDEMSERVICOFASEDESCRICAO",gxz:"ZV184GXV12Z",gxold:"OV184GXV12Z",gxvar:"GXV12Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Z=Value},v2z:function(Value){gx.O.ZV184GXV12Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(104),gx.O.GXV12Z,0)},c2v:function(){gx.O.GXV12Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLORDEMSERVICOFASEDESCRICAO",row || gx.fn.currentGridRowImpl(104))},nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:104,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLINHAFASE",gxz:"ZV168ExcLinhaFase",gxold:"OV168ExcLinhaFase",gxvar:"AV168ExcLinhaFase",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV168ExcLinhaFase=Value},v2z:function(Value){gx.O.ZV168ExcLinhaFase=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCLINHAFASE",row || gx.fn.currentGridRowImpl(104),gx.O.AV168ExcLinhaFase,gx.O.AV186Exclinhafase_GXI)},c2v:function(){gx.O.AV186Exclinhafase_GXI=this.val_GXI();gx.O.AV168ExcLinhaFase=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCLINHAFASE",row || gx.fn.currentGridRowImpl(104))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCLINHAFASE_GXI",row || gx.fn.currentGridRowImpl(104))}, gxvar_GXI:'AV186Exclinhafase_GXI',nac:gx.falseFn};
   GXValidFnc[109]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[117]={fld:"JS", format:2,grid:0};
   GXValidFnc[118]={fld:"PROMPT_ORDEMSERVICOFASEID",grid:0};
   this.AV32OrdemServicoApareCarac1Numeric = 0 ;
   this.ZV32OrdemServicoApareCarac1Numeric = 0 ;
   this.OV32OrdemServicoApareCarac1Numeric = 0 ;
   this.AV31OrdemServicoApareCarac1String = "" ;
   this.ZV31OrdemServicoApareCarac1String = "" ;
   this.OV31OrdemServicoApareCarac1String = "" ;
   this.AV33OrdemServicoApareCarac1Date = gx.date.nullDate() ;
   this.ZV33OrdemServicoApareCarac1Date = gx.date.nullDate() ;
   this.OV33OrdemServicoApareCarac1Date = gx.date.nullDate() ;
   this.AV34OrdemServicoApareCarac1Cadastrado = "" ;
   this.ZV34OrdemServicoApareCarac1Cadastrado = "" ;
   this.OV34OrdemServicoApareCarac1Cadastrado = "" ;
   this.AV35OrdemServicoApareCarac2Numeric = 0 ;
   this.ZV35OrdemServicoApareCarac2Numeric = 0 ;
   this.OV35OrdemServicoApareCarac2Numeric = 0 ;
   this.AV36OrdemServicoApareCarac2String = "" ;
   this.ZV36OrdemServicoApareCarac2String = "" ;
   this.OV36OrdemServicoApareCarac2String = "" ;
   this.AV37OrdemServicoApareCarac2Date = gx.date.nullDate() ;
   this.ZV37OrdemServicoApareCarac2Date = gx.date.nullDate() ;
   this.OV37OrdemServicoApareCarac2Date = gx.date.nullDate() ;
   this.AV42OrdemServicoApareCarac2Cadastrado = "" ;
   this.ZV42OrdemServicoApareCarac2Cadastrado = "" ;
   this.OV42OrdemServicoApareCarac2Cadastrado = "" ;
   this.AV39OrdemServicoApareCarac3Numeric = 0 ;
   this.ZV39OrdemServicoApareCarac3Numeric = 0 ;
   this.OV39OrdemServicoApareCarac3Numeric = 0 ;
   this.AV40OrdemServicoApareCarac3String = "" ;
   this.ZV40OrdemServicoApareCarac3String = "" ;
   this.OV40OrdemServicoApareCarac3String = "" ;
   this.AV41OrdemServicoApareCarac3Date = gx.date.nullDate() ;
   this.ZV41OrdemServicoApareCarac3Date = gx.date.nullDate() ;
   this.OV41OrdemServicoApareCarac3Date = gx.date.nullDate() ;
   this.AV38OrdemServicoApareCarac3Cadastrado = "" ;
   this.ZV38OrdemServicoApareCarac3Cadastrado = "" ;
   this.OV38OrdemServicoApareCarac3Cadastrado = "" ;
   this.AV43OrdemServicoApareCarac4Numeric = 0 ;
   this.ZV43OrdemServicoApareCarac4Numeric = 0 ;
   this.OV43OrdemServicoApareCarac4Numeric = 0 ;
   this.AV44OrdemServicoApareCarac4String = "" ;
   this.ZV44OrdemServicoApareCarac4String = "" ;
   this.OV44OrdemServicoApareCarac4String = "" ;
   this.AV45OrdemServicoApareCarac4Date = gx.date.nullDate() ;
   this.ZV45OrdemServicoApareCarac4Date = gx.date.nullDate() ;
   this.OV45OrdemServicoApareCarac4Date = gx.date.nullDate() ;
   this.AV46OrdemServicoApareCarac4Cadastrado = "" ;
   this.ZV46OrdemServicoApareCarac4Cadastrado = "" ;
   this.OV46OrdemServicoApareCarac4Cadastrado = "" ;
   this.AV47OrdemServicoApareCarac5Numeric = 0 ;
   this.ZV47OrdemServicoApareCarac5Numeric = 0 ;
   this.OV47OrdemServicoApareCarac5Numeric = 0 ;
   this.AV48OrdemServicoApareCarac5String = "" ;
   this.ZV48OrdemServicoApareCarac5String = "" ;
   this.OV48OrdemServicoApareCarac5String = "" ;
   this.AV49OrdemServicoApareCarac5Date = gx.date.nullDate() ;
   this.ZV49OrdemServicoApareCarac5Date = gx.date.nullDate() ;
   this.OV49OrdemServicoApareCarac5Date = gx.date.nullDate() ;
   this.AV50OrdemServicoApareCarac5Cadastrado = "" ;
   this.ZV50OrdemServicoApareCarac5Cadastrado = "" ;
   this.OV50OrdemServicoApareCarac5Cadastrado = "" ;
   this.AV51OrdemServicoApareCarac6Numeric = 0 ;
   this.ZV51OrdemServicoApareCarac6Numeric = 0 ;
   this.OV51OrdemServicoApareCarac6Numeric = 0 ;
   this.AV53OrdemServicoApareCarac6Date = gx.date.nullDate() ;
   this.ZV53OrdemServicoApareCarac6Date = gx.date.nullDate() ;
   this.OV53OrdemServicoApareCarac6Date = gx.date.nullDate() ;
   this.AV52OrdemServicoApareCarac6String = "" ;
   this.ZV52OrdemServicoApareCarac6String = "" ;
   this.OV52OrdemServicoApareCarac6String = "" ;
   this.AV54OrdemServicoApareCarac6Cadastrado = "" ;
   this.ZV54OrdemServicoApareCarac6Cadastrado = "" ;
   this.OV54OrdemServicoApareCarac6Cadastrado = "" ;
   this.AV55OrdemServicoApareCarac7Numeric = 0 ;
   this.ZV55OrdemServicoApareCarac7Numeric = 0 ;
   this.OV55OrdemServicoApareCarac7Numeric = 0 ;
   this.AV57OrdemServicoApareCarac7Date = gx.date.nullDate() ;
   this.ZV57OrdemServicoApareCarac7Date = gx.date.nullDate() ;
   this.OV57OrdemServicoApareCarac7Date = gx.date.nullDate() ;
   this.AV56OrdemServicoApareCarac7String = "" ;
   this.ZV56OrdemServicoApareCarac7String = "" ;
   this.OV56OrdemServicoApareCarac7String = "" ;
   this.AV58OrdemServicoApareCarac7Cadastrado = "" ;
   this.ZV58OrdemServicoApareCarac7Cadastrado = "" ;
   this.OV58OrdemServicoApareCarac7Cadastrado = "" ;
   this.AV59OrdemServicoApareCarac8Numeric = 0 ;
   this.ZV59OrdemServicoApareCarac8Numeric = 0 ;
   this.OV59OrdemServicoApareCarac8Numeric = 0 ;
   this.AV61OrdemServicoApareCarac8Date = gx.date.nullDate() ;
   this.ZV61OrdemServicoApareCarac8Date = gx.date.nullDate() ;
   this.OV61OrdemServicoApareCarac8Date = gx.date.nullDate() ;
   this.AV60OrdemServicoApareCarac8String = "" ;
   this.ZV60OrdemServicoApareCarac8String = "" ;
   this.OV60OrdemServicoApareCarac8String = "" ;
   this.AV62OrdemServicoApareCarac8Cadastrado = "" ;
   this.ZV62OrdemServicoApareCarac8Cadastrado = "" ;
   this.OV62OrdemServicoApareCarac8Cadastrado = "" ;
   this.AV65OrdemServicoApareCarac9Date = gx.date.nullDate() ;
   this.ZV65OrdemServicoApareCarac9Date = gx.date.nullDate() ;
   this.OV65OrdemServicoApareCarac9Date = gx.date.nullDate() ;
   this.AV63OrdemServicoApareCarac9Numeric = 0 ;
   this.ZV63OrdemServicoApareCarac9Numeric = 0 ;
   this.OV63OrdemServicoApareCarac9Numeric = 0 ;
   this.AV64OrdemServicoApareCarac9String = "" ;
   this.ZV64OrdemServicoApareCarac9String = "" ;
   this.OV64OrdemServicoApareCarac9String = "" ;
   this.AV66OrdemServicoApareCarac9Cadastrado = "" ;
   this.ZV66OrdemServicoApareCarac9Cadastrado = "" ;
   this.OV66OrdemServicoApareCarac9Cadastrado = "" ;
   this.AV166OrdemServicoFaseEmpresaId = "" ;
   this.ZV166OrdemServicoFaseEmpresaId = "" ;
   this.OV166OrdemServicoFaseEmpresaId = "" ;
   this.AV158OrdemServicoFaseId = 0 ;
   this.ZV158OrdemServicoFaseId = 0 ;
   this.OV158OrdemServicoFaseId = 0 ;
   this.AV164OrdemServicoFaseDescricao = "" ;
   this.ZV164OrdemServicoFaseDescricao = "" ;
   this.OV164OrdemServicoFaseDescricao = "" ;
   this.ZV182GXV12X = 0 ;
   this.OV182GXV12X = 0 ;
   this.ZV183GXV12Y = "" ;
   this.OV183GXV12Y = "" ;
   this.ZV184GXV12Z = "" ;
   this.OV184GXV12Z = "" ;
   this.ZV168ExcLinhaFase = "" ;
   this.OV168ExcLinhaFase = "" ;
   this.AV32OrdemServicoApareCarac1Numeric = 0 ;
   this.AV31OrdemServicoApareCarac1String = "" ;
   this.AV33OrdemServicoApareCarac1Date = gx.date.nullDate() ;
   this.AV34OrdemServicoApareCarac1Cadastrado = "" ;
   this.AV35OrdemServicoApareCarac2Numeric = 0 ;
   this.AV36OrdemServicoApareCarac2String = "" ;
   this.AV37OrdemServicoApareCarac2Date = gx.date.nullDate() ;
   this.AV42OrdemServicoApareCarac2Cadastrado = "" ;
   this.AV39OrdemServicoApareCarac3Numeric = 0 ;
   this.AV40OrdemServicoApareCarac3String = "" ;
   this.AV41OrdemServicoApareCarac3Date = gx.date.nullDate() ;
   this.AV38OrdemServicoApareCarac3Cadastrado = "" ;
   this.AV43OrdemServicoApareCarac4Numeric = 0 ;
   this.AV44OrdemServicoApareCarac4String = "" ;
   this.AV45OrdemServicoApareCarac4Date = gx.date.nullDate() ;
   this.AV46OrdemServicoApareCarac4Cadastrado = "" ;
   this.AV47OrdemServicoApareCarac5Numeric = 0 ;
   this.AV48OrdemServicoApareCarac5String = "" ;
   this.AV49OrdemServicoApareCarac5Date = gx.date.nullDate() ;
   this.AV50OrdemServicoApareCarac5Cadastrado = "" ;
   this.AV51OrdemServicoApareCarac6Numeric = 0 ;
   this.AV53OrdemServicoApareCarac6Date = gx.date.nullDate() ;
   this.AV52OrdemServicoApareCarac6String = "" ;
   this.AV54OrdemServicoApareCarac6Cadastrado = "" ;
   this.AV55OrdemServicoApareCarac7Numeric = 0 ;
   this.AV57OrdemServicoApareCarac7Date = gx.date.nullDate() ;
   this.AV56OrdemServicoApareCarac7String = "" ;
   this.AV58OrdemServicoApareCarac7Cadastrado = "" ;
   this.AV59OrdemServicoApareCarac8Numeric = 0 ;
   this.AV61OrdemServicoApareCarac8Date = gx.date.nullDate() ;
   this.AV60OrdemServicoApareCarac8String = "" ;
   this.AV62OrdemServicoApareCarac8Cadastrado = "" ;
   this.AV65OrdemServicoApareCarac9Date = gx.date.nullDate() ;
   this.AV63OrdemServicoApareCarac9Numeric = 0 ;
   this.AV64OrdemServicoApareCarac9String = "" ;
   this.AV66OrdemServicoApareCarac9Cadastrado = "" ;
   this.AV166OrdemServicoFaseEmpresaId = "" ;
   this.AV158OrdemServicoFaseId = 0 ;
   this.AV164OrdemServicoFaseDescricao = "" ;
   this.GXV12X = 0 ;
   this.GXV12Y = "" ;
   this.GXV12Z = "" ;
   this.AV168ExcLinhaFase = "" ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8920AparelhoCaracSituacao = "" ;
   this.A8828AparelhoCaracOrdenacao = 0 ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.A8834AparelhoCaracValorConteudo = "" ;
   this.A8837AparelhoCaracValorId = 0 ;
   this.A8607OrdemServicoFaseId = 0 ;
   this.A8606OrdemServicoFaseEmpresaId = "" ;
   this.A8600OrdemServicoFaseDescricao = "" ;
   this.AV75OrdemServicoApareCaracVlr9 = "" ;
   this.AV74OrdemServicoApareCaracVlr8 = "" ;
   this.AV73OrdemServicoApareCaracVlr7 = "" ;
   this.AV72OrdemServicoApareCaracVlr6 = "" ;
   this.AV71OrdemServicoApareCaracVlr5 = "" ;
   this.AV70OrdemServicoApareCaracVlr4 = "" ;
   this.AV69OrdemServicoApareCaracVlr3 = "" ;
   this.AV68OrdemServicoApareCaracVlr2 = "" ;
   this.AV67OrdemServicoApareCaracVlr1 = "" ;
   this.Events = {"e111dj2_client": ["'CONFIRMAR'", true] ,"e121dj2_client": ["'FECHAR'", true] ,"e131dj2_client": ["VORDEMSERVICOFASEID.ISVALID", true] ,"e151dj2_client": ["'REMOVEFASE'", true] ,"e171dj2_client": ["ENTER", true] ,"e181dj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'}],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC1DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC1DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC1NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC1NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC1STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC1STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC1CADASTRADO'},{av:'AV33OrdemServicoApareCarac1Date',fld:'vORDEMSERVICOAPARECARAC1DATE'},{av:'AV32OrdemServicoApareCarac1Numeric',fld:'vORDEMSERVICOAPARECARAC1NUMERIC'},{av:'AV31OrdemServicoApareCarac1String',fld:'vORDEMSERVICOAPARECARAC1STRING'},{av:'AV34OrdemServicoApareCarac1Cadastrado',fld:'vORDEMSERVICOAPARECARAC1CADASTRADO'},{av:'AV128Caracteristica1',fld:'vCARACTERISTICA1'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC2DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC2DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC2NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC2NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC2STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC2STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC2CADASTRADO'},{av:'AV37OrdemServicoApareCarac2Date',fld:'vORDEMSERVICOAPARECARAC2DATE'},{av:'AV35OrdemServicoApareCarac2Numeric',fld:'vORDEMSERVICOAPARECARAC2NUMERIC'},{av:'AV36OrdemServicoApareCarac2String',fld:'vORDEMSERVICOAPARECARAC2STRING'},{av:'AV42OrdemServicoApareCarac2Cadastrado',fld:'vORDEMSERVICOAPARECARAC2CADASTRADO'},{av:'AV129Caracteristica2',fld:'vCARACTERISTICA2'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC3DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC3DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC3NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC3NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC3STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC3STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC3CADASTRADO'},{av:'AV41OrdemServicoApareCarac3Date',fld:'vORDEMSERVICOAPARECARAC3DATE'},{av:'AV39OrdemServicoApareCarac3Numeric',fld:'vORDEMSERVICOAPARECARAC3NUMERIC'},{av:'AV40OrdemServicoApareCarac3String',fld:'vORDEMSERVICOAPARECARAC3STRING'},{av:'AV38OrdemServicoApareCarac3Cadastrado',fld:'vORDEMSERVICOAPARECARAC3CADASTRADO'},{av:'AV130Caracteristica3',fld:'vCARACTERISTICA3'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC4DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC4DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC4NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC4NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC4STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC4STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC4CADASTRADO'},{av:'AV45OrdemServicoApareCarac4Date',fld:'vORDEMSERVICOAPARECARAC4DATE'},{av:'AV43OrdemServicoApareCarac4Numeric',fld:'vORDEMSERVICOAPARECARAC4NUMERIC'},{av:'AV44OrdemServicoApareCarac4String',fld:'vORDEMSERVICOAPARECARAC4STRING'},{av:'AV46OrdemServicoApareCarac4Cadastrado',fld:'vORDEMSERVICOAPARECARAC4CADASTRADO'},{av:'AV131Caracteristica4',fld:'vCARACTERISTICA4'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC5DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC5DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC5NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC5NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC5STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC5STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC5CADASTRADO'},{av:'AV49OrdemServicoApareCarac5Date',fld:'vORDEMSERVICOAPARECARAC5DATE'},{av:'AV47OrdemServicoApareCarac5Numeric',fld:'vORDEMSERVICOAPARECARAC5NUMERIC'},{av:'AV48OrdemServicoApareCarac5String',fld:'vORDEMSERVICOAPARECARAC5STRING'},{av:'AV50OrdemServicoApareCarac5Cadastrado',fld:'vORDEMSERVICOAPARECARAC5CADASTRADO'},{av:'AV132Caracteristica5',fld:'vCARACTERISTICA5'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC6DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC6DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC6NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC6NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC6STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC6STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC6CADASTRADO'},{av:'AV53OrdemServicoApareCarac6Date',fld:'vORDEMSERVICOAPARECARAC6DATE'},{av:'AV51OrdemServicoApareCarac6Numeric',fld:'vORDEMSERVICOAPARECARAC6NUMERIC'},{av:'AV52OrdemServicoApareCarac6String',fld:'vORDEMSERVICOAPARECARAC6STRING'},{av:'AV54OrdemServicoApareCarac6Cadastrado',fld:'vORDEMSERVICOAPARECARAC6CADASTRADO'},{av:'AV133Caracteristica6',fld:'vCARACTERISTICA6'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC7DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC7DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC7NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC7NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC7STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC7STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC7CADASTRADO'},{av:'AV57OrdemServicoApareCarac7Date',fld:'vORDEMSERVICOAPARECARAC7DATE'},{av:'AV55OrdemServicoApareCarac7Numeric',fld:'vORDEMSERVICOAPARECARAC7NUMERIC'},{av:'AV56OrdemServicoApareCarac7String',fld:'vORDEMSERVICOAPARECARAC7STRING'},{av:'AV58OrdemServicoApareCarac7Cadastrado',fld:'vORDEMSERVICOAPARECARAC7CADASTRADO'},{av:'AV134Caracteristica7',fld:'vCARACTERISTICA7'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC8DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC8DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC8NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC8NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC8STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC8STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC8CADASTRADO'},{av:'AV61OrdemServicoApareCarac8Date',fld:'vORDEMSERVICOAPARECARAC8DATE'},{av:'AV59OrdemServicoApareCarac8Numeric',fld:'vORDEMSERVICOAPARECARAC8NUMERIC'},{av:'AV60OrdemServicoApareCarac8String',fld:'vORDEMSERVICOAPARECARAC8STRING'},{av:'AV62OrdemServicoApareCarac8Cadastrado',fld:'vORDEMSERVICOAPARECARAC8CADASTRADO'},{av:'AV135Caracteristica8',fld:'vCARACTERISTICA8'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC9DATE","Visible")',ctrl:'vORDEMSERVICOAPARECARAC9DATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC9NUMERIC","Visible")',ctrl:'vORDEMSERVICOAPARECARAC9NUMERIC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEMSERVICOAPARECARAC9STRING","Visible")',ctrl:'vORDEMSERVICOAPARECARAC9STRING',prop:'Visible'},{ctrl:'vORDEMSERVICOAPARECARAC9CADASTRADO'},{av:'AV65OrdemServicoApareCarac9Date',fld:'vORDEMSERVICOAPARECARAC9DATE'},{av:'AV63OrdemServicoApareCarac9Numeric',fld:'vORDEMSERVICOAPARECARAC9NUMERIC'},{av:'AV64OrdemServicoApareCarac9String',fld:'vORDEMSERVICOAPARECARAC9STRING'},{av:'AV66OrdemServicoApareCarac9Cadastrado',fld:'vORDEMSERVICOAPARECARAC9CADASTRADO'},{av:'AV136Caracteristica9',fld:'vCARACTERISTICA9'},{av:'AV67OrdemServicoApareCaracVlr1',fld:'vORDEMSERVICOAPARECARACVLR1'},{av:'AV68OrdemServicoApareCaracVlr2',fld:'vORDEMSERVICOAPARECARACVLR2'},{av:'AV69OrdemServicoApareCaracVlr3',fld:'vORDEMSERVICOAPARECARACVLR3'},{av:'AV70OrdemServicoApareCaracVlr4',fld:'vORDEMSERVICOAPARECARACVLR4'},{av:'AV71OrdemServicoApareCaracVlr5',fld:'vORDEMSERVICOAPARECARACVLR5'},{av:'AV72OrdemServicoApareCaracVlr6',fld:'vORDEMSERVICOAPARECARACVLR6'},{av:'AV73OrdemServicoApareCaracVlr7',fld:'vORDEMSERVICOAPARECARACVLR7'},{av:'AV74OrdemServicoApareCaracVlr8',fld:'vORDEMSERVICOAPARECARACVLR8'},{av:'AV75OrdemServicoApareCaracVlr9',fld:'vORDEMSERVICOAPARECARACVLR9'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}],[{av:'AV118OrdemServicoCaracteristicasMov',fld:'vORDEMSERVICOCARACTERISTICASMOV'},{av:'AV119OrdemServicoCaracteristicasMovItem',fld:'vORDEMSERVICOCARACTERISTICASMOVITEM'},{av:'AV67OrdemServicoApareCaracVlr1',fld:'vORDEMSERVICOAPARECARACVLR1'},{av:'AV68OrdemServicoApareCaracVlr2',fld:'vORDEMSERVICOAPARECARACVLR2'},{av:'AV69OrdemServicoApareCaracVlr3',fld:'vORDEMSERVICOAPARECARACVLR3'},{av:'AV70OrdemServicoApareCaracVlr4',fld:'vORDEMSERVICOAPARECARACVLR4'},{av:'AV71OrdemServicoApareCaracVlr5',fld:'vORDEMSERVICOAPARECARACVLR5'},{av:'AV72OrdemServicoApareCaracVlr6',fld:'vORDEMSERVICOAPARECARACVLR6'},{av:'AV73OrdemServicoApareCaracVlr7',fld:'vORDEMSERVICOAPARECARACVLR7'},{av:'AV74OrdemServicoApareCaracVlr8',fld:'vORDEMSERVICOAPARECARACVLR8'},{av:'AV75OrdemServicoApareCaracVlr9',fld:'vORDEMSERVICOAPARECARACVLR9'},{av:'AV174StrCol',fld:'vSTRCOL'},{av:'AV188GXV2',fld:'vGXV2'},{av:'AV175SdtOrdemServicoFaseItem',fld:'vSDTORDEMSERVICOFASEITEM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VORDEMSERVICOFASEID.ISVALID"] = [[{av:'AV158OrdemServicoFaseId',fld:'vORDEMSERVICOFASEID'},{av:'A8607OrdemServicoFaseId',fld:'ORDEMSERVICOFASEID'},{av:'A8606OrdemServicoFaseEmpresaId',fld:'ORDEMSERVICOFASEEMPRESAID'},{av:'AV166OrdemServicoFaseEmpresaId',fld:'vORDEMSERVICOFASEEMPRESAID'},{av:'A8600OrdemServicoFaseDescricao',fld:'ORDEMSERVICOFASEDESCRICAO'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104},{av:'AV164OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'}],[{av:'AV187GXLvl57',fld:'vGXLVL57'},{av:'AV164OrdemServicoFaseDescricao',fld:'vORDEMSERVICOFASEDESCRICAO'},{av:'AV178hasFase',fld:'vHASFASE'},{av:'AV174StrCol',fld:'vSTRCOL'},{av:'AV191GXV4',fld:'vGXV4'},{av:'AV175SdtOrdemServicoFaseItem',fld:'vSDTORDEMSERVICOFASEITEM'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}]];
   this.EvtParms["'REMOVEFASE'"] = [[{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'}],[{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV168ExcLinhaFase',fld:'vEXCLINHAFASE'},{av:'AV176SDTOrdemServicoFase',fld:'vSDTORDEMSERVICOFASE',grid:104}],[]];
   this.setPrompt("PROMPT_ORDEMSERVICOFASEID", [100]);
   GridContainer.addRefreshingVar({rfrVar:"AV168ExcLinhaFase", rfrProp:"Value", gxAttId:"Exclinhafase"});
   this.addGridBCProperty("Sdtordemservicofase", ["OrdemServicoFaseId"], this.GXValidFnc[105], "AV176SDTOrdemServicoFase");
   this.addGridBCProperty("Sdtordemservicofase", ["OrdemServicoFaseEmpresaId"], this.GXValidFnc[106], "AV176SDTOrdemServicoFase");
   this.addGridBCProperty("Sdtordemservicofase", ["OrdemServicoFaseDescricao"], this.GXValidFnc[107], "AV176SDTOrdemServicoFase");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcaracteristicas());
