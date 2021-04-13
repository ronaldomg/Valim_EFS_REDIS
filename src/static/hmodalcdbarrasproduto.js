/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:20.49
*/
gx.evt.autoSkip = false;
gx.define('hmodalcdbarrasproduto', false, function () {
   this.ServerClass =  "hmodalcdbarrasproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV33ProdutoTipoVendaBalanca=gx.fn.getControlValue("vPRODUTOTIPOVENDABALANCA") ;
      this.AV38CodigoBarrasProdutoBarraCalc=gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRACALC",'.') ;
   };
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
   this.s112_client=function()
   {
      this.AV27Cont = gx.num.trunc( 0 ,0) ;
      /* Start For Each Line in Grid */
      var rowIdx27 = 1 ;
      var currentRowIdx27 = gx.fn.currentGridRowImpl(27) ;
      var rowIdxS27 ;
      var gridObj27 = gx.O.getGridById(27,0) ;
      while ( rowIdx27 <= gridObj27.grid.rows.length )
      {
         rowIdxS27 =  gx.text.padl( gx.text.tostring( rowIdx27), 4, "0")  ;
         gridObj27.instanciateRow(gridObj27.grid.getRowById(rowIdx27 - 1));
         this.AV27Cont = gx.num.trunc( this.AV27Cont + 1 ,0) ;
         this.AV30CodigoBarrasRemoveVet[this.AV27Cont-1] =  this.AV28CodigoBarrasRemove  ;
         this.AV22CodigoBarrasProdutoBarraVet[this.AV27Cont-1] = gx.num.trunc( this.AV15CodigoBarrasProdutoBarra ,0) ;
         if ( ! (0==this.AV15CodigoBarrasProdutoBarra) )
         {
            this.AV26emBranco =  "N"  ;
            if ( this.AV33ProdutoTipoVendaBalanca == "0" )
            {
               if ( this.AV15CodigoBarrasProdutoBarra <= 9999 )
               {
                  this.AV32ErroCod =  "S"  ;
               }
            }
            else
            {
               if ( this.AV15CodigoBarrasProdutoBarra > 9999 )
               {
                  this.AV32ErroCod =  "S"  ;
               }
            }
         }
         rowIdx27 = gx.num.trunc( rowIdx27 + 1 ,0) ;
      }
      if ( currentRowIdx27 )
      {
         gridObj27.instanciateRow(currentRowIdx27);
      }
   };
   this.e17ot2_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e11ot2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ot2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e13ot2_client=function()
   {
      this.executeServerEvent("'CALCULACODIGOBARRAS'", false, null, false, false);
   };
   this.e18ot2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,17,19,26,28,29,30,36,37,38,41];
   this.GXLastCtrlId =41;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalcdbarrasproduto",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Codigobarrasremove",28,"vCODIGOBARRASREMOVE","","","CodigoBarrasRemove","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit("Codigobarrasprodutobarra",29,"vCODIGOBARRASPRODUTOBARRA","Código de Barras","","CodigoBarrasProdutoBarra","int",0,"px",15,15,"right",null,[],"Codigobarrasprodutobarra","CodigoBarrasProdutoBarra",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV13ProdutoId",gxold:"OV13ProdutoId",gxvar:"AV13ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV13ProdutoId,0)},c2v:function(){gx.O.AV13ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV14ProdutoDescricaoResumida",gxold:"OV14ProdutoDescricaoResumida",gxvar:"AV14ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV14ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV14ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV14ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[28]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASREMOVE",gxz:"ZV28CodigoBarrasRemove",gxold:"OV28CodigoBarrasRemove",gxvar:"AV28CodigoBarrasRemove",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV28CodigoBarrasRemove=Value},v2z:function(Value){gx.O.ZV28CodigoBarrasRemove=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vCODIGOBARRASREMOVE",row || gx.fn.currentGridRowImpl(27),gx.O.AV28CodigoBarrasRemove,"S")},c2v:function(){gx.O.AV28CodigoBarrasRemove=this.val()},val:function(row){return gx.fn.getGridControlValue("vCODIGOBARRASREMOVE",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV15CodigoBarrasProdutoBarra",gxold:"OV15CodigoBarrasProdutoBarra",gxvar:"AV15CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCODIGOBARRASPRODUTOBARRA",row || gx.fn.currentGridRowImpl(27),gx.O.AV15CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV15CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCODIGOBARRASPRODUTOBARRA",row || gx.fn.currentGridRowImpl(27),'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCALCULOU",gxz:"ZV36SnCalculou",gxold:"OV36SnCalculou",gxvar:"AV36SnCalculou",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SnCalculou=Value},v2z:function(Value){gx.O.ZV36SnCalculou=Value},v2c:function(){gx.fn.setControlValue("vSNCALCULOU",gx.O.AV36SnCalculou,0)},c2v:function(){gx.O.AV36SnCalculou=this.val()},val:function(){return gx.fn.getControlValue("vSNCALCULOU")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCALCULACOD",gxz:"ZV34SnCalculaCod",gxold:"OV34SnCalculaCod",gxvar:"AV34SnCalculaCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34SnCalculaCod=Value},v2z:function(Value){gx.O.ZV34SnCalculaCod=Value},v2c:function(){gx.fn.setControlValue("vSNCALCULACOD",gx.O.AV34SnCalculaCod,0)},c2v:function(){gx.O.AV34SnCalculaCod=this.val()},val:function(){return gx.fn.getControlValue("vSNCALCULACOD")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTBARRA",gxz:"ZV35ContBarra",gxold:"OV35ContBarra",gxvar:"AV35ContBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ContBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35ContBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTBARRA",gx.O.AV35ContBarra,0)},c2v:function(){gx.O.AV35ContBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA2",gxz:"ZV16CodigoBarrasProdutoBarra2",gxold:"OV16CodigoBarrasProdutoBarra2",gxvar:"AV16CodigoBarrasProdutoBarra2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CodigoBarrasProdutoBarra2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16CodigoBarrasProdutoBarra2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA2",gx.O.AV16CodigoBarrasProdutoBarra2,0)},c2v:function(){gx.O.AV16CodigoBarrasProdutoBarra2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA2",'.')},nac:gx.falseFn};
   this.AV13ProdutoId = 0 ;
   this.ZV13ProdutoId = 0 ;
   this.OV13ProdutoId = 0 ;
   this.AV14ProdutoDescricaoResumida = "" ;
   this.ZV14ProdutoDescricaoResumida = "" ;
   this.OV14ProdutoDescricaoResumida = "" ;
   this.ZV28CodigoBarrasRemove = "" ;
   this.OV28CodigoBarrasRemove = "" ;
   this.ZV15CodigoBarrasProdutoBarra = 0 ;
   this.OV15CodigoBarrasProdutoBarra = 0 ;
   this.AV36SnCalculou = "" ;
   this.ZV36SnCalculou = "" ;
   this.OV36SnCalculou = "" ;
   this.AV34SnCalculaCod = "" ;
   this.ZV34SnCalculaCod = "" ;
   this.OV34SnCalculaCod = "" ;
   this.AV35ContBarra = 0 ;
   this.ZV35ContBarra = 0 ;
   this.OV35ContBarra = 0 ;
   this.AV16CodigoBarrasProdutoBarra2 = 0 ;
   this.ZV16CodigoBarrasProdutoBarra2 = 0 ;
   this.OV16CodigoBarrasProdutoBarra2 = 0 ;
   this.AV13ProdutoId = 0 ;
   this.AV14ProdutoDescricaoResumida = "" ;
   this.AV36SnCalculou = "" ;
   this.AV34SnCalculaCod = "" ;
   this.AV35ContBarra = 0 ;
   this.AV16CodigoBarrasProdutoBarra2 = 0 ;
   this.AV33ProdutoTipoVendaBalanca = "" ;
   this.AV28CodigoBarrasRemove = "" ;
   this.AV15CodigoBarrasProdutoBarra = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3919ProdutoSitTriDenEntCodICMS = "" ;
   this.A3927ProdutoSitTriForEntCodICMS = "" ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.AV38CodigoBarrasProdutoBarraCalc = 0 ;
   this.AV32ErroCod = "" ;
   this.AV26emBranco = "" ;
   this.AV22CodigoBarrasProdutoBarraVet = [ ] ;
   this.AV30CodigoBarrasRemoveVet = [ ] ;
   this.AV27Cont = 0 ;
   this.Events = {"e11ot2_client": ["ENTER", true] ,"e12ot2_client": ["'CANCELAR'", true] ,"e13ot2_client": ["'CALCULACODIGOBARRAS'", true] ,"e18ot2_client": ["CANCEL", true] ,"e17ot2_client": ["'APARECERLINHAS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASREMOVE","Visible")',ctrl:'vCODIGOBARRASREMOVE',prop:'Visible'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV32ErroCod',fld:'vERROCOD'}]];
   this.EvtParms["ENTER"] = [[{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3919ProdutoSitTriDenEntCodICMS',fld:'PRODUTOSITTRIDENENTCODICMS'},{av:'A3927ProdutoSitTriForEntCodICMS',fld:'PRODUTOSITTRIFORENTCODICMS'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV32ErroCod',fld:'vERROCOD'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'},{av:'AV14ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'}],[{av:'AV32ErroCod',fld:'vERROCOD'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV47SitTriPriDenEntCodICMS',fld:'vSITTRIPRIDENENTCODICMS'},{av:'AV46SitTriPriForEntCodICMS',fld:'vSITTRIPRIFORENTCODICMS'},{av:'AV40QtdeMenor',fld:'vQTDEMENOR'},{av:'AV41QtdeMaior',fld:'vQTDEMAIOR'},{av:'AV58GXLvl203',fld:'vGXLVL203'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV39CodBarraAnt',fld:'vCODBARRAANT'},{av:'Gx_msg',fld:'vMSG'},{av:'AV19SnReload',fld:'vSNRELOAD'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'}],[{av:'AV21x',fld:'vX'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE'},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'gx.fn.getCtrlProperty("vCODIGOBARRASPRODUTOBARRA","Enabled")',ctrl:'vCODIGOBARRASPRODUTOBARRA',prop:'Enabled'}]];
   this.EvtParms["'APARECERLINHAS'"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3919ProdutoSitTriDenEntCodICMS',fld:'PRODUTOSITTRIDENENTCODICMS'},{av:'A3927ProdutoSitTriForEntCodICMS',fld:'PRODUTOSITTRIFORENTCODICMS'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV32ErroCod',fld:'vERROCOD'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'},{av:'AV14ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'}],[{av:'AV32ErroCod',fld:'vERROCOD'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV47SitTriPriDenEntCodICMS',fld:'vSITTRIPRIDENENTCODICMS'},{av:'AV46SitTriPriForEntCodICMS',fld:'vSITTRIPRIFORENTCODICMS'},{av:'AV40QtdeMenor',fld:'vQTDEMENOR'},{av:'AV41QtdeMaior',fld:'vQTDEMAIOR'},{av:'AV58GXLvl203',fld:'vGXLVL203'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV39CodBarraAnt',fld:'vCODBARRAANT'},{av:'Gx_msg',fld:'vMSG'},{av:'AV19SnReload',fld:'vSNRELOAD'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'}]];
   this.EvtParms["'CALCULACODIGOBARRAS'"] = [[{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3919ProdutoSitTriDenEntCodICMS',fld:'PRODUTOSITTRIDENENTCODICMS'},{av:'A3927ProdutoSitTriForEntCodICMS',fld:'PRODUTOSITTRIFORENTCODICMS'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV32ErroCod',fld:'vERROCOD'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'},{av:'AV14ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'}],[{av:'AV32ErroCod',fld:'vERROCOD'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV13ProdutoId',fld:'vPRODUTOID'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV16CodigoBarrasProdutoBarra2',fld:'vCODIGOBARRASPRODUTOBARRA2'},{av:'AV35ContBarra',fld:'vCONTBARRA'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV34SnCalculaCod',fld:'vSNCALCULACOD'},{av:'AV36SnCalculou',fld:'vSNCALCULOU'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV47SitTriPriDenEntCodICMS',fld:'vSITTRIPRIDENENTCODICMS'},{av:'AV46SitTriPriForEntCodICMS',fld:'vSITTRIPRIFORENTCODICMS'},{av:'AV40QtdeMenor',fld:'vQTDEMENOR'},{av:'AV41QtdeMaior',fld:'vQTDEMAIOR'},{av:'AV58GXLvl203',fld:'vGXLVL203'},{av:'AV45ProdutoAux',fld:'vPRODUTOAUX'},{av:'AV39CodBarraAnt',fld:'vCODBARRAANT'},{av:'Gx_msg',fld:'vMSG'},{av:'AV19SnReload',fld:'vSNRELOAD'},{av:'AV43SitTriDenEntCodICMS',fld:'vSITTRIDENENTCODICMS'},{av:'AV42SitTriForEntCodICMS',fld:'vSITTRIFORENTCODICMS'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASREMOVE","Visible")',ctrl:'vCODIGOBARRASREMOVE',prop:'Visible'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV32ErroCod',fld:'vERROCOD'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASREMOVE","Visible")',ctrl:'vCODIGOBARRASREMOVE',prop:'Visible'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV32ErroCod',fld:'vERROCOD'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASREMOVE","Visible")',ctrl:'vCODIGOBARRASREMOVE',prop:'Visible'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV32ErroCod',fld:'vERROCOD'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38CodigoBarrasProdutoBarraCalc',fld:'vCODIGOBARRASPRODUTOBARRACALC'},{av:'AV28CodigoBarrasRemove',fld:'vCODIGOBARRASREMOVE',grid:27},{av:'AV15CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA',grid:27},{av:'AV33ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASREMOVE","Visible")',ctrl:'vCODIGOBARRASREMOVE',prop:'Visible'},{av:'AV27Cont',fld:'vCONT'},{av:'AV30CodigoBarrasRemoveVet',fld:'vCODIGOBARRASREMOVEVET'},{av:'AV22CodigoBarrasProdutoBarraVet',fld:'vCODIGOBARRASPRODUTOBARRAVET'},{av:'AV26emBranco',fld:'vEMBRANCO'},{av:'AV32ErroCod',fld:'vERROCOD'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV33ProdutoTipoVendaBalanca", "vPRODUTOTIPOVENDABALANCA", 0, "char");
   this.setVCMap("AV38CodigoBarrasProdutoBarraCalc", "vCODIGOBARRASPRODUTOBARRACALC", 0, "int");
   this.setVCMap("AV33ProdutoTipoVendaBalanca", "vPRODUTOTIPOVENDABALANCA", 0, "char");
   this.setVCMap("AV38CodigoBarrasProdutoBarraCalc", "vCODIGOBARRASPRODUTOBARRACALC", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV28CodigoBarrasRemove", rfrProp:"Value", gxAttId:"Codigobarrasremove"});
   GridContainer.addRefreshingVar({rfrVar:"AV15CodigoBarrasProdutoBarra", rfrProp:"Value", gxAttId:"Codigobarrasprodutobarra"});
   GridContainer.addRefreshingVar({rfrVar:"AV33ProdutoTipoVendaBalanca"});
   GridContainer.addRefreshingVar({rfrVar:"AV38CodigoBarrasProdutoBarraCalc"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcdbarrasproduto());
