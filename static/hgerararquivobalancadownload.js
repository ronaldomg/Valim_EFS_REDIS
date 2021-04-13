/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:34:42.43
*/
gx.evt.autoSkip = false;
gx.define('hgerararquivobalancadownload', false, function () {
   this.ServerClass =  "hgerararquivobalancadownload" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV5SdtArquivos=gx.fn.getControlValue("vSDTARQUIVOS") ;
      this.AV7Arquivos=gx.fn.getControlValue("vARQUIVOS") ;
   };
   this.e1423m2_client=function()
   {
      this.executeServerEvent("'DOWNLOAD'", true, arguments[0], false, false);
   };
   this.e1123m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1523m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1623m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,10];
   this.GXLastCtrlId =10;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hgerararquivobalancadownload",[],true,1,true,true,0,false,false,false,"CollSdtArquivos.SdtArquivosItem",0,"px","Novo registro",false,false,false,null,null,false,"AV5SdtArquivos",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.addTextBlock('TXTNOMEARQUIVO',"e1423m2_client");
   Grid1Container.endCell();
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.addMultipleLineEdit("GXV2",10,"CTLNOME","","Nome","svchar",80,"chr",3,"row","200",200,"left",null,true,false,0,"");
   Grid1Container.addBitmap("Image1","IMAGE1",11,0,"px",0,"px","e1423m2_client","","","Image","");
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TXTNOMEARQUIVO", format:0,grid:5};
   GXValidFnc[10]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:0,isacc:0, multiline:true,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOME",gxz:"ZV17GXV2",gxold:"OV17GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV17GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(5),gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   this.ZV17GXV2 = "" ;
   this.OV17GXV2 = "" ;
   this.AV7Arquivos = "" ;
   this.GXV2 = "" ;
   this.AV5SdtArquivos = [ ] ;
   this.Events = {"e1423m2_client": ["'DOWNLOAD'", true] ,"e1123m2_client": ["'FECHAR'", true] ,"e1523m2_client": ["ENTER", true] ,"e1623m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5SdtArquivos',fld:'vSDTARQUIVOS',grid:5}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV5SdtArquivos',fld:'vSDTARQUIVOS',grid:5}],[{av:'gx.fn.getCtrlProperty("TXTNOMEARQUIVO","Caption")',ctrl:'TXTNOMEARQUIVO',prop:'Caption'}]];
   this.EvtParms["'DOWNLOAD'"] = [[{av:'AV5SdtArquivos',fld:'vSDTARQUIVOS',grid:5}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7Arquivos',fld:'vARQUIVOS'}],[]];
   this.setVCMap("AV5SdtArquivos", "vSDTARQUIVOS", 0, "CollSdtArquivos.SdtArquivosItem");
   this.setVCMap("AV7Arquivos", "vARQUIVOS", 0, "vchar");
   this.setVCMap("AV5SdtArquivos", "vSDTARQUIVOS", 0, "CollSdtArquivos.SdtArquivosItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV5SdtArquivos"});
   this.addGridBCProperty("Sdtarquivos", ["Nome"], this.GXValidFnc[10], "AV5SdtArquivos");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerararquivobalancadownload());
