/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:46:52.59
*/
gx.evt.autoSkip=!1;gx.define("himportarprodutosfelissa",!1,function(){var n,t;this.ServerClass="himportarprodutosfelissa";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){};this.Validv_Marcaclassificacaoid=function(){try{var n=gx.util.balloon.getNew("vMARCACLASSIFICACAOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Colecaoclassificacaoid=function(){try{var n=gx.util.balloon.getNew("vCOLECAOCLASSIFICACAOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Setorclassificacaoid=function(){try{var n=gx.util.balloon.getNew("vSETORCLASSIFICACAOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precocustobrlid=function(){try{var n=gx.util.balloon.getNew("vPRECOCUSTOBRLID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precovendabrlid=function(){try{var n=gx.util.balloon.getNew("vPRECOVENDABRLID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precocustoidxid=function(){try{var n=gx.util.balloon.getNew("vPRECOCUSTOIDXID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precovendaidxid=function(){try{var n=gx.util.balloon.getNew("vPRECOVENDAIDXID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Precoempresaid=function(){try{var n=gx.util.balloon.getNew("vPRECOEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Classificacaoestempresaid=function(){try{var n=gx.util.balloon.getNew("vCLASSIFICACAOESTEMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e132gx2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142gx2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e152gx2_client=function(){this.executeServerEvent("'DIALOG'",!1,null,!1,!1)};this.e112gx2_client=function(){this.executeServerEvent("TIMER.ELAPSED",!1,null,!0,!0)};this.e182gx2_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,13,16,18,19,22,24,25,28,30,31,34,36,39,41,42,45,47,48,51,53,54,57,59,60,63,66,68,69,72,74,75,78,80,87,88,91,92,94,96,97,98,99,100,101,102];this.GXLastCtrlId=102;this.TIMERContainer=gx.uc.getNew(this,93,13,"Timer","TIMERContainer","Timer");t=this.TIMERContainer;t.setProp("Interval","Interval",1e4,"num");t.setDynProp("Enabled","Enabled",!0,"boolean");t.setProp("Visible","Visible",!0,"bool");t.setProp("Class","Class","","char");t.setC2ShowFunction(function(n){n.start()});t.addEventHandler("Elapsed",this.e112gx2_client);this.setUserControl(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE3",grid:0};n[8]={fld:"TABLE1",grid:0};n[13]={lvl:0,type:"svchar",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOTEXTO",gxz:"ZV9ArquivoTexto",gxold:"OV9ArquivoTexto",gxvar:"AV9ArquivoTexto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9ArquivoTexto=n},v2z:function(n){gx.O.ZV9ArquivoTexto=n},v2c:function(){gx.fn.setControlValue("vARQUIVOTEXTO",gx.O.AV9ArquivoTexto,0)},c2v:function(){gx.O.AV9ArquivoTexto=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOTEXTO")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK6",format:0,grid:0};n[18]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Marcaclassificacaoid,isvalid:null,rgrid:[],fld:"vMARCACLASSIFICACAOID",gxz:"ZV23MarcaClassificacaoId",gxold:"OV23MarcaClassificacaoId",gxvar:"AV23MarcaClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23MarcaClassificacaoId=n},v2z:function(n){gx.O.ZV23MarcaClassificacaoId=n},v2c:function(){gx.fn.setControlValue("vMARCACLASSIFICACAOID",gx.O.AV23MarcaClassificacaoId,0)},c2v:function(){gx.O.AV23MarcaClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vMARCACLASSIFICACAOID")},nac:gx.falseFn};n[19]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMARCACLASSIFICACAODESCRICAO",gxz:"ZV22MarcaClassificacaoDescricao",gxold:"OV22MarcaClassificacaoDescricao",gxvar:"AV22MarcaClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22MarcaClassificacaoDescricao=n},v2z:function(n){gx.O.ZV22MarcaClassificacaoDescricao=n},v2c:function(){gx.fn.setControlValue("vMARCACLASSIFICACAODESCRICAO",gx.O.AV22MarcaClassificacaoDescricao,0)},c2v:function(){gx.O.AV22MarcaClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMARCACLASSIFICACAODESCRICAO")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCK7",format:0,grid:0};n[24]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Colecaoclassificacaoid,isvalid:null,rgrid:[],fld:"vCOLECAOCLASSIFICACAOID",gxz:"ZV11ColecaoClassificacaoId",gxold:"OV11ColecaoClassificacaoId",gxvar:"AV11ColecaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11ColecaoClassificacaoId=n},v2z:function(n){gx.O.ZV11ColecaoClassificacaoId=n},v2c:function(){gx.fn.setControlValue("vCOLECAOCLASSIFICACAOID",gx.O.AV11ColecaoClassificacaoId,0)},c2v:function(){gx.O.AV11ColecaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCOLECAOCLASSIFICACAOID")},nac:gx.falseFn};n[25]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOLECAOCLASSIFICACAODESCRICAO",gxz:"ZV10ColecaoClassificacaoDescricao",gxold:"OV10ColecaoClassificacaoDescricao",gxvar:"AV10ColecaoClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10ColecaoClassificacaoDescricao=n},v2z:function(n){gx.O.ZV10ColecaoClassificacaoDescricao=n},v2c:function(){gx.fn.setControlValue("vCOLECAOCLASSIFICACAODESCRICAO",gx.O.AV10ColecaoClassificacaoDescricao,0)},c2v:function(){gx.O.AV10ColecaoClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCOLECAOCLASSIFICACAODESCRICAO")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK8",format:0,grid:0};n[30]={lvl:0,type:"char",len:15,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Setorclassificacaoid,isvalid:null,rgrid:[],fld:"vSETORCLASSIFICACAOID",gxz:"ZV38SetorClassificacaoId",gxold:"OV38SetorClassificacaoId",gxvar:"AV38SetorClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38SetorClassificacaoId=n},v2z:function(n){gx.O.ZV38SetorClassificacaoId=n},v2c:function(){gx.fn.setControlValue("vSETORCLASSIFICACAOID",gx.O.AV38SetorClassificacaoId,0)},c2v:function(){gx.O.AV38SetorClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vSETORCLASSIFICACAOID")},nac:gx.falseFn};n[31]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORCLASSIFICACAODESCRICAO",gxz:"ZV37SetorClassificacaoDescricao",gxold:"OV37SetorClassificacaoDescricao",gxvar:"AV37SetorClassificacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37SetorClassificacaoDescricao=n},v2z:function(n){gx.O.ZV37SetorClassificacaoDescricao=n},v2c:function(){gx.fn.setControlValue("vSETORCLASSIFICACAODESCRICAO",gx.O.AV37SetorClassificacaoDescricao,0)},c2v:function(){gx.O.AV37SetorClassificacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORCLASSIFICACAODESCRICAO")},nac:gx.falseFn};n[34]={fld:"TEXTBLOCK13",format:0,grid:0};n[36]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOPRODUTODATA",gxz:"ZV42PrecoProdutoData",gxold:"OV42PrecoProdutoData",gxvar:"AV42PrecoProdutoData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42PrecoProdutoData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV42PrecoProdutoData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vPRECOPRODUTODATA",gx.O.AV42PrecoProdutoData,0)},c2v:function(){gx.O.AV42PrecoProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPRECOPRODUTODATA")},nac:gx.falseFn};n[39]={fld:"TEXTBLOCK9",format:0,grid:0};n[41]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precocustobrlid,isvalid:null,rgrid:[],fld:"vPRECOCUSTOBRLID",gxz:"ZV27PrecoCustoBRLId",gxold:"OV27PrecoCustoBRLId",gxvar:"AV27PrecoCustoBRLId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27PrecoCustoBRLId=gx.num.intval(n)},v2z:function(n){gx.O.ZV27PrecoCustoBRLId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOCUSTOBRLID",gx.O.AV27PrecoCustoBRLId,0)},c2v:function(){gx.O.AV27PrecoCustoBRLId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOCUSTOBRLID",".")},nac:gx.falseFn};n[42]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOCUSTOBRLDESC",gxz:"ZV26PrecoCustoBRLDesc",gxold:"OV26PrecoCustoBRLDesc",gxvar:"AV26PrecoCustoBRLDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26PrecoCustoBRLDesc=n},v2z:function(n){gx.O.ZV26PrecoCustoBRLDesc=n},v2c:function(){gx.fn.setControlValue("vPRECOCUSTOBRLDESC",gx.O.AV26PrecoCustoBRLDesc,0)},c2v:function(){gx.O.AV26PrecoCustoBRLDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRECOCUSTOBRLDESC")},nac:gx.falseFn};n[45]={fld:"TEXTBLOCK10",format:0,grid:0};n[47]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precovendabrlid,isvalid:null,rgrid:[],fld:"vPRECOVENDABRLID",gxz:"ZV31PrecoVendaBRLId",gxold:"OV31PrecoVendaBRLId",gxvar:"AV31PrecoVendaBRLId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31PrecoVendaBRLId=gx.num.intval(n)},v2z:function(n){gx.O.ZV31PrecoVendaBRLId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOVENDABRLID",gx.O.AV31PrecoVendaBRLId,0)},c2v:function(){gx.O.AV31PrecoVendaBRLId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOVENDABRLID",".")},nac:gx.falseFn};n[48]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOVENDABRLDESC",gxz:"ZV30PrecoVendaBRLDesc",gxold:"OV30PrecoVendaBRLDesc",gxvar:"AV30PrecoVendaBRLDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV30PrecoVendaBRLDesc=n},v2z:function(n){gx.O.ZV30PrecoVendaBRLDesc=n},v2c:function(){gx.fn.setControlValue("vPRECOVENDABRLDESC",gx.O.AV30PrecoVendaBRLDesc,0)},c2v:function(){gx.O.AV30PrecoVendaBRLDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRECOVENDABRLDESC")},nac:gx.falseFn};n[51]={fld:"TEXTBLOCK11",format:0,grid:0};n[53]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precocustoidxid,isvalid:null,rgrid:[],fld:"vPRECOCUSTOIDXID",gxz:"ZV29PrecoCustoIDXId",gxold:"OV29PrecoCustoIDXId",gxvar:"AV29PrecoCustoIDXId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PrecoCustoIDXId=gx.num.intval(n)},v2z:function(n){gx.O.ZV29PrecoCustoIDXId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOCUSTOIDXID",gx.O.AV29PrecoCustoIDXId,0)},c2v:function(){gx.O.AV29PrecoCustoIDXId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOCUSTOIDXID",".")},nac:gx.falseFn};n[54]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOCUSTOIDXDESC",gxz:"ZV28PrecoCustoIDXDesc",gxold:"OV28PrecoCustoIDXDesc",gxvar:"AV28PrecoCustoIDXDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PrecoCustoIDXDesc=n},v2z:function(n){gx.O.ZV28PrecoCustoIDXDesc=n},v2c:function(){gx.fn.setControlValue("vPRECOCUSTOIDXDESC",gx.O.AV28PrecoCustoIDXDesc,0)},c2v:function(){gx.O.AV28PrecoCustoIDXDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRECOCUSTOIDXDESC")},nac:gx.falseFn};n[57]={fld:"TEXTBLOCK12",format:0,grid:0};n[59]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precovendaidxid,isvalid:null,rgrid:[],fld:"vPRECOVENDAIDXID",gxz:"ZV33PrecoVendaIDXId",gxold:"OV33PrecoVendaIDXId",gxvar:"AV33PrecoVendaIDXId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV33PrecoVendaIDXId=gx.num.intval(n)},v2z:function(n){gx.O.ZV33PrecoVendaIDXId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPRECOVENDAIDXID",gx.O.AV33PrecoVendaIDXId,0)},c2v:function(){gx.O.AV33PrecoVendaIDXId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOVENDAIDXID",".")},nac:gx.falseFn};n[60]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOVENDAIDXDESC",gxz:"ZV32PrecoVendaIDXDesc",gxold:"OV32PrecoVendaIDXDesc",gxvar:"AV32PrecoVendaIDXDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32PrecoVendaIDXDesc=n},v2z:function(n){gx.O.ZV32PrecoVendaIDXDesc=n},v2c:function(){gx.fn.setControlValue("vPRECOVENDAIDXDESC",gx.O.AV32PrecoVendaIDXDesc,0)},c2v:function(){gx.O.AV32PrecoVendaIDXDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRECOVENDAIDXDESC")},nac:gx.falseFn};n[63]={fld:"TABERRO",grid:0};n[66]={fld:"IMGERRO",grid:0};n[68]={fld:"TXTERRO",format:0,grid:0};n[69]={fld:"TABCONCLUIDO",grid:0};n[72]={fld:"IMAGE2",grid:0};n[74]={fld:"TXTCONCLUIDO",format:0,grid:0};n[75]={fld:"TABPROCESSO",grid:0};n[78]={fld:"IMGPROC",grid:0};n[80]={fld:"TXTAGUARDE",format:0,grid:0};n[87]={lvl:0,type:"char",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV7PrecoEmpresaId",gxold:"OV7PrecoEmpresaId",gxvar:"AV7PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7PrecoEmpresaId=n},v2z:function(n){gx.O.ZV7PrecoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV7PrecoEmpresaId,0)},c2v:function(){gx.O.AV7PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};n[88]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV6ClassificacaoEstEmpresaId",gxold:"OV6ClassificacaoEstEmpresaId",gxvar:"AV6ClassificacaoEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6ClassificacaoEstEmpresaId=n},v2z:function(n){gx.O.ZV6ClassificacaoEstEmpresaId=n},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV6ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV6ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};n[91]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV34ProcessoId",gxold:"OV34ProcessoId",gxvar:"AV34ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV34ProcessoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV34ProcessoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV34ProcessoId,0)},c2v:function(){gx.O.AV34ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",".")},nac:gx.falseFn};n[92]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[94]={fld:"JAVASCRIPT",format:2,grid:0};n[96]={fld:"PROMPT_MARCACLASSIFICACAOID",grid:0};n[97]={fld:"PROMPT_COLECAOCLASSIFICACAOID",grid:0};n[98]={fld:"PROMPT_SETORCLASSIFICACAOID",grid:0};n[99]={fld:"PROMPT_PRECOCUSTOBRLID",grid:0};n[100]={fld:"PROMPT_PRECOVENDABRLID",grid:0};n[101]={fld:"PROMPT_PRECOCUSTOIDXID",grid:0};n[102]={fld:"PROMPT_PRECOVENDAIDXID",grid:0};this.AV9ArquivoTexto="";this.ZV9ArquivoTexto="";this.OV9ArquivoTexto="";this.AV23MarcaClassificacaoId="";this.ZV23MarcaClassificacaoId="";this.OV23MarcaClassificacaoId="";this.AV22MarcaClassificacaoDescricao="";this.ZV22MarcaClassificacaoDescricao="";this.OV22MarcaClassificacaoDescricao="";this.AV11ColecaoClassificacaoId="";this.ZV11ColecaoClassificacaoId="";this.OV11ColecaoClassificacaoId="";this.AV10ColecaoClassificacaoDescricao="";this.ZV10ColecaoClassificacaoDescricao="";this.OV10ColecaoClassificacaoDescricao="";this.AV38SetorClassificacaoId="";this.ZV38SetorClassificacaoId="";this.OV38SetorClassificacaoId="";this.AV37SetorClassificacaoDescricao="";this.ZV37SetorClassificacaoDescricao="";this.OV37SetorClassificacaoDescricao="";this.AV42PrecoProdutoData=gx.date.nullDate();this.ZV42PrecoProdutoData=gx.date.nullDate();this.OV42PrecoProdutoData=gx.date.nullDate();this.AV27PrecoCustoBRLId=0;this.ZV27PrecoCustoBRLId=0;this.OV27PrecoCustoBRLId=0;this.AV26PrecoCustoBRLDesc="";this.ZV26PrecoCustoBRLDesc="";this.OV26PrecoCustoBRLDesc="";this.AV31PrecoVendaBRLId=0;this.ZV31PrecoVendaBRLId=0;this.OV31PrecoVendaBRLId=0;this.AV30PrecoVendaBRLDesc="";this.ZV30PrecoVendaBRLDesc="";this.OV30PrecoVendaBRLDesc="";this.AV29PrecoCustoIDXId=0;this.ZV29PrecoCustoIDXId=0;this.OV29PrecoCustoIDXId=0;this.AV28PrecoCustoIDXDesc="";this.ZV28PrecoCustoIDXDesc="";this.OV28PrecoCustoIDXDesc="";this.AV33PrecoVendaIDXId=0;this.ZV33PrecoVendaIDXId=0;this.OV33PrecoVendaIDXId=0;this.AV32PrecoVendaIDXDesc="";this.ZV32PrecoVendaIDXDesc="";this.OV32PrecoVendaIDXDesc="";this.AV7PrecoEmpresaId="";this.ZV7PrecoEmpresaId="";this.OV7PrecoEmpresaId="";this.AV6ClassificacaoEstEmpresaId="";this.ZV6ClassificacaoEstEmpresaId="";this.OV6ClassificacaoEstEmpresaId="";this.AV34ProcessoId=0;this.ZV34ProcessoId=0;this.OV34ProcessoId=0;this.AV8AcessoSistemaSequencia=0;this.ZV8AcessoSistemaSequencia=0;this.OV8AcessoSistemaSequencia=0;this.AV9ArquivoTexto="";this.AV23MarcaClassificacaoId="";this.AV22MarcaClassificacaoDescricao="";this.AV11ColecaoClassificacaoId="";this.AV10ColecaoClassificacaoDescricao="";this.AV38SetorClassificacaoId="";this.AV37SetorClassificacaoDescricao="";this.AV42PrecoProdutoData=gx.date.nullDate();this.AV27PrecoCustoBRLId=0;this.AV26PrecoCustoBRLDesc="";this.AV31PrecoVendaBRLId=0;this.AV30PrecoVendaBRLDesc="";this.AV29PrecoCustoIDXId=0;this.AV28PrecoCustoIDXDesc="";this.AV33PrecoVendaIDXId=0;this.AV32PrecoVendaIDXDesc="";this.AV7PrecoEmpresaId="";this.AV6ClassificacaoEstEmpresaId="";this.AV34ProcessoId=0;this.AV8AcessoSistemaSequencia=0;this.A1546ProcessoDtTermino=gx.date.nullDate();this.A1544ProcessoId=0;this.A1543ProcessoRotina="";this.A1554ProcessoQtdeErros=0;this.A710PrecoId=0;this.A709PrecoEmpresaId="";this.A711PrecoDescricao="";this.A722PrecoTipo="";this.A2930ClassificacaoEstId="";this.A2929ClassificacaoEstEmpresaId="";this.A2922ClassificacaoEstDescricao="";this.Events={e132gx2_client:["ENTER",!0],e142gx2_client:["'FECHAR'",!0],e152gx2_client:["'DIALOG'",!0],e112gx2_client:["TIMER.ELAPSED",!0],e182gx2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV34ProcessoId",fld:"vPROCESSOID"}],[{ctrl:"BTNCONFIRMAR",prop:"Enabled"},{ctrl:"BTNFECHAR",prop:"Enabled"}]];this.EvtParms.ENTER=[[{av:"AV17hasErro",fld:"vHASERRO"},{av:"AV9ArquivoTexto",fld:"vARQUIVOTEXTO"},{av:"AV13EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV11ColecaoClassificacaoId",fld:"vCOLECAOCLASSIFICACAOID"},{av:"AV23MarcaClassificacaoId",fld:"vMARCACLASSIFICACAOID"},{av:"AV38SetorClassificacaoId",fld:"vSETORCLASSIFICACAOID"},{av:"AV42PrecoProdutoData",fld:"vPRECOPRODUTODATA"},{av:"AV27PrecoCustoBRLId",fld:"vPRECOCUSTOBRLID"},{av:"AV29PrecoCustoIDXId",fld:"vPRECOCUSTOIDXID"},{av:"AV31PrecoVendaBRLId",fld:"vPRECOVENDABRLID"},{av:"AV33PrecoVendaIDXId",fld:"vPRECOVENDAIDXID"},{av:"AV41UsrCod",fld:"vUSRCOD"},{av:"A2929ClassificacaoEstEmpresaId",fld:"CLASSIFICACAOESTEMPRESAID"},{av:"AV6ClassificacaoEstEmpresaId",fld:"vCLASSIFICACAOESTEMPRESAID"},{av:"A2930ClassificacaoEstId",fld:"CLASSIFICACAOESTID"},{av:"A2922ClassificacaoEstDescricao",fld:"CLASSIFICACAOESTDESCRICAO"},{av:"A709PrecoEmpresaId",fld:"PRECOEMPRESAID"},{av:"AV7PrecoEmpresaId",fld:"vPRECOEMPRESAID"},{av:"A710PrecoId",fld:"PRECOID"},{av:"A711PrecoDescricao",fld:"PRECODESCRICAO"},{av:"A722PrecoTipo",fld:"PRECOTIPO"}],[{av:'gx.fn.getCtrlProperty("TABPROCESSO","Visible")',ctrl:"TABPROCESSO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:"AV34ProcessoId",fld:"vPROCESSOID"},{av:"AV5ApplicationFolder",fld:"vAPPLICATIONFOLDER"},{av:"AV41UsrCod",fld:"vUSRCOD"},{av:"AV33PrecoVendaIDXId",fld:"vPRECOVENDAIDXID"},{av:"AV31PrecoVendaBRLId",fld:"vPRECOVENDABRLID"},{av:"AV29PrecoCustoIDXId",fld:"vPRECOCUSTOIDXID"},{av:"AV27PrecoCustoBRLId",fld:"vPRECOCUSTOBRLID"},{av:"AV42PrecoProdutoData",fld:"vPRECOPRODUTODATA"},{av:"AV38SetorClassificacaoId",fld:"vSETORCLASSIFICACAOID"},{av:"AV23MarcaClassificacaoId",fld:"vMARCACLASSIFICACAOID"},{av:"AV11ColecaoClassificacaoId",fld:"vCOLECAOCLASSIFICACAOID"},{av:"AV13EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV9ArquivoTexto",fld:"vARQUIVOTEXTO"},{av:"AV17hasErro",fld:"vHASERRO"},{av:"AV19i",fld:"vI"},{av:"AV22MarcaClassificacaoDescricao",fld:"vMARCACLASSIFICACAODESCRICAO"},{av:"AV47GXLvl140",fld:"vGXLVL140"},{av:"AV10ColecaoClassificacaoDescricao",fld:"vCOLECAOCLASSIFICACAODESCRICAO"},{av:"AV48GXLvl159",fld:"vGXLVL159"},{av:"AV37SetorClassificacaoDescricao",fld:"vSETORCLASSIFICACAODESCRICAO"},{av:"AV49GXLvl178",fld:"vGXLVL178"},{av:"AV26PrecoCustoBRLDesc",fld:"vPRECOCUSTOBRLDESC"},{av:"AV50GXLvl205",fld:"vGXLVL205"},{av:"AV30PrecoVendaBRLDesc",fld:"vPRECOVENDABRLDESC"},{av:"AV51GXLvl231",fld:"vGXLVL231"},{av:"AV28PrecoCustoIDXDesc",fld:"vPRECOCUSTOIDXDESC"},{av:"AV52GXLvl257",fld:"vGXLVL257"},{av:"AV32PrecoVendaIDXDesc",fld:"vPRECOVENDAIDXDESC"},{av:"AV53GXLvl283",fld:"vGXLVL283"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV8AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["'DIALOG'"]=[[],[{av:"AV20isCloud",fld:"vISCLOUD"},{av:"AV12DirUpload",fld:"vDIRUPLOAD"},{av:"AV9ArquivoTexto",fld:"vARQUIVOTEXTO"}]];this.EvtParms["TIMER.ELAPSED"]=[[{av:"A1543ProcessoRotina",fld:"PROCESSOROTINA"},{av:"A1544ProcessoId",fld:"PROCESSOID"},{av:"AV34ProcessoId",fld:"vPROCESSOID"},{av:"A1546ProcessoDtTermino",fld:"PROCESSODTTERMINO"},{av:"A1554ProcessoQtdeErros",fld:"PROCESSOQTDEERROS"}],[{av:"AV54GXLvl347",fld:"vGXLVL347"},{av:"this.TIMERContainer.Enabled",ctrl:"TIMER",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("TABPROCESSO","Visible")',ctrl:"TABPROCESSO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABERRO","Visible")',ctrl:"TABERRO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABCONCLUIDO","Visible")',ctrl:"TABCONCLUIDO",prop:"Visible"},{av:"AV34ProcessoId",fld:"vPROCESSOID"}]];this.setPrompt("PROMPT_MARCACLASSIFICACAOID",[18]);this.setPrompt("PROMPT_COLECAOCLASSIFICACAOID",[24]);this.setPrompt("PROMPT_SETORCLASSIFICACAOID",[30]);this.setPrompt("PROMPT_PRECOCUSTOBRLID",[41]);this.setPrompt("PROMPT_PRECOVENDABRLID",[47]);this.setPrompt("PROMPT_PRECOCUSTOIDXID",[53]);this.setPrompt("PROMPT_PRECOVENDAIDXID",[59]);this.EnterCtrl=["BTNCONFIRMAR"];this.InitStandaloneVars()});gx.setParentObj(new himportarprodutosfelissa)