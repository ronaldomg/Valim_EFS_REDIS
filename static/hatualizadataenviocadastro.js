/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:22.98
*/
gx.evt.autoSkip = false;
gx.define('hatualizadataenviocadastro', false, function () {
   this.ServerClass =  "hatualizadataenviocadastro" ;
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
   this.e15wp1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid1 */
      var rowIdx26 = 1 ;
      var currentRowIdx26 = gx.fn.currentGridRowImpl(26) ;
      var rowIdxS26 ;
      var gridObj26 = gx.O.getGridById(26,0) ;
      while ( rowIdx26 <= gridObj26.grid.rows.length )
      {
         rowIdxS26 =  gx.text.padl( gx.text.tostring( rowIdx26), 4, "0")  ;
         gridObj26.instanciateRow(gridObj26.grid.getRowById(rowIdx26 - 1));
         this.AV13Check =  "S"  ;
         rowIdx26 = gx.num.trunc( rowIdx26 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV13Check',fld:'vCHECK'}]);
      }
      if ( currentRowIdx26 )
      {
         gridObj26.instanciateRow(currentRowIdx26);
      }
      this.refreshOutputs([{av:'AV13Check',fld:'vCHECK'}]);
   };
   this.e16wp1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid1 */
      var rowIdx26 = 1 ;
      var currentRowIdx26 = gx.fn.currentGridRowImpl(26) ;
      var rowIdxS26 ;
      var gridObj26 = gx.O.getGridById(26,0) ;
      while ( rowIdx26 <= gridObj26.grid.rows.length )
      {
         rowIdxS26 =  gx.text.padl( gx.text.tostring( rowIdx26), 4, "0")  ;
         gridObj26.instanciateRow(gridObj26.grid.getRowById(rowIdx26 - 1));
         this.AV13Check =  "N"  ;
         rowIdx26 = gx.num.trunc( rowIdx26 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV13Check',fld:'vCHECK'}]);
      }
      if ( currentRowIdx26 )
      {
         gridObj26.instanciateRow(currentRowIdx26);
      }
      this.refreshOutputs([{av:'AV13Check',fld:'vCHECK'}]);
   };
   this.e17wp1_client=function()
   {
      this.clearMessages();
      if ( this.AV11SnZerarDataEnvio == "N" )
      {
         gx.fn.setCtrlProperty("vDTHORAULTENVIO","Enabled", true );
      }
      else
      {
         this.AV12DtHoraUltEnvio =  ""  ;
         gx.fn.setCtrlProperty("vDTHORAULTENVIO","Enabled", false );
      }
      this.refreshOutputs([{av:'AV12DtHoraUltEnvio',fld:'vDTHORAULTENVIO'},{av:'gx.fn.getCtrlProperty("vDTHORAULTENVIO","Enabled")',ctrl:'vDTHORAULTENVIO',prop:'Enabled'}]);
   };
   this.e11wp2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12wp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18wp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,17,25,27,28,29,30,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hatualizadataenviocadastro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addCheckBox("Check",27,"vCHECK","","","Check","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3434,28,"PDVCODIGO","Código do PDV","","PDVCodigo","int",0,"px",10,10,"right",null,[],3434,"PDVCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5852,29,"PDVDATAHORAULTENVCAD","Ultimo Envio Cadastro","","PDVDataHoraUltEnvCad","dtime",0,"px",19,19,"right",null,[],5852,"PDVDataHoraUltEnvCad",true,8,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"dtime",len:10,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTHORAULTENVIO",gxz:"ZV12DtHoraUltEnvio",gxold:"OV12DtHoraUltEnvio",gxvar:"AV12DtHoraUltEnvio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DtHoraUltEnvio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DtHoraUltEnvio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTHORAULTENVIO",gx.O.AV12DtHoraUltEnvio,0)},c2v:function(){gx.O.AV12DtHoraUltEnvio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDTHORAULTENVIO")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNZERARDATAENVIO",gxz:"ZV11SnZerarDataEnvio",gxold:"OV11SnZerarDataEnvio",gxvar:"AV11SnZerarDataEnvio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11SnZerarDataEnvio=Value},v2z:function(Value){gx.O.ZV11SnZerarDataEnvio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNZERARDATAENVIO",gx.O.AV11SnZerarDataEnvio,"S")},c2v:function(){gx.O.AV11SnZerarDataEnvio=this.val()},val:function(){return gx.fn.getControlValue("vSNZERARDATAENVIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[27]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCHECK",gxz:"ZV13Check",gxold:"OV13Check",gxvar:"AV13Check",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV13Check=Value},v2z:function(Value){gx.O.ZV13Check=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vCHECK",row || gx.fn.currentGridRowImpl(26),gx.O.AV13Check,"S")},c2v:function(){gx.O.AV13Check=this.val()},val:function(row){return gx.fn.getGridControlValue("vCHECK",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PDVCODIGO",gxz:"Z3434PDVCodigo",gxold:"O3434PDVCodigo",gxvar:"A3434PDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3434PDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3434PDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(26),gx.O.A3434PDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3434PDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PDVCODIGO",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"dtime",len:10,dec:8,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PDVDATAHORAULTENVCAD",gxz:"Z5852PDVDataHoraUltEnvCad",gxold:"O5852PDVDataHoraUltEnvCad",gxvar:"A5852PDVDataHoraUltEnvCad",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5852PDVDataHoraUltEnvCad=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5852PDVDataHoraUltEnvCad=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PDVDATAHORAULTENVCAD",row || gx.fn.currentGridRowImpl(26),gx.O.A5852PDVDataHoraUltEnvCad,0)},c2v:function(){gx.O.A5852PDVDataHoraUltEnvCad=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PDVDATAHORAULTENVCAD",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[30]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[38]={fld:"JS", format:2,grid:0};
   this.AV12DtHoraUltEnvio = gx.date.nullDate() ;
   this.ZV12DtHoraUltEnvio = gx.date.nullDate() ;
   this.OV12DtHoraUltEnvio = gx.date.nullDate() ;
   this.AV11SnZerarDataEnvio = "" ;
   this.ZV11SnZerarDataEnvio = "" ;
   this.OV11SnZerarDataEnvio = "" ;
   this.ZV13Check = "" ;
   this.OV13Check = "" ;
   this.Z3434PDVCodigo = 0 ;
   this.O3434PDVCodigo = 0 ;
   this.Z5852PDVDataHoraUltEnvCad = gx.date.nullDate() ;
   this.O5852PDVDataHoraUltEnvCad = gx.date.nullDate() ;
   this.AV12DtHoraUltEnvio = gx.date.nullDate() ;
   this.AV11SnZerarDataEnvio = "" ;
   this.AV13Check = "" ;
   this.A3434PDVCodigo = 0 ;
   this.A5852PDVDataHoraUltEnvCad = gx.date.nullDate() ;
   this.Events = {"e11wp2_client": ["ENTER", true] ,"e12wp2_client": ["'FECHAR'", true] ,"e18wp2_client": ["CANCEL", true] ,"e15wp1_client": ["'MARCARTODOSPRODUTOS'", false] ,"e16wp1_client": ["'DESMARCARTODOSPRODUTOS'", false] ,"e17wp1_client": ["VSNZERARDATAENVIO.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11SnZerarDataEnvio',fld:'vSNZERARDATAENVIO'},{av:'AV12DtHoraUltEnvio',fld:'vDTHORAULTENVIO'},{av:'AV13Check',fld:'vCHECK',grid:26},{av:'A3434PDVCodigo',fld:'PDVCODIGO',grid:26}],[{av:'AV14SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'MARCARTODOSPRODUTOS'"] = [[],[{av:'AV13Check',fld:'vCHECK'}]];
   this.EvtParms["'DESMARCARTODOSPRODUTOS'"] = [[],[{av:'AV13Check',fld:'vCHECK'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["VSNZERARDATAENVIO.CLICK"] = [[{av:'AV11SnZerarDataEnvio',fld:'vSNZERARDATAENVIO'}],[{av:'AV12DtHoraUltEnvio',fld:'vDTHORAULTENVIO'},{av:'gx.fn.getCtrlProperty("vDTHORAULTENVIO","Enabled")',ctrl:'vDTHORAULTENVIO',prop:'Enabled'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizadataenviocadastro());
