/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:16.59
*/
gx.evt.autoSkip = false;
gx.define('hregistrartelevendaobsprod', false, function () {
   this.ServerClass =  "hregistrartelevendaobsprod" ;
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
      this.AV38SaidaItemLoteProdutoEmpId=gx.fn.getControlValue("vSAIDAITEMLOTEPRODUTOEMPID") ;
      this.AV35SaidaItemLoteCombinacao=gx.fn.getControlValue("vSAIDAITEMLOTECOMBINACAO") ;
      this.AV36SaidaItemObservacao=gx.fn.getControlValue("vSAIDAITEMOBSERVACAO") ;
   };
   this.Validv_Saidaitemloteprodutoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDAITEMLOTEPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122762_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132762_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e152762_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,17,19,20,23,25,27,29,31,33,37,39,41,43,45,49];
   this.GXLastCtrlId =49;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TXTCONTA1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMSEQ",gxz:"ZV15SaidaItemSeq",gxold:"OV15SaidaItemSeq",gxvar:"AV15SaidaItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SaidaItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15SaidaItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAITEMSEQ",gx.O.AV15SaidaItemSeq,0)},c2v:function(){gx.O.AV15SaidaItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTCONTA2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaitemloteprodutoid,isvalid:null,rgrid:[],fld:"vSAIDAITEMLOTEPRODUTOID",gxz:"ZV16SaidaItemLoteProdutoId",gxold:"OV16SaidaItemLoteProdutoId",gxvar:"AV16SaidaItemLoteProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SaidaItemLoteProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SaidaItemLoteProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAITEMLOTEPRODUTOID",gx.O.AV16SaidaItemLoteProdutoId,0)},c2v:function(){gx.O.AV16SaidaItemLoteProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAITEMLOTEPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMLOTEPRODUTODESCRICAO",gxz:"ZV17SaidaItemLoteProdutoDescricao",gxold:"OV17SaidaItemLoteProdutoDescricao",gxvar:"AV17SaidaItemLoteProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaItemLoteProdutoDescricao=Value},v2z:function(Value){gx.O.ZV17SaidaItemLoteProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSAIDAITEMLOTEPRODUTODESCRICAO",gx.O.AV17SaidaItemLoteProdutoDescricao,0)},c2v:function(){gx.O.AV17SaidaItemLoteProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAITEMLOTEPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTCONTA3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE1",gxz:"ZV18DescLote1",gxold:"OV18DescLote1",gxvar:"AV18DescLote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DescLote1=Value},v2z:function(Value){gx.O.ZV18DescLote1=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE1",gx.O.AV18DescLote1,0)},c2v:function(){gx.O.AV18DescLote1=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE1")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE2",gxz:"ZV19DescLote2",gxold:"OV19DescLote2",gxvar:"AV19DescLote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DescLote2=Value},v2z:function(Value){gx.O.ZV19DescLote2=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE2",gx.O.AV19DescLote2,0)},c2v:function(){gx.O.AV19DescLote2=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE2")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE3",gxz:"ZV20DescLote3",gxold:"OV20DescLote3",gxvar:"AV20DescLote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DescLote3=Value},v2z:function(Value){gx.O.ZV20DescLote3=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE3",gx.O.AV20DescLote3,0)},c2v:function(){gx.O.AV20DescLote3=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE3")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE4",gxz:"ZV21DescLote4",gxold:"OV21DescLote4",gxvar:"AV21DescLote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DescLote4=Value},v2z:function(Value){gx.O.ZV21DescLote4=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE4",gx.O.AV21DescLote4,0)},c2v:function(){gx.O.AV21DescLote4=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE4")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTE5",gxz:"ZV22DescLote5",gxold:"OV22DescLote5",gxvar:"AV22DescLote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DescLote5=Value},v2z:function(Value){gx.O.ZV22DescLote5=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTE5",gx.O.AV22DescLote5,0)},c2v:function(){gx.O.AV22DescLote5=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTE5")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV23Lote1",gxold:"OV23Lote1",gxvar:"AV23Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Lote1=Value},v2z:function(Value){gx.O.ZV23Lote1=Value},v2c:function(){gx.fn.setControlValue("vLOTE1",gx.O.AV23Lote1,0)},c2v:function(){gx.O.AV23Lote1=this.val()},val:function(){return gx.fn.getControlValue("vLOTE1")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV24Lote2",gxold:"OV24Lote2",gxvar:"AV24Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Lote2=Value},v2z:function(Value){gx.O.ZV24Lote2=Value},v2c:function(){gx.fn.setControlValue("vLOTE2",gx.O.AV24Lote2,0)},c2v:function(){gx.O.AV24Lote2=this.val()},val:function(){return gx.fn.getControlValue("vLOTE2")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV25Lote3",gxold:"OV25Lote3",gxvar:"AV25Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Lote3=Value},v2z:function(Value){gx.O.ZV25Lote3=Value},v2c:function(){gx.fn.setControlValue("vLOTE3",gx.O.AV25Lote3,0)},c2v:function(){gx.O.AV25Lote3=this.val()},val:function(){return gx.fn.getControlValue("vLOTE3")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV26Lote4",gxold:"OV26Lote4",gxvar:"AV26Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Lote4=Value},v2z:function(Value){gx.O.ZV26Lote4=Value},v2c:function(){gx.fn.setControlValue("vLOTE4",gx.O.AV26Lote4,0)},c2v:function(){gx.O.AV26Lote4=this.val()},val:function(){return gx.fn.getControlValue("vLOTE4")},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV27Lote5",gxold:"OV27Lote5",gxvar:"AV27Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Lote5=Value},v2z:function(Value){gx.O.ZV27Lote5=Value},v2c:function(){gx.fn.setControlValue("vLOTE5",gx.O.AV27Lote5,0)},c2v:function(){gx.O.AV27Lote5=this.val()},val:function(){return gx.fn.getControlValue("vLOTE5")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV14Observacao",gxold:"OV14Observacao",gxvar:"AV14Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Observacao=Value},v2z:function(Value){gx.O.ZV14Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV14Observacao,0)},c2v:function(){gx.O.AV14Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   this.AV15SaidaItemSeq = 0 ;
   this.ZV15SaidaItemSeq = 0 ;
   this.OV15SaidaItemSeq = 0 ;
   this.AV16SaidaItemLoteProdutoId = 0 ;
   this.ZV16SaidaItemLoteProdutoId = 0 ;
   this.OV16SaidaItemLoteProdutoId = 0 ;
   this.AV17SaidaItemLoteProdutoDescricao = "" ;
   this.ZV17SaidaItemLoteProdutoDescricao = "" ;
   this.OV17SaidaItemLoteProdutoDescricao = "" ;
   this.AV18DescLote1 = "" ;
   this.ZV18DescLote1 = "" ;
   this.OV18DescLote1 = "" ;
   this.AV19DescLote2 = "" ;
   this.ZV19DescLote2 = "" ;
   this.OV19DescLote2 = "" ;
   this.AV20DescLote3 = "" ;
   this.ZV20DescLote3 = "" ;
   this.OV20DescLote3 = "" ;
   this.AV21DescLote4 = "" ;
   this.ZV21DescLote4 = "" ;
   this.OV21DescLote4 = "" ;
   this.AV22DescLote5 = "" ;
   this.ZV22DescLote5 = "" ;
   this.OV22DescLote5 = "" ;
   this.AV23Lote1 = "" ;
   this.ZV23Lote1 = "" ;
   this.OV23Lote1 = "" ;
   this.AV24Lote2 = "" ;
   this.ZV24Lote2 = "" ;
   this.OV24Lote2 = "" ;
   this.AV25Lote3 = "" ;
   this.ZV25Lote3 = "" ;
   this.OV25Lote3 = "" ;
   this.AV26Lote4 = "" ;
   this.ZV26Lote4 = "" ;
   this.OV26Lote4 = "" ;
   this.AV27Lote5 = "" ;
   this.ZV27Lote5 = "" ;
   this.OV27Lote5 = "" ;
   this.AV14Observacao = "" ;
   this.ZV14Observacao = "" ;
   this.OV14Observacao = "" ;
   this.AV15SaidaItemSeq = 0 ;
   this.AV16SaidaItemLoteProdutoId = 0 ;
   this.AV17SaidaItemLoteProdutoDescricao = "" ;
   this.AV18DescLote1 = "" ;
   this.AV19DescLote2 = "" ;
   this.AV20DescLote3 = "" ;
   this.AV21DescLote4 = "" ;
   this.AV22DescLote5 = "" ;
   this.AV23Lote1 = "" ;
   this.AV24Lote2 = "" ;
   this.AV25Lote3 = "" ;
   this.AV26Lote4 = "" ;
   this.AV27Lote5 = "" ;
   this.AV14Observacao = "" ;
   this.AV38SaidaItemLoteProdutoEmpId = "" ;
   this.AV35SaidaItemLoteCombinacao = "" ;
   this.AV36SaidaItemObservacao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.Events = {"e122762_client": ["ENTER", true] ,"e132762_client": ["'CANCELAR'", true] ,"e152762_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV40SnObservacao',fld:'vSNOBSERVACAO'},{av:'AV14Observacao',fld:'vOBSERVACAO'}],[{av:'AV40SnObservacao',fld:'vSNOBSERVACAO'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV40SnObservacao',fld:'vSNOBSERVACAO'},{av:'AV14Observacao',fld:'vOBSERVACAO'}],[{av:'AV40SnObservacao',fld:'vSNOBSERVACAO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV38SaidaItemLoteProdutoEmpId", "vSAIDAITEMLOTEPRODUTOEMPID", 0, "char");
   this.setVCMap("AV35SaidaItemLoteCombinacao", "vSAIDAITEMLOTECOMBINACAO", 0, "char");
   this.setVCMap("AV36SaidaItemObservacao", "vSAIDAITEMOBSERVACAO", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartelevendaobsprod());
