/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:0.17
*/
gx.evt.autoSkip = false;
gx.define('hcadastrosaldoproduto', false, function () {
   this.ServerClass =  "hcadastrosaldoproduto" ;
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
      this.AV40LoteProduto=gx.fn.getControlValue("vLOTEPRODUTO") ;
      this.AV32SaldoProdutoData=gx.fn.getDateValue("vSALDOPRODUTODATA") ;
      this.AV42FilialEmpresaId=gx.fn.getControlValue("vFILIALEMPRESAID") ;
      this.AV43ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV36Mod=gx.fn.getControlValue("vMOD") ;
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
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
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
   this.e12mh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13mh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16mh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,8,9,10,13,16,19,21,22,25,27,28,29,32,34,36,38,40,42,45,46,47,49,50,52,53,55,56,58,59,62,64,65,66,69,71,74,76,79,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,109,110,112];
   this.GXLastCtrlId =112;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE1",gxz:"ZV54Visible1",gxold:"OV54Visible1",gxvar:"AV54Visible1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Visible1=Value},v2z:function(Value){gx.O.ZV54Visible1=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE1",gx.O.AV54Visible1,0)},c2v:function(){gx.O.AV54Visible1=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE1")},nac:gx.falseFn};
   GXValidFnc[7]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE2",gxz:"ZV55Visible2",gxold:"OV55Visible2",gxvar:"AV55Visible2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55Visible2=Value},v2z:function(Value){gx.O.ZV55Visible2=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE2",gx.O.AV55Visible2,0)},c2v:function(){gx.O.AV55Visible2=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE2")},nac:gx.falseFn};
   GXValidFnc[8]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE3",gxz:"ZV56Visible3",gxold:"OV56Visible3",gxvar:"AV56Visible3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56Visible3=Value},v2z:function(Value){gx.O.ZV56Visible3=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE3",gx.O.AV56Visible3,0)},c2v:function(){gx.O.AV56Visible3=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE3")},nac:gx.falseFn};
   GXValidFnc[9]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE4",gxz:"ZV57Visible4",gxold:"OV57Visible4",gxvar:"AV57Visible4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57Visible4=Value},v2z:function(Value){gx.O.ZV57Visible4=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE4",gx.O.AV57Visible4,0)},c2v:function(){gx.O.AV57Visible4=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE4")},nac:gx.falseFn};
   GXValidFnc[10]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVISIBLE5",gxz:"ZV58Visible5",gxold:"OV58Visible5",gxvar:"AV58Visible5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58Visible5=Value},v2z:function(Value){gx.O.ZV58Visible5=Value},v2c:function(){gx.fn.setControlValue("vVISIBLE5",gx.O.AV58Visible5,0)},c2v:function(){gx.O.AV58Visible5=this.val()},val:function(){return gx.fn.getControlValue("vVISIBLE5")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TABLE2",grid:0};
   GXValidFnc[16]={fld:"TABLE3",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV28FilialId",gxold:"OV28FilialId",gxvar:"AV28FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV28FilialId,0)},c2v:function(){gx.O.AV28FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV29FilialNome",gxold:"OV29FilialNome",gxvar:"AV29FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialNome=Value},v2z:function(Value){gx.O.ZV29FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV29FilialNome,0)},c2v:function(){gx.O.AV29FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV30ProdutoId",gxold:"OV30ProdutoId",gxvar:"AV30ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV30ProdutoId,0)},c2v:function(){gx.O.AV30ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV31ProdutoDescricaoResumida",gxold:"OV31ProdutoDescricaoResumida",gxvar:"AV31ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV31ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV31ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV31ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"LOTE", format:0,grid:0};
   GXValidFnc[34]={fld:"DESC1", format:0,grid:0};
   GXValidFnc[36]={fld:"DESC2", format:0,grid:0};
   GXValidFnc[38]={fld:"DESC3", format:0,grid:0};
   GXValidFnc[40]={fld:"DESC4", format:0,grid:0};
   GXValidFnc[42]={fld:"DESC5", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV44Edit1",gxold:"OV44Edit1",gxvar:"AV44Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Edit1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44Edit1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT1",gx.O.AV44Edit1,0)},c2v:function(){gx.O.AV44Edit1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT1",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO1",gxz:"ZV45Combo1",gxold:"OV45Combo1",gxvar:"AV45Combo1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV45Combo1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45Combo1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO1",gx.O.AV45Combo1)},c2v:function(){gx.O.AV45Combo1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO1",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE",gxz:"ZV66Lote",gxold:"OV66Lote",gxvar:"AV66Lote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66Lote=Value},v2z:function(Value){gx.O.ZV66Lote=Value},v2c:function(){gx.fn.setControlValue("vLOTE",gx.O.AV66Lote,0)},c2v:function(){gx.O.AV66Lote=this.val()},val:function(){return gx.fn.getControlValue("vLOTE")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV46Edit2",gxold:"OV46Edit2",gxvar:"AV46Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Edit2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46Edit2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT2",gx.O.AV46Edit2,0)},c2v:function(){gx.O.AV46Edit2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT2",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO2",gxz:"ZV47Combo2",gxold:"OV47Combo2",gxvar:"AV47Combo2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47Combo2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47Combo2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO2",gx.O.AV47Combo2)},c2v:function(){gx.O.AV47Combo2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO2",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV48Edit3",gxold:"OV48Edit3",gxvar:"AV48Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Edit3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48Edit3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT3",gx.O.AV48Edit3,0)},c2v:function(){gx.O.AV48Edit3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT3",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO3",gxz:"ZV49Combo3",gxold:"OV49Combo3",gxvar:"AV49Combo3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49Combo3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49Combo3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO3",gx.O.AV49Combo3)},c2v:function(){gx.O.AV49Combo3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO3",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV50Edit4",gxold:"OV50Edit4",gxvar:"AV50Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Edit4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50Edit4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT4",gx.O.AV50Edit4,0)},c2v:function(){gx.O.AV50Edit4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT4",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO4",gxz:"ZV51Combo4",gxold:"OV51Combo4",gxvar:"AV51Combo4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV51Combo4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51Combo4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO4",gx.O.AV51Combo4)},c2v:function(){gx.O.AV51Combo4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO4",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV52Edit5",gxold:"OV52Edit5",gxvar:"AV52Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Edit5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52Edit5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEDIT5",gx.O.AV52Edit5,0)},c2v:function(){gx.O.AV52Edit5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEDIT5",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMBO5",gxz:"ZV53Combo5",gxold:"OV53Combo5",gxvar:"AV53Combo5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53Combo5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53Combo5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOMBO5",gx.O.AV53Combo5)},c2v:function(){gx.O.AV53Combo5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMBO5",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV70Mes",gxold:"OV70Mes",gxvar:"AV70Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70Mes=Value},v2z:function(Value){gx.O.ZV70Mes=Value},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV70Mes,0)},c2v:function(){gx.O.AV70Mes=this.val()},val:function(){return gx.fn.getControlValue("vMES")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV71Ano",gxold:"OV71Ano",gxvar:"AV71Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71Ano=Value},v2z:function(Value){gx.O.ZV71Ano=Value},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV71Ano,0)},c2v:function(){gx.O.AV71Ano=this.val()},val:function(){return gx.fn.getControlValue("vANO")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPRODUTOQTDEENTRADA",gxz:"ZV33SaldoProdutoQtdeEntrada",gxold:"OV33SaldoProdutoQtdeEntrada",gxvar:"AV33SaldoProdutoQtdeEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SaldoProdutoQtdeEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV33SaldoProdutoQtdeEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOPRODUTOQTDEENTRADA",gx.O.AV33SaldoProdutoQtdeEntrada,4,',')},c2v:function(){gx.O.AV33SaldoProdutoQtdeEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOPRODUTOQTDEENTRADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPRODUTOQTDESAIDA",gxz:"ZV34saldoProdutoQtdeSaida",gxold:"OV34saldoProdutoQtdeSaida",gxvar:"AV34saldoProdutoQtdeSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34saldoProdutoQtdeSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV34saldoProdutoQtdeSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOPRODUTOQTDESAIDA",gx.O.AV34saldoProdutoQtdeSaida,4,',')},c2v:function(){gx.O.AV34saldoProdutoQtdeSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOPRODUTOQTDESAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPRODUTOQTDE",gxz:"ZV35SaldoProdutoQtde",gxold:"OV35SaldoProdutoQtde",gxvar:"AV35SaldoProdutoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SaldoProdutoQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35SaldoProdutoQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOPRODUTOQTDE",gx.O.AV35SaldoProdutoQtde,4,',')},c2v:function(){gx.O.AV35SaldoProdutoQtde=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOPRODUTOQTDE",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC1",gxz:"ZV72Desc1",gxold:"OV72Desc1",gxvar:"AV72Desc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72Desc1=Value},v2z:function(Value){gx.O.ZV72Desc1=Value},v2c:function(){gx.fn.setControlValue("vDESC1",gx.O.AV72Desc1,0)},c2v:function(){gx.O.AV72Desc1=this.val()},val:function(){return gx.fn.getControlValue("vDESC1")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC2",gxz:"ZV73Desc2",gxold:"OV73Desc2",gxvar:"AV73Desc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73Desc2=Value},v2z:function(Value){gx.O.ZV73Desc2=Value},v2c:function(){gx.fn.setControlValue("vDESC2",gx.O.AV73Desc2,0)},c2v:function(){gx.O.AV73Desc2=this.val()},val:function(){return gx.fn.getControlValue("vDESC2")},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC3",gxz:"ZV74Desc3",gxold:"OV74Desc3",gxvar:"AV74Desc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74Desc3=Value},v2z:function(Value){gx.O.ZV74Desc3=Value},v2c:function(){gx.fn.setControlValue("vDESC3",gx.O.AV74Desc3,0)},c2v:function(){gx.O.AV74Desc3=this.val()},val:function(){return gx.fn.getControlValue("vDESC3")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4",gxz:"ZV75Desc4",gxold:"OV75Desc4",gxvar:"AV75Desc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75Desc4=Value},v2z:function(Value){gx.O.ZV75Desc4=Value},v2c:function(){gx.fn.setControlValue("vDESC4",gx.O.AV75Desc4,0)},c2v:function(){gx.O.AV75Desc4=this.val()},val:function(){return gx.fn.getControlValue("vDESC4")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5",gxz:"ZV76Desc5",gxold:"OV76Desc5",gxvar:"AV76Desc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76Desc5=Value},v2z:function(Value){gx.O.ZV76Desc5=Value},v2c:function(){gx.fn.setControlValue("vDESC5",gx.O.AV76Desc5,0)},c2v:function(){gx.O.AV76Desc5=this.val()},val:function(){return gx.fn.getControlValue("vDESC5")},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV77PrecoNulo",gxold:"OV77PrecoNulo",gxvar:"AV77PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV77PrecoNulo,0)},c2v:function(){gx.O.AV77PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV79SubGrupoProdutoId",gxold:"OV79SubGrupoProdutoId",gxvar:"AV79SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV79SubGrupoProdutoId,0)},c2v:function(){gx.O.AV79SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV80ProdutoCodigoId",gxold:"OV80ProdutoCodigoId",gxvar:"AV80ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV80ProdutoCodigoId,0)},c2v:function(){gx.O.AV80ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV78GrupoProdutoId",gxold:"OV78GrupoProdutoId",gxvar:"AV78GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV78GrupoProdutoId,0)},c2v:function(){gx.O.AV78GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV81LoteCombinacao",gxold:"OV81LoteCombinacao",gxvar:"AV81LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81LoteCombinacao=Value},v2z:function(Value){gx.O.ZV81LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV81LoteCombinacao,0)},c2v:function(){gx.O.AV81LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV82ProdutoCategoria",gxold:"OV82ProdutoCategoria",gxvar:"AV82ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV82ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV82ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV82ProdutoCategoria)},c2v:function(){gx.O.AV82ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV85IntAuxIn",gxold:"OV85IntAuxIn",gxvar:"AV85IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV85IntAuxIn,0)},c2v:function(){gx.O.AV85IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV83CodigoBarrasProdutoBarra",gxold:"OV83CodigoBarrasProdutoBarra",gxvar:"AV83CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV83CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV83CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV84ProdutoReferencia",gxold:"OV84ProdutoReferencia",gxvar:"AV84ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV84ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV84ProdutoReferencia,0)},c2v:function(){gx.O.AV84ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV86SNVenda",gxold:"OV86SNVenda",gxvar:"AV86SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86SNVenda=Value},v2z:function(Value){gx.O.ZV86SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV86SNVenda,0)},c2v:function(){gx.O.AV86SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPRODUTOUSUARIOALT",gxz:"ZV67SaldoProdutoUsuarioAlt",gxold:"OV67SaldoProdutoUsuarioAlt",gxvar:"AV67SaldoProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67SaldoProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV67SaldoProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vSALDOPRODUTOUSUARIOALT",gx.O.AV67SaldoProdutoUsuarioAlt,0)},c2v:function(){gx.O.AV67SaldoProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vSALDOPRODUTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOPRODUTODATAHORAALT",gxz:"ZV68SaldoProdutoDataHoraAlt",gxold:"OV68SaldoProdutoDataHoraAlt",gxvar:"AV68SaldoProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSALDOPRODUTODATAHORAALT",gx.O.AV68SaldoProdutoDataHoraAlt,0)},c2v:function(){gx.O.AV68SaldoProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vSALDOPRODUTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV27AcessoSistemaSequencia",gxold:"OV27AcessoSistemaSequencia",gxvar:"AV27AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV27AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV27AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"JS", format:2,grid:0};
   GXValidFnc[112]={fld:"BTNHELP",grid:0};
   this.AV54Visible1 = "" ;
   this.ZV54Visible1 = "" ;
   this.OV54Visible1 = "" ;
   this.AV55Visible2 = "" ;
   this.ZV55Visible2 = "" ;
   this.OV55Visible2 = "" ;
   this.AV56Visible3 = "" ;
   this.ZV56Visible3 = "" ;
   this.OV56Visible3 = "" ;
   this.AV57Visible4 = "" ;
   this.ZV57Visible4 = "" ;
   this.OV57Visible4 = "" ;
   this.AV58Visible5 = "" ;
   this.ZV58Visible5 = "" ;
   this.OV58Visible5 = "" ;
   this.AV28FilialId = 0 ;
   this.ZV28FilialId = 0 ;
   this.OV28FilialId = 0 ;
   this.AV29FilialNome = "" ;
   this.ZV29FilialNome = "" ;
   this.OV29FilialNome = "" ;
   this.AV30ProdutoId = 0 ;
   this.ZV30ProdutoId = 0 ;
   this.OV30ProdutoId = 0 ;
   this.AV31ProdutoDescricaoResumida = "" ;
   this.ZV31ProdutoDescricaoResumida = "" ;
   this.OV31ProdutoDescricaoResumida = "" ;
   this.AV44Edit1 = 0 ;
   this.ZV44Edit1 = 0 ;
   this.OV44Edit1 = 0 ;
   this.AV45Combo1 = 0 ;
   this.ZV45Combo1 = 0 ;
   this.OV45Combo1 = 0 ;
   this.AV66Lote = "" ;
   this.ZV66Lote = "" ;
   this.OV66Lote = "" ;
   this.AV46Edit2 = 0 ;
   this.ZV46Edit2 = 0 ;
   this.OV46Edit2 = 0 ;
   this.AV47Combo2 = 0 ;
   this.ZV47Combo2 = 0 ;
   this.OV47Combo2 = 0 ;
   this.AV48Edit3 = 0 ;
   this.ZV48Edit3 = 0 ;
   this.OV48Edit3 = 0 ;
   this.AV49Combo3 = 0 ;
   this.ZV49Combo3 = 0 ;
   this.OV49Combo3 = 0 ;
   this.AV50Edit4 = 0 ;
   this.ZV50Edit4 = 0 ;
   this.OV50Edit4 = 0 ;
   this.AV51Combo4 = 0 ;
   this.ZV51Combo4 = 0 ;
   this.OV51Combo4 = 0 ;
   this.AV52Edit5 = 0 ;
   this.ZV52Edit5 = 0 ;
   this.OV52Edit5 = 0 ;
   this.AV53Combo5 = 0 ;
   this.ZV53Combo5 = 0 ;
   this.OV53Combo5 = 0 ;
   this.AV70Mes = "" ;
   this.ZV70Mes = "" ;
   this.OV70Mes = "" ;
   this.AV71Ano = "" ;
   this.ZV71Ano = "" ;
   this.OV71Ano = "" ;
   this.AV33SaldoProdutoQtdeEntrada = 0 ;
   this.ZV33SaldoProdutoQtdeEntrada = 0 ;
   this.OV33SaldoProdutoQtdeEntrada = 0 ;
   this.AV34saldoProdutoQtdeSaida = 0 ;
   this.ZV34saldoProdutoQtdeSaida = 0 ;
   this.OV34saldoProdutoQtdeSaida = 0 ;
   this.AV35SaldoProdutoQtde = 0 ;
   this.ZV35SaldoProdutoQtde = 0 ;
   this.OV35SaldoProdutoQtde = 0 ;
   this.AV72Desc1 = "" ;
   this.ZV72Desc1 = "" ;
   this.OV72Desc1 = "" ;
   this.AV73Desc2 = "" ;
   this.ZV73Desc2 = "" ;
   this.OV73Desc2 = "" ;
   this.AV74Desc3 = "" ;
   this.ZV74Desc3 = "" ;
   this.OV74Desc3 = "" ;
   this.AV75Desc4 = "" ;
   this.ZV75Desc4 = "" ;
   this.OV75Desc4 = "" ;
   this.AV76Desc5 = "" ;
   this.ZV76Desc5 = "" ;
   this.OV76Desc5 = "" ;
   this.AV77PrecoNulo = 0 ;
   this.ZV77PrecoNulo = 0 ;
   this.OV77PrecoNulo = 0 ;
   this.AV79SubGrupoProdutoId = 0 ;
   this.ZV79SubGrupoProdutoId = 0 ;
   this.OV79SubGrupoProdutoId = 0 ;
   this.AV80ProdutoCodigoId = 0 ;
   this.ZV80ProdutoCodigoId = 0 ;
   this.OV80ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV78GrupoProdutoId = 0 ;
   this.ZV78GrupoProdutoId = 0 ;
   this.OV78GrupoProdutoId = 0 ;
   this.AV81LoteCombinacao = "" ;
   this.ZV81LoteCombinacao = "" ;
   this.OV81LoteCombinacao = "" ;
   this.AV82ProdutoCategoria = "" ;
   this.ZV82ProdutoCategoria = "" ;
   this.OV82ProdutoCategoria = "" ;
   this.AV85IntAuxIn = 0 ;
   this.ZV85IntAuxIn = 0 ;
   this.OV85IntAuxIn = 0 ;
   this.AV83CodigoBarrasProdutoBarra = 0 ;
   this.ZV83CodigoBarrasProdutoBarra = 0 ;
   this.OV83CodigoBarrasProdutoBarra = 0 ;
   this.AV84ProdutoReferencia = "" ;
   this.ZV84ProdutoReferencia = "" ;
   this.OV84ProdutoReferencia = "" ;
   this.AV86SNVenda = "" ;
   this.ZV86SNVenda = "" ;
   this.OV86SNVenda = "" ;
   this.AV67SaldoProdutoUsuarioAlt = "" ;
   this.ZV67SaldoProdutoUsuarioAlt = "" ;
   this.OV67SaldoProdutoUsuarioAlt = "" ;
   this.AV68SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.ZV68SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.OV68SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.ZV27AcessoSistemaSequencia = 0 ;
   this.OV27AcessoSistemaSequencia = 0 ;
   this.AV54Visible1 = "" ;
   this.AV55Visible2 = "" ;
   this.AV56Visible3 = "" ;
   this.AV57Visible4 = "" ;
   this.AV58Visible5 = "" ;
   this.AV28FilialId = 0 ;
   this.AV29FilialNome = "" ;
   this.AV30ProdutoId = 0 ;
   this.AV31ProdutoDescricaoResumida = "" ;
   this.AV44Edit1 = 0 ;
   this.AV45Combo1 = 0 ;
   this.AV66Lote = "" ;
   this.AV46Edit2 = 0 ;
   this.AV47Combo2 = 0 ;
   this.AV48Edit3 = 0 ;
   this.AV49Combo3 = 0 ;
   this.AV50Edit4 = 0 ;
   this.AV51Combo4 = 0 ;
   this.AV52Edit5 = 0 ;
   this.AV53Combo5 = 0 ;
   this.AV70Mes = "" ;
   this.AV71Ano = "" ;
   this.AV33SaldoProdutoQtdeEntrada = 0 ;
   this.AV34saldoProdutoQtdeSaida = 0 ;
   this.AV35SaldoProdutoQtde = 0 ;
   this.AV72Desc1 = "" ;
   this.AV73Desc2 = "" ;
   this.AV74Desc3 = "" ;
   this.AV75Desc4 = "" ;
   this.AV76Desc5 = "" ;
   this.AV77PrecoNulo = 0 ;
   this.AV79SubGrupoProdutoId = 0 ;
   this.AV80ProdutoCodigoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV78GrupoProdutoId = 0 ;
   this.AV81LoteCombinacao = "" ;
   this.AV82ProdutoCategoria = "" ;
   this.AV85IntAuxIn = 0 ;
   this.AV83CodigoBarrasProdutoBarra = 0 ;
   this.AV84ProdutoReferencia = "" ;
   this.AV86SNVenda = "" ;
   this.AV67SaldoProdutoUsuarioAlt = "" ;
   this.AV68SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV27AcessoSistemaSequencia = 0 ;
   this.AV40LoteProduto = "" ;
   this.AV32SaldoProdutoData = gx.date.nullDate() ;
   this.AV42FilialEmpresaId = "" ;
   this.AV43ProdutoEmpresaId = "" ;
   this.AV36Mod = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1136FilialNome = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A10788ProdutoSnControlaVenc = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A4006SaldoProdutoData = gx.date.nullDate() ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3998SaldoProdutoQtdeEntrada = 0 ;
   this.A3999SaldoProdutoQtdeSaida = 0 ;
   this.A4002SaldoProdutoQtde = 0 ;
   this.A4004SaldoProdutoUsuarioAlt = "" ;
   this.A4005SaldoProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e12mh2_client": ["'FECHAR'", true] ,"e13mh2_client": ["ENTER", true] ,"e16mh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV65SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV89SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'AV40LoteProduto',fld:'vLOTEPRODUTO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'AV44Edit1',fld:'vEDIT1'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'AV62SnValor',fld:'vSNVALOR'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV28FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV62SnValor',fld:'vSNVALOR'},{av:'gx.fn.getCtrlProperty("DESC1","Visible")',ctrl:'DESC1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC2","Visible")',ctrl:'DESC2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC3","Visible")',ctrl:'DESC3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC4","Visible")',ctrl:'DESC4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DESC5","Visible")',ctrl:'DESC5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{ctrl:'vCOMBO1'},{ctrl:'vCOMBO2'},{ctrl:'vCOMBO3'},{ctrl:'vCOMBO4'},{ctrl:'vCOMBO5'},{av:'gx.fn.getCtrlProperty("vVISIBLE1","Visible")',ctrl:'vVISIBLE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE2","Visible")',ctrl:'vVISIBLE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE3","Visible")',ctrl:'vVISIBLE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE4","Visible")',ctrl:'vVISIBLE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVISIBLE5","Visible")',ctrl:'vVISIBLE5',prop:'Visible'},{av:'AV54Visible1',fld:'vVISIBLE1'},{av:'AV55Visible2',fld:'vVISIBLE2'},{av:'AV56Visible3',fld:'vVISIBLE3'},{av:'AV57Visible4',fld:'vVISIBLE4'},{av:'AV58Visible5',fld:'vVISIBLE5'},{av:'AV88PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV59EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV61i',fld:'vI'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'AV72Desc1',fld:'vDESC1'},{av:'AV45Combo1',fld:'vCOMBO1'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'AV73Desc2',fld:'vDESC2'},{av:'AV47Combo2',fld:'vCOMBO2'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'AV74Desc3',fld:'vDESC3'},{av:'AV49Combo3',fld:'vCOMBO3'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'AV75Desc4',fld:'vDESC4'},{av:'AV51Combo4',fld:'vCOMBO4'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV76Desc5',fld:'vDESC5'},{av:'AV53Combo5',fld:'vCOMBO5'},{av:'AV44Edit1',fld:'vEDIT1'},{av:'AV46Edit2',fld:'vEDIT2'},{av:'AV48Edit3',fld:'vEDIT3'},{av:'AV50Edit4',fld:'vEDIT4'},{av:'AV52Edit5',fld:'vEDIT5'},{av:'gx.fn.getCtrlProperty("LOTE","Visible")',ctrl:'vLOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTE","Visible")',ctrl:'LOTE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LOTE","Enabled")',ctrl:'vLOTE',prop:'Enabled'},{av:'AV66Lote',fld:'vLOTE'},{av:'AV31ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV29FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV65SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV89SnContrArmazem',fld:'vSNCONTRARMAZEM'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV43ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV30ProdutoId',fld:'vPRODUTOID'},{av:'A10788ProdutoSnControlaVenc',fld:'PRODUTOSNCONTROLAVENC'},{av:'AV66Lote',fld:'vLOTE'},{av:'AV36Mod',fld:'vMOD'},{av:'AV70Mes',fld:'vMES'},{av:'AV71Ano',fld:'vANO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV42FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV28FilialId',fld:'vFILIALID'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A4006SaldoProdutoData',fld:'SALDOPRODUTODATA'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV29FilialNome',fld:'vFILIALNOME'},{av:'AV31ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV33SaldoProdutoQtdeEntrada',fld:'vSALDOPRODUTOQTDEENTRADA'},{av:'AV34saldoProdutoQtdeSaida',fld:'vSALDOPRODUTOQTDESAIDA'},{av:'AV35SaldoProdutoQtde',fld:'vSALDOPRODUTOQTDE'},{av:'AV67SaldoProdutoUsuarioAlt',fld:'vSALDOPRODUTOUSUARIOALT'},{av:'AV68SaldoProdutoDataHoraAlt',fld:'vSALDOPRODUTODATAHORAALT'},{av:'AV88PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV40LoteProduto',fld:'vLOTEPRODUTO'},{av:'AV54Visible1',fld:'vVISIBLE1'},{av:'AV44Edit1',fld:'vEDIT1'},{av:'AV45Combo1',fld:'vCOMBO1'},{av:'AV55Visible2',fld:'vVISIBLE2'},{av:'AV46Edit2',fld:'vEDIT2'},{av:'AV47Combo2',fld:'vCOMBO2'},{av:'AV56Visible3',fld:'vVISIBLE3'},{av:'AV48Edit3',fld:'vEDIT3'},{av:'AV49Combo3',fld:'vCOMBO3'},{av:'AV57Visible4',fld:'vVISIBLE4'},{av:'AV50Edit4',fld:'vEDIT4'},{av:'AV51Combo4',fld:'vCOMBO4'},{av:'AV58Visible5',fld:'vVISIBLE5'},{av:'AV52Edit5',fld:'vEDIT5'},{av:'AV53Combo5',fld:'vCOMBO5'},{av:'AV72Desc1',fld:'vDESC1'},{av:'AV73Desc2',fld:'vDESC2'},{av:'AV74Desc3',fld:'vDESC3'},{av:'AV75Desc4',fld:'vDESC4'},{av:'AV76Desc5',fld:'vDESC5'}],[{av:'AV37LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV88PRodutoSnControlaVenc',fld:'vPRODUTOSNCONTROLAVENC'},{av:'AV63SnErro',fld:'vSNERRO'},{av:'AV69aux',fld:'vAUX'},{av:'AV64DataSaldo',fld:'vDATASALDO'},{av:'AV67SaldoProdutoUsuarioAlt',fld:'vSALDOPRODUTOUSUARIOALT'},{av:'AV68SaldoProdutoDataHoraAlt',fld:'vSALDOPRODUTODATAHORAALT'},{av:'AV44Edit1',fld:'vEDIT1'},{av:'AV46Edit2',fld:'vEDIT2'},{av:'AV48Edit3',fld:'vEDIT3'},{av:'AV50Edit4',fld:'vEDIT4'},{av:'AV52Edit5',fld:'vEDIT5'},{av:'AV45Combo1',fld:'vCOMBO1'},{av:'AV47Combo2',fld:'vCOMBO2'},{av:'AV49Combo3',fld:'vCOMBO3'},{av:'AV51Combo4',fld:'vCOMBO4'},{av:'AV53Combo5',fld:'vCOMBO5'},{av:'AV33SaldoProdutoQtdeEntrada',fld:'vSALDOPRODUTOQTDEENTRADA'},{av:'AV34saldoProdutoQtdeSaida',fld:'vSALDOPRODUTOQTDESAIDA'},{av:'AV35SaldoProdutoQtde',fld:'vSALDOPRODUTOQTDE'},{av:'AV70Mes',fld:'vMES'},{av:'AV71Ano',fld:'vANO'},{av:'AV66Lote',fld:'vLOTE'}]];
   this.setPrompt("IMGPROMPT", [27,91,88,89,92,96,95]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV40LoteProduto", "vLOTEPRODUTO", 0, "char");
   this.setVCMap("AV32SaldoProdutoData", "vSALDOPRODUTODATA", 0, "date");
   this.setVCMap("AV42FilialEmpresaId", "vFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV43ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV36Mod", "vMOD", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrosaldoproduto());
